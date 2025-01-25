import React, { useCallback } from 'react';
import { Trophy, Clock, Target, BarChart3, CheckCircle2 } from 'lucide-react';
import { Question, QuestionState } from '../types';
import { useResizeObserver } from '../hooks/useResizeObserver';

interface QuizSidebarProps {
  questions: Question[];
  currentQuestionIndex: number;
  questionStates: Record<string, QuestionState>;
  timeElapsed: number;
}

export default function QuizSidebar({
  questions,
  currentQuestionIndex,
  questionStates,
  timeElapsed,
}: QuizSidebarProps) {
  const handleResize = useCallback((entry: ResizeObserverEntry) => {
    // Handle resize if needed
  }, []);

  const sidebarRef = useResizeObserver<HTMLDivElement>(handleResize);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredQuestions = Object.values(questionStates).filter(state => state.selectedAnswer).length;
  const correctAnswers = Object.values(questionStates).filter(state => state.isCorrect).length;
  const progressPercentage = Math.round((answeredQuestions / questions.length) * 100);

  return (
    <div ref={sidebarRef} className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-16">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <div>
            <div className="text-sm text-gray-600">Current Score</div>
            <div className="text-xl font-bold">{correctAnswers} / {questions.length}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Clock className="w-6 h-6 text-blue-500" />
          <div>
            <div className="text-sm text-gray-600">Time Elapsed</div>
            <div className="text-xl font-bold">{formatTime(timeElapsed)}</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="w-6 h-6 text-green-500" />
              <span className="text-sm text-gray-600">Progress</span>
            </div>
            <span className="text-sm font-medium">{progressPercentage}%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{answeredQuestions} answered</span>
            <span>{questions.length - answeredQuestions} remaining</span>
          </div>
        </div>

        <div className="pt-6 border-t">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            <div className="text-sm font-medium text-gray-700">Question Difficulty</div>
          </div>
          <div className="space-y-3">
            {['easy', 'medium', 'hard'].map((difficulty) => {
              const questionsOfDifficulty = questions.filter((q) => q.difficulty === difficulty);
              const answeredOfDifficulty = questionsOfDifficulty.filter(q =>
                questionStates[q.id]?.selectedAnswer
              ).length;

              return (
                <div key={difficulty} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm capitalize text-gray-600">{difficulty}</span>
                    <span className="text-sm font-medium">
                      {answeredOfDifficulty} / {questionsOfDifficulty.length}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${difficulty === 'easy' ? 'bg-green-500' :
                          difficulty === 'medium' ? 'bg-yellow-500' :
                            'bg-red-500'
                        }`}
                      style={{
                        width: `${questionsOfDifficulty.length ?
                          (answeredOfDifficulty / questionsOfDifficulty.length) * 100 : 0}%`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}