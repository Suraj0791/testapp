import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Brain, Timer, Medal } from "lucide-react"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8 animate-slide-up">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Quiz Master
        </h1>
        <p className="text-xl text-center text-muted-foreground max-w-2xl">
          Challenge yourself with our interactive quizzes and earn achievements while learning
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full my-8">
          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Earn Points</h3>
                <p className="text-sm text-muted-foreground">Get rewarded for correct answers</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Learn & Grow</h3>
                <p className="text-sm text-muted-foreground">Improve your knowledge</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Timer className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Time Challenges</h3>
                <p className="text-sm text-muted-foreground">Race against the clock</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Medal className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Achievements</h3>
                <p className="text-sm text-muted-foreground">Unlock special badges</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Link href="/quiz">
          <Button size="lg" className="text-lg px-8">
            Start Quiz
          </Button>
        </Link>
      </div>
    </main>
  )
}

