import React from 'react';
import { Clock } from 'lucide-react';
import { QuestionState } from '../../types';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  timeElapsed: number;
  questionStates: Record<string, QuestionState>;
}

export default function QuizProgress({ 
  currentQuestion, 
  totalQuestions, 
  timeElapsed,
  questionStates 
}: QuizProgressProps) {
  const answeredQuestions = Object.values(questionStates).filter(state => state.selectedAnswer).length;
  const progress = (answeredQuestions / totalQuestions) * 100;
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-full lg:w-64">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-600">Progress</span>
        <span className="text-sm font-medium text-indigo-600">
          {answeredQuestions} of {totalQuestions}
        </span>
      </div>
      
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-indigo-600 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-1" />
          Time
        </div>
        <span className="font-medium text-indigo-600">{formatTime(timeElapsed)}</span>
      </div>
    </div>
  );
}