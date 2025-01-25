import React, { useState } from 'react';
import { Question, QuestionState } from '../types';
import { Eye, CheckCircle2, Tag, X } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  index: number;
  questionState: QuestionState;
  onAnswerSelect: (answer: string) => void;
  isQuizCompleted: boolean;
}

export default function QuestionCard({
  question,
  index,
  questionState,
  onAnswerSelect,
  isQuizCompleted,
}: QuestionCardProps) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  return (
    <div id={`question-${question.id}`} className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-indigo-600">
          Question {index + 1}
        </span>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium
            ${question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
              question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'}`}>
            {question.difficulty}
          </span>
          <button
            onMouseEnter={() => setIsAnswerVisible(true)}
            onMouseLeave={() => setIsAnswerVisible(false)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
          >
            <Eye className="w-4 h-4" />
            <span>Reveal Answer</span>
          </button>
        </div>
      </div>

      {isAnswerVisible && (
        <div className="bg-white border rounded-lg p-4 mb-4 shadow-lg">
          <p className="text-sm font-medium text-gray-800">
            Correct Answer: <span className="text-indigo-600">{question.answer}</span>
          </p>
          {questionState.selectedAnswer && (
            <p className="text-sm text-gray-600 mt-2">
              Your answer: <span className={`${questionState.selectedAnswer === question.answer ? 'text-green-600' : 'text-red-600'}`}>
                {questionState.selectedAnswer}
              </span>
            </p>
          )}
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        {question.question}
      </h3>

      <div className="space-y-3 mb-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => !isQuizCompleted && onAnswerSelect(option)}
            disabled={isQuizCompleted}
            className={`w-full px-4 py-3 text-left rounded-lg transition-all
              ${!isQuizCompleted && questionState.selectedAnswer === option ? 'bg-indigo-100 text-indigo-800 ring-2 ring-indigo-500' : ''}
              ${isQuizCompleted && option === question.answer ? 'bg-green-100 text-green-800 ring-2 ring-green-500' : ''}
              ${isQuizCompleted && questionState.selectedAnswer === option && option !== question.answer ? 'bg-red-100 text-red-800 ring-2 ring-red-500' : ''}
              ${!isQuizCompleted ? 'bg-gray-50 text-gray-700 hover:bg-gray-100' : 'cursor-default'}
            `}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {isQuizCompleted && option === question.answer && (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              )}
              {isQuizCompleted && questionState.selectedAnswer === option && option !== question.answer && (
                <X className="w-5 h-5 text-red-600" />
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Tag className="w-4 h-4 text-gray-400" />
        <div className="flex flex-wrap gap-2">
          {question.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}