"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const score = Number.parseInt(searchParams.get("score") || "0")
  const total = Number.parseInt(searchParams.get("total") || "0")
  const maxScore = Number.parseInt(searchParams.get("maxScore") || "0")
  const percentage = Math.round((score / maxScore) * 100)

  const getFeedback = () => {
    if (percentage >= 80) return { message: "Excellent!", color: "text-green-500" }
    if (percentage >= 60) return { message: "Good job!", color: "text-blue-500" }
    return { message: "Keep practicing!", color: "text-yellow-500" }
  }

  const feedback = getFeedback()

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card className="text-center">
        <CardHeader>
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Trophy className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-7xl font-bold text-primary">{percentage}%</div>
          <div className="space-y-2">
            <p className={`text-xl font-semibold ${feedback.color}`}>{feedback.message}</p>
            <p className="text-muted-foreground">
              You scored {score} out of {maxScore} points
            </p>
            <p className="text-muted-foreground">{total} questions answered</p>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <Link href="/quiz">
              <Button className="w-full">Try Again</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

