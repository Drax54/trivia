import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { categories } from '../data/trivia';
import { subQuizzes } from '../data/subQuizzes';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-b-xl z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = Icons[category.icon as keyof typeof Icons];
            const categoryQuizzes = subQuizzes.filter(
              (quiz) => quiz.categoryId === category.id
            );

            return (
              <div key={category.id} className="space-y-4">
                <Link
                  to={`/category/${category.id}`}
                  onClick={onClose}
                  className="flex items-center space-x-3 group"
                >
                  {Icon && (
                    <Icon className="w-6 h-6 text-indigo-600 group-hover:text-indigo-700" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                    {category.name}
                  </h3>
                </Link>
                <div className="space-y-2 pl-9">
                  {categoryQuizzes.map((quiz) => (
                    <Link
                      key={quiz.id}
                      to={`/quiz/${category.id}/${quiz.id}`}
                      onClick={onClose}
                      className="block text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {quiz.name}
                      <span className="ml-2 text-xs px-2 py-1 rounded-full bg-gray-100">
                        {quiz.questionsCount} questions
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}