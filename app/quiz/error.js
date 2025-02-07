// app/quiz/error.js
"use client";

import ErrorMessage from "@/components/shared/error-message";

export default function QuizError({ error, reset }) {
  return (
    <ErrorMessage
      message="Something went wrong loading the quiz."
      onRetry={reset}
    />
  );
}
