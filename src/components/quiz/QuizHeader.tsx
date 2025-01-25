import React from 'react';
import { Brain, Clock, Users, Trophy, Target, Star } from 'lucide-react';
import QuizProgress from './QuizProgress';
import QuizStats from './QuizStats';
import QuizShare from './QuizShare';
import { SubCategory, QuestionState } from '../../types';

interface QuizHeaderProps {
  subQuiz: SubCategory;
  currentQuestion: number;
  totalQuestions: number;
  timeElapsed: number;
  questionStates: Record<string, QuestionState>;
}

export default function QuizHeader({ 
  subQuiz, 
  currentQuestion, 
  totalQuestions, 
  timeElapsed,
  questionStates 
}: QuizHeaderProps) {
  const answeredQuestions = Object.values(questionStates).filter(state => state.selectedAnswer).length;
  const correctAnswers = Object.values(questionStates).filter(state => state.isCorrect).length;
  const accuracy = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-12 h-12 text-indigo-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{subQuiz.name}</h1>
              <p className="text-lg text-gray-600">{subQuiz.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Current Accuracy</h3>
                  <p className="text-xs text-gray-600">Based on answered questions</p>
                </div>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-green-600">{accuracy}%</span>
                <span className="text-sm text-gray-500 mb-1">accuracy</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Star className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Quiz Progress</h3>
                  <p className="text-xs text-gray-600">Questions completed</p>
                </div>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-indigo-600">{answeredQuestions}/{totalQuestions}</span>
                <span className="text-sm text-gray-500 mb-1">questions</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <QuizStats
              icon={<Clock className="w-5 h-5" />}
              label="Time Estimate"
              value={subQuiz.timeEstimate}
            />
            <QuizStats
              icon={<Users className="w-5 h-5" />}
              label="Participants"
              value={`${subQuiz.popularity}k+`}
            />
            <QuizStats
              icon={<Trophy className="w-5 h-5" />}
              label="Difficulty"
              value={subQuiz.difficulty}
              className={
                subQuiz.difficulty === 'beginner' ? 'text-green-600 bg-green-50' :
                subQuiz.difficulty === 'intermediate' ? 'text-yellow-600 bg-yellow-50' :
                'text-red-600 bg-red-50'
              }
            />
          </div>
        </div>

        <div className="w-full lg:w-auto space-y-4">
          <QuizShare 
            categoryName={subQuiz.categoryId} 
            quizName={subQuiz.name} 
          />
          <QuizProgress
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            timeElapsed={timeElapsed}
            questionStates={questionStates}
          />
        </div>
      </div>
    </div>
  );
}