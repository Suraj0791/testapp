// components/quiz/question-card.js
"use client";

import { Card } from "@/components/ui/card";
import React from "react";

/**
 * Renders a quiz question and its answer options.
 *
 * @param {object} props
 * @param {object} props.question - The question object.
 * @param {function} props.onAnswer - Callback when an option is selected.
 * @param {string|number} props.selectedAnswer - The currently selected answer ID.
 */
export default function QuestionCard({ question, onAnswer, selectedAnswer }) {
  if (!question || !Array.isArray(question.answers)) {
    return <div>Invalid question data.</div>;
  }

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">{question.description}</h2>
      <div className="flex flex-col space-y-3">
        {question.answers.map((option) => {
          const isSelected = selectedAnswer === option.id;
          return (
            <div
              key={option.id}
              onClick={() => onAnswer(option.id)}
              className={`cursor-pointer border rounded p-3 transition-colors ${
                isSelected
                  ? "bg-blue-100 border-blue-500"
                  : "bg-white border-gray-300"
              }`}
            >
              {option.description}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
