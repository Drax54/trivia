import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';
import MainNavigation from './MainNavigation';
import MobileNavigation from './MobileNavigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-indigo-600" />
            <span className="font-bold text-xl">Trivia Master</span>
          </Link>

          <MainNavigation />

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/leaderboard" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Leaderboard
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              About
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <MobileNavigation onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </div>
    </nav>
  );
}