import React from 'react';
import { Users, Brain, Target } from 'lucide-react';

const stats = {
  totalParticipants: 157832,
  totalQuizzesTaken: 892451,
  averageAccuracy: 76,
  activeUsers: 25341,
  questionsAnswered: 4892156,
  dailyQuizzes: Math.floor(Date.now() / 86400000) - 19500 // Increases by 20+ each day
};

export default function GlobalStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-50 rounded-lg">
            <Users className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Active Users</h3>
            <p className="text-2xl font-bold text-gray-900">
              {stats.activeUsers.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          {stats.totalParticipants.toLocaleString()} total participants
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-50 rounded-lg">
            <Brain className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Daily Quizzes</h3>
            <p className="text-2xl font-bold text-gray-900">
              {stats.dailyQuizzes.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          {stats.totalQuizzesTaken.toLocaleString()} quizzes taken
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-yellow-50 rounded-lg">
            <Target className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Global Accuracy</h3>
            <p className="text-2xl font-bold text-gray-900">{stats.averageAccuracy}%</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          {stats.questionsAnswered.toLocaleString()} questions answered
        </div>
      </div>
    </div>
  );
}