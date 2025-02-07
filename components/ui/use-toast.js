// components/ui/use-toast.js
"use client";

export function useToast() {
  const toast = ({ title, description, variant }) => {
    console.log(`Toast [${variant}]: ${title} - ${description}`);
  };
  return { toast };
}
