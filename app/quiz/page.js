// app/quiz/page.js
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import QuestionCard from "@/components/quiz/question-card";
import ProgressBar from "@/components/quiz/progress-bar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Timer from "@/components/quiz/timer";
import ScoreDisplay from "@/components/quiz/score-display";
import LoadingSpinner from "@/components/shared/loading-spinner";
import { fetchQuizData } from "@/lib/api";
import Confetti from "react-confetti";

export default function QuizPage() {
  // Local states for quiz data, current question, score, selected answer, etc.
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [timeLeft, setTimeLeft] = useState(null); // in seconds

  const router = useRouter();
  const { toast } = useToast();

  // Update window dimensions (for confetti)
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Fetch quiz data from the API
  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchQuizData();
        setQuizData(data);
        // Set the initial timer based on quiz duration (in minutes converted to seconds)
        setTimeLeft(parseInt(data.duration, 10) * 60);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load quiz data. Please try again.",
          variant: "destructive",
        });
      }
    }
    loadData();
  }, [toast]);

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;
    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [timeLeft]);

  // Auto-submit the quiz when time runs out
  useEffect(() => {
    if (timeLeft === 0 && quizData) {
      toast({
        title: "Time's up!",
        description: "Your quiz time has expired.",
        variant: "destructive",
      });
      finishQuiz();
    }
  }, [timeLeft, quizData, toast]);

  // Callback for when a user selects an answer option
  const handleAnswer = (answerId) => {
    setSelectedAnswer(answerId);
  };

  // Finish the quiz and redirect to the results page
  const finishQuiz = () => {
    router.push(
      `/results?score=${score}&total=${quizData.questions.length}&maxScore=${
        parseInt(quizData.correct_answer_marks, 10) *
        quizData.questions.length
      }`
    );
  };

  // Handle moving to the next question
  const handleNext = () => {
    const currentQ = quizData.questions[currentQuestion];
    // Find the selected answer object using the mapped is_correct field
    const selectedOption = currentQ.answers.find(
      (ans) => ans.id === selectedAnswer
    );
    let newScore = score;
    if (selectedOption?.is_correct) {
      newScore += parseFloat(quizData.correct_answer_marks);
      toast({
        title: "Correct!",
        description: `+${quizData.correct_answer_marks} points`,
        variant: "success",
      });
      // Show confetti for correct answer
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      newScore -= parseFloat(quizData.negative_marks);
      toast({
        title: "Incorrect",
        description: `-${quizData.negative_marks} points`,
        variant: "destructive",
      });
    }
    setScore(newScore);
    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      finishQuiz();
    }
  };

  if (!quizData) {
    return <LoadingSpinner />;
  }

  const currentQ = quizData.questions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-8 relative max-w-4xl">
      {showConfetti && (
        <Confetti width={dimensions.width} height={dimensions.height} />
      )}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{quizData.title}</h1>
          <div className="text-right">
            <Timer timeLeft={timeLeft} />
            <ScoreDisplay score={score} />
          </div>
        </div>
        <ProgressBar
          current={currentQuestion + 1}
          total={quizData.questions.length}
        />
        <QuestionCard
          question={currentQ}
          selectedAnswer={selectedAnswer}
          onAnswer={handleAnswer}
        />
        <div className="mt-6 flex justify-end">
          <Button onClick={handleNext} disabled={!selectedAnswer}>
            {currentQuestion + 1 === quizData.questions.length
              ? "Finish"
              : "Next Question"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
