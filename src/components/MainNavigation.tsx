import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import OtherCategories from './OtherCategories';

const MAIN_CATEGORIES = [
  { id: 'history', name: 'History Trivia' },
  { id: 'science', name: 'Science Trivia' },
  { id: 'entertainment', name: 'Movie Trivia' },
];

export default function MainNavigation() {
  const [isOtherMenuOpen, setIsOtherMenuOpen] = React.useState(false);
  const otherMenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (otherMenuRef.current && !otherMenuRef.current.contains(event.target as Node)) {
        setIsOtherMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="hidden md:flex items-center space-x-8">
      {MAIN_CATEGORIES.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="text-gray-600 hover:text-indigo-600 transition-colors"
        >
          {category.name}
        </Link>
      ))}
      
      <div ref={otherMenuRef} className="relative">
        <button
          onClick={() => setIsOtherMenuOpen(!isOtherMenuOpen)}
          className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <span>Other Trivia</span>
          <ChevronDown className={`w-4 h-4 transform transition-transform ${
            isOtherMenuOpen ? 'rotate-180' : ''
          }`} />
        </button>
        <OtherCategories 
          isOpen={isOtherMenuOpen} 
          onClose={() => setIsOtherMenuOpen(false)}
          excludeIds={MAIN_CATEGORIES.map(c => c.id)}
        />
      </div>
    </div>
  );
}