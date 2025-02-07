// components/quiz/timer.js
"use client";

/**
 * Timer component to display remaining time.
 *
 * @param {object} props
 * @param {number} props.timeLeft - Time left in seconds.
 */
export default function Timer({ timeLeft }) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  return <div className="text-lg font-mono">{formattedTime}</div>;
}
