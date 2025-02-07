// app/results/page.js
"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const score = parseFloat(searchParams.get("score") || "0");
  const total = parseInt(searchParams.get("total") || "0", 10);
  const maxScore = parseFloat(searchParams.get("maxScore") || "0");
  const percentage = Math.round((score / maxScore) * 100);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 relative max-w-2xl">
      <Confetti width={dimensions.width} height={dimensions.height} />
      <Card className="text-center p-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Quiz Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl mt-4">Total Points Scored: {score}</p>
          <p className="text-lg mt-2">
            Questions Answered: {total}
          </p>
          <p className="text-lg mt-2">Percentage: {percentage}%</p>
        </CardContent>
        <div className="mt-6 flex flex-col gap-4">
          <Link href="/quiz">
            <Button>Try Again</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
