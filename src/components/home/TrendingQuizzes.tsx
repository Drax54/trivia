import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Users, Clock, ArrowRight } from 'lucide-react';
import { subCategories } from '../../data/categories';
import { getQuizUrl } from '../../utils/urlHelpers';

export default function TrendingQuizzes() {
  // Get top 5 quizzes based on popularity
  const trendingQuizzes = subCategories
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 5);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />
          <h3 className="text-lg font-semibold text-gray-900">Popular Quizzes</h3>
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
        {trendingQuizzes.map((quiz) => (
          <Link
            key={quiz.id}
            to={getQuizUrl(quiz.categoryId, quiz.name)}
            className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 hover:border-gray-200"
          >
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${quiz.imageUrl})` }}
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-1">{quiz.name}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{quiz.popularity}k plays</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{quiz.timeEstimate}</span>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium
                ${quiz.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                quiz.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'}`}>
                {quiz.difficulty}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}