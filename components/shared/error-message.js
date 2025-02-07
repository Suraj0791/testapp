// components/shared/error-message.js
"use client";

import { Button } from "@/components/ui/button";

/**
 * Displays an error message.
 *
 * @param {object} props
 * @param {string} props.message - The error message.
 * @param {function} [props.onRetry] - Callback to retry the action.
 */
export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="text-center py-8">
      <p className="text-red-500">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} className="mt-4">
          Try Again
        </Button>
      )}
    </div>
  );
}
