// components/quiz/progress-bar.js
import { Progress } from "@/components/ui/progress";

/**
 * Displays a progress bar for the quiz.
 *
 * @param {object} props
 * @param {number} props.current - The current question (1-indexed).
 * @param {number} props.total - The total number of questions.
 */
export default function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-500 mb-1">
        <span>
          Question {current} of {total}
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}
