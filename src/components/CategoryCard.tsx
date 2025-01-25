import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Category } from '../types';
import { getCategoryUrl } from '../utils/urlHelpers';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const navigate = useNavigate();
  const Icon = Icons[category.icon as keyof typeof Icons];

  return (
    <div
      onClick={() => navigate(getCategoryUrl(category.name))}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl font-bold text-gray-800">{category.name}</div>
        {Icon && <Icon className="w-8 h-8 text-indigo-600" />}
      </div>
      <p className="text-gray-600 mb-4">{category.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {category.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
        {category.tags.length > 3 && (
          <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium">
            +{category.tags.length - 3} more
          </span>
        )}
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-indigo-600 font-semibold">
          {category.questionsCount} quizzes
        </span>
        <span className="text-gray-500">View all →</span>
      </div>
    </div>
  );
}