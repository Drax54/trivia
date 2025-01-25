import React from 'react';
import { Question, QuestionState } from '../types';
import { CheckCircle2, XCircle, Circle } from 'lucide-react';

interface TableOfContentsProps {
  questions: Question[];
  questionStates: Record<string, QuestionState>;
  currentQuestionIndex: number;
  onQuestionClick: (index: number) => void;
}

export default function TableOfContents({
  questions,
  questionStates,
  currentQuestionIndex,
  onQuestionClick,
}: TableOfContentsProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Questions Overview
      </h3>
      <div className="space-y-2">
        {questions.map((question, index) => {
          const state = questionStates[question.id];
          return (
            <a
              key={question.id}
              href={`#question-${question.id}`}
              onClick={(e) => {
                e.preventDefault();
                onQuestionClick(index);
              }}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all
                ${currentQuestionIndex === index
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'hover:bg-gray-50'
                }`}
            >
              <span className="text-sm">Question {index + 1}</span>
              {state?.selectedAnswer ? (
                state.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )
              ) : (
                <Circle className="w-5 h-5 text-gray-400" />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}