// components/quiz/score-display.js
"use client";

/**
 * Displays the current score.
 *
 * @param {object} props
 * @param {number} props.score - The current score.
 */
export default function ScoreDisplay({ score }) {
  return <div className="text-lg font-semibold">Score: {score}</div>;
}
