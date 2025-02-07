import React from 'react'
import { Card } from '@/components/ui/card'
import { RadioGroup } from '@/components/ui/radio-group'

export default function QuestionCard({ question, onAnswer, selectedAnswer }) {
  if (!question || !Array.isArray(question.answers)) {
    return <div>Invalid question data</div>
  }

  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold mb-4">{question.description}</h2>
      <RadioGroup
        value={selectedAnswer}
        onChange={onAnswer}
        className="space-y-2"
      >
        {question.answers.map((answer) => (
          <RadioGroup.Item key={answer.id} value={answer.id}>
            {answer.description}
          </RadioGroup.Item>
        ))}
      </RadioGroup>
    </Card>
  )
}