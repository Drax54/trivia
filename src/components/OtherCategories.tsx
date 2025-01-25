import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { categories } from '../data/trivia';

interface OtherCategoriesProps {
  isOpen: boolean;
  onClose: () => void;
  excludeIds: string[];
}

export default function OtherCategories({ isOpen, onClose, excludeIds }: OtherCategoriesProps) {
  if (!isOpen) return null;

  const otherCategories = categories.filter(
    category => !excludeIds.includes(category.id)
  );

  return (
    <div className="absolute top-full right-0 w-64 bg-white shadow-xl rounded-xl z-50 mt-2 animate-fade-in">
      <div className="p-4">
        {otherCategories.map((category) => {
          const Icon = Icons[category.icon as keyof typeof Icons];
          return (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              onClick={onClose}
              className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg group"
            >
              {Icon && (
                <Icon className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700" />
              )}
              <span className="text-gray-700 group-hover:text-gray-900">
                {category.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}