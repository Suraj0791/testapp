// app/quiz/page.js
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import QuestionCard from "@/components/quiz/question-card";
import ProgressBar from "@/components/quiz/progress-bar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import LoadingSpinner from "@/components/shared/loading-spinner";
import { useToast } from "@/hooks/use-toast";
import Confetti from "react-confetti";

export default function QuizPage() {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [timeLeft, setTimeLeft] = useState(null);
  const timerIntervalRef = useRef(null);

  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    fetchQuizData();

    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  async function fetchQuizData() {
    try {
      const response = await fetch(
        "https://api.allorigins.win/get?url=" +
          encodeURIComponent("https://api.jsonserve.com/Uw5CrX")
      );
      const data = await response.json();
      const quizData = JSON.parse(data.contents);

      // Map API data and include is_correct field
      quizData.questions = quizData.questions.map((question) => ({
        ...question,
        answers: question.options
          ? question.options.map((option) => ({
              id: option.id,
              description: option.description,
              is_correct: option.is_correct,
            }))
          : [],
      }));

      setQuizData(quizData);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load quiz questions. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  }

  useEffect(() => {
    if (quizData && timeLeft === null) {
      const initialTime = parseInt(quizData.duration, 10) * 60;
      setTimeLeft(initialTime);
    }
  }, [quizData, timeLeft]);

  useEffect(() => {
    if (timeLeft !== null && timeLeft > 0) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timerIntervalRef.current);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && quizData) {
      toast({
        title: "Time's up!",
        description: "Your quiz time has expired.",
        variant: "destructive",
      });
      router.push(
        `/results?score=${score}&total=${quizData.questions.length}&maxScore=${
          parseInt(quizData.correct_answer_marks, 10) * quizData.questions.length
        }`
      );
    }
  }, [timeLeft, quizData, score, router, toast]);

  const handleAnswer = (answerId) => {
    setSelectedAnswer(answerId);
  };

  const handleNext = () => {
    const currentQuestionData = quizData.questions[currentQuestion];
    const selectedOption = currentQuestionData.answers.find(
      (ans) => ans.id === selectedAnswer
    );
    let newScore = score;

    if (selectedOption?.is_correct) {
      newScore += parseInt(quizData.correct_answer_marks, 10);
      toast({
        title: "Correct!",
        description: `+${quizData.correct_answer_marks} points`,
        className: "bg-green-500 text-white",
      });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      newScore -= parseInt(quizData.negative_marks, 10);
      toast({
        title: "Incorrect",
        description: `-${quizData.negative_marks} points`,
        className: "bg-red-500 text-white",
      });
    }

    setScore(newScore);

    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      router.push(
        `/results?score=${newScore}&total=${quizData.questions.length}&maxScore=${
          parseInt(quizData.correct_answer_marks, 10) * quizData.questions.length
        }`
      );
    }
  };

  if (loading || !quizData) {
    return <LoadingSpinner />;
  }

  const currentQuestionData = quizData.questions[currentQuestion];
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl relative">
      {showConfetti && (
        <Confetti width={dimensions.width} height={dimensions.height} />
      )}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{quizData.title}</h1>
          <div className="text-sm text-right">
            <div>Time Left: {formatTime(timeLeft)}</div>
            <div>Score: {score}</div>
          </div>
        </div>
        <ProgressBar
          current={currentQuestion + 1}
          total={quizData.questions.length}
          score={score}
        />

        <QuestionCard
          question={currentQuestionData}
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
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
