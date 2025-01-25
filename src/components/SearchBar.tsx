import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

export default function SearchBar({ searchTerm, onSearch }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search categories or tags (e.g., 'History', 'Sci Fi', 'World Wars')"
          className="w-full pl-12 pr-10 py-3 bg-white rounded-xl shadow-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        {searchTerm && (
          <button
            onClick={() => onSearch('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
}