import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Lightbulb, Trophy, Target, Sparkles, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-16 h-16 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Challenge Your Knowledge
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl">
            Join millions of quiz enthusiasts and test your expertise across various categories
          </p>
          <div className="flex gap-4">
            <Link
              to="/categories"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Explore Categories
            </Link>
            <Link
              to="/leaderboard"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors border border-indigo-600"
            >
              View Leaderboard
            </Link>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 relative">
          <div className="relative w-full h-[400px]">
            {/* Central Brain Icon */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center animate-pulse">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Floating Icons with Animations */}
            <div className="absolute left-0 top-1/4 animate-bounce">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <div className="absolute right-0 top-1/3 animate-bounce" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
            </div>

            <div className="absolute left-1/4 bottom-0 animate-bounce" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-red-600" />
              </div>
            </div>

            <div className="absolute right-1/4 top-0 animate-bounce" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            <div className="absolute right-1/3 bottom-1/4 animate-bounce" style={{ animationDelay: '0.8s' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <path
                d="M200,200 L300,150 L400,200 L300,250 Z"
                className="stroke-indigo-200"
                fill="none"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <path
                d="M150,100 L250,150 L350,100"
                className="stroke-indigo-200"
                fill="none"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <path
                d="M150,300 L250,250 L350,300"
                className="stroke-indigo-200"
                fill="none"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}