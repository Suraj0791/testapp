import { Progress } from "@/components/ui/progress"

export default function ProgressBar({ current, total, score }) {
  const progress = (current / total) * 100

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>
          Question {current} of {total}
        </span>
        <span>Score: {score}</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}

