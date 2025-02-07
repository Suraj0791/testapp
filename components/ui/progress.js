// components/ui/progress.js
"use client";

export function Progress({ value, className }) {
  return (
    <div className={`w-full bg-gray-200 rounded-full ${className}`}>
      <div
        className="bg-blue-500 h-full rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
