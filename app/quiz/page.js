"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import QuestionCard from "@/components/quiz/question-card"
import ProgressBar from "@/components/quiz/progress-bar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import LoadingSpinner from "@/components/shared/loading-spinner"
import { useToast } from "@/hooks/use-toast"


export default function QuizPage() {
  const [quizData, setQuizData] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    fetchQuizData()
  }, [])

  async function fetchQuizData() {
    try {
      const response = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.jsonserve.com/Uw5CrX"))
      const data = await response.json()
      const quizData = JSON.parse(data.contents)
      // Ensure the quizData structure matches the expected format
      quizData.questions = quizData.questions.map(question => ({
        ...question,
        answers: question.answers.map(answer => ({
          id: answer.id,
          description: answer.description
        }))
      }))
      setQuizData(quizData)
      setLoading(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load quiz questions. Please try again.",
        variant: "destructive",
      })
      setLoading(false)
    }
  }

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer)
  }

  const handleNext = () => {
    const currentQuestionData = quizData.questions[currentQuestion]
    if (selectedAnswer === currentQuestionData.correct_answer) {
      setScore(score + Number.parseInt(quizData.correct_answer_marks))
      toast({
        title: "Correct!",
        description: `+${quizData.correct_answer_marks} points`,
        className: "bg-green-500 text-white",
      })
    } else {
      setScore(score - Number.parseInt(quizData.negative_marks))
      toast({
        title: "Incorrect",
        description: `-${quizData.negative_marks} points`,
        className: "bg-red-500 text-white",
      })
    }

    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      router.push(
        `/results?score=${score}&total=${quizData.questions.length}&maxScore=${Number.parseInt(quizData.correct_answer_marks) * quizData.questions.length}`,
      )
    }
  }

  if (loading || !quizData) {
    return <LoadingSpinner />
  }

  const currentQuestionData = quizData.questions[currentQuestion]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">{quizData.title}</h1>
        <p className="text-muted-foreground mb-4">Topic: {quizData.topic}</p>
        <ProgressBar current={currentQuestion + 1} total={quizData.questions.length} score={score} />

        <QuestionCard question={currentQuestionData} onAnswer={handleAnswer} selectedAnswer={selectedAnswer} />

        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">Time left: {quizData.duration} minutes</div>
          <Button onClick={handleNext} disabled={!selectedAnswer}>
            {currentQuestion + 1 === quizData.questions.length ? "Finish" : "Next Question"}
          </Button>
        </div>
      </Card>
    </div>
  )
}

