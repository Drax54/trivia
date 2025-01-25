import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/trivia';
import * as Icons from 'lucide-react';

export default function TrendingCategories() {
  // Simulate trending categories with the first 5 categories
  const trendingCategories = categories.slice(0, 5).map(category => ({
    ...category,
    trend: Math.floor(Math.random() * 50) + 50, // Random trend percentage
  }));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-semibold text-gray-900">Trending Categories</h3>
        </div>
        <Link 
          to="/categories" 
          className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
        >
          View all
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-4">
        {trendingCategories.map((category) => {
          const Icon = Icons[category.icon as keyof typeof Icons];
          return (
            <Link
              key={category.id}
              to={`/${category.id}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                {Icon && (
                  <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-gray-900">{category.name}</h4>
                  <p className="text-sm text-gray-500">{category.questionsCount} quizzes</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium text-green-600">+{category.trend}%</div>
                <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${category.trend}%` }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}