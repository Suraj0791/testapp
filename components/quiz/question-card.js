// components/quiz/question-card.js
"use client";

import { Card } from "@/components/ui/card";
import React from "react";

export default function QuestionCard({ question, onAnswer, selectedAnswer }) {
  if (!question || !Array.isArray(question.answers)) {
    return <div>Invalid question data</div>;
  }

  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold mb-4">{question.description}</h2>
      <div className="flex flex-col space-y-3">
        {question.answers.map((answer) => {
          const isSelected = selectedAnswer === answer.id;
          return (
            <div
              key={answer.id}
              onClick={() => onAnswer(answer.id)}
              className={`cursor-pointer border rounded p-3 hover:bg-gray-100 transition-all ${
                isSelected ? "border-blue-500 bg-blue-100" : "border-gray-300"
              }`}
            >
              {answer.description}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
