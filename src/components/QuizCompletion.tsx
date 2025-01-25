import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Clock, Target, X, Printer } from 'lucide-react';
import { Question, QuestionState } from '../types';
import ShareQuiz from './ShareQuiz';
import { printQuizAnswers } from '../utils/pdfExport';
import Confetti from './animations/Confetti';

interface QuizCompletionProps {
  questions: Question[];
  questionStates: Record<string, QuestionState>;
  timeElapsed: number;
  onRetry: () => void;
  onClose: () => void;
  categoryId: string;
  categoryName: string;
}

export default function QuizCompletion({
  questions,
  questionStates,
  timeElapsed,
  onRetry,
  onClose,
  categoryId,
  categoryName,
}: QuizCompletionProps) {
  const navigate = useNavigate();
  const score = Object.values(questionStates).reduce((acc, state) => 
    acc + (state.isCorrect ? 1 : 0), 0);
  const percentage = Math.round((score / questions.length) * 100);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const handlePrint = () => {
    const title = `${categoryName} Quiz Results - Score: ${score}/${questions.length} (${percentage}%)`;
    printQuizAnswers(questions, title);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <Confetti />
      <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full relative animate-bounce-in">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-5">
          <div className="text-center mb-4">
            <div className="inline-block p-2 rounded-full bg-indigo-100 mb-3">
              <Trophy className="w-6 h-6 text-indigo-600 animate-trophy" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Quiz Complete!</h2>
            <p className="text-sm text-gray-600">Here's how you did</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <Target className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-gray-900">{percentage}%</div>
              <div className="text-xs text-gray-600">Accuracy</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <Clock className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-gray-900">{formatTime(timeElapsed)}</div>
              <div className="text-xs text-gray-600">Time</div>
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="text-2xl font-bold text-indigo-600 mb-1 animate-pulse">
              {score} / {questions.length}
            </div>
            <div className="text-xs text-gray-600">Questions Answered Correctly</div>
          </div>

          <div className="mb-4">
            <ShareQuiz
              categoryId={categoryId}
              categoryName={categoryName}
              score={score}
              totalQuestions={questions.length}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <button
              onClick={handlePrint}
              className="w-full px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Printer className="w-4 h-4" />
              Print Results
            </button>
            <button
              onClick={onRetry}
              className="w-full px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              Back to Categories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}