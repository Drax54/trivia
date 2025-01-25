import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Trophy, Target, BookOpen, Sparkles } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import TrendingCategories from '../components/home/TrendingCategories';
import TrendingQuizzes from '../components/home/TrendingQuizzes';
import HeroSection from '../components/home/HeroSection';
import Layout from '../components/Layout';
import { categories } from '../data/trivia';
import { Helmet } from 'react-helmet-async';



export default function Home() {
  const featuredCategories = categories.slice(0, 6);
  const pageTitle = 'Trivia Master - Test Your Knowledge';
  const pageDescription = 'Welcome to Trivia Master, the ultimate platform to test your knowledge with fun and challenging quizzes across various categories!';
  const canonicalUrl = 'https://yourdomain.com/';


  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Categories */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Categories</h2>
            <Link 
              to="/categories"
              className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2"
            >
              View All Categories
              <BookOpen className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {/* Trending Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <TrendingCategories />
            <TrendingQuizzes />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Trivia Master</h2>
              <p className="text-xl text-gray-600">Discover what makes our platform unique</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
                <Users className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Active Community</h3>
                <p className="text-gray-600">
                  Join a vibrant community of knowledge seekers and quiz enthusiasts from around the world
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
                <Trophy className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Rankings</h3>
                <p className="text-gray-600">
                  Compete with others, earn achievements, and climb the global leaderboard
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
                <Target className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Diverse Topics</h3>
                <p className="text-gray-600">
                  Access a wide range of categories and difficulty levels to match your interests
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Trivia Master started with a simple idea: make learning fun and accessible to everyone. 
                What began as a small project has grown into a global platform where millions of users 
                challenge themselves, learn new things, and connect with others who share their passion 
                for knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">1M+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">10K+</div>
                <div className="text-gray-600">Questions Added Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}