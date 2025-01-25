import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { categories } from '../data/trivia';
import * as Icons from 'lucide-react';

const MAIN_CATEGORIES = [
  { id: 'history', name: 'History Trivia' },
  { id: 'science', name: 'Science Trivia' },
  { id: 'entertainment', name: 'Movie Trivia' },
];

interface MobileNavigationProps {
  onClose: () => void;
}

export default function MobileNavigation({ onClose }: MobileNavigationProps) {
  const [isOtherOpen, setIsOtherOpen] = React.useState(false);
  const otherCategories = categories.filter(
    category => !MAIN_CATEGORIES.map(c => c.id).includes(category.id)
  );

  return (
    <div className="py-4 space-y-4">
      {MAIN_CATEGORIES.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors"
          onClick={onClose}
        >
          {category.name}
        </Link>
      ))}
      
      <div>
        <button
          onClick={() => setIsOtherOpen(!isOtherOpen)}
          className="flex items-center justify-between w-full py-2 text-gray-600"
        >
          <span>Other Trivia</span>
          <ChevronDown className={`w-4 h-4 transform transition-transform ${
            isOtherOpen ? 'rotate-180' : ''
          }`} />
        </button>
        
        {isOtherOpen && (
          <div className="pl-4 space-y-2 mt-2">
            {otherCategories.map((category) => {
              const Icon = Icons[category.icon as keyof typeof Icons];
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  onClick={onClose}
                  className="flex items-center space-x-2 py-2 text-gray-600 hover:text-indigo-600"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{category.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      
      <Link
        to="/leaderboard"
        className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors"
        onClick={onClose}
      >
        Leaderboard
      </Link>
      <Link
        to="/about"
        className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors"
        onClick={onClose}
      >
        About
      </Link>
    </div>
  );
}