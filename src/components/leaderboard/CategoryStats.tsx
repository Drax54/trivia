import React from 'react';
import { BarChart3 } from 'lucide-react';
import { categories } from '../../data/categories';

// Mock data - in real app, this would come from an API
const categoryStats = categories.map(category => ({
  id: category.id,
  name: category.name,
  totalParticipants: Math.floor(Math.random() * 10000) + 5000,
  averageScore: Math.floor(Math.random() * 20) + 70,
  quizzesTaken: Math.floor(Math.random() * 50000) + 10000
}));

export default function CategoryStats() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-bold text-gray-900">Category Performance</h2>
      </div>
      
      <div className="space-y-6">
        {categoryStats.map(stat => (
          <div key={stat.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">{stat.name}</span>
              <span className="text-sm text-gray-600">
                {stat.totalParticipants.toLocaleString()} participants
              </span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${stat.averageScore}%` }}
              />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Avg. Score: {stat.averageScore}%</span>
              <span className="text-gray-600">
                {stat.quizzesTaken.toLocaleString()} quizzes taken
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}