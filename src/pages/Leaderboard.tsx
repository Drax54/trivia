import React, { useState } from 'react';
import { Trophy, Search, Filter } from 'lucide-react';
import Layout from '../components/Layout';
import GlobalStats from '../components/leaderboard/GlobalStats';
import CategoryStats from '../components/leaderboard/CategoryStats';
import LeaderboardTable from '../components/leaderboard/LeaderboardTable';
import { Helmet } from 'react-helmet-async'; // Import Helmet

// Mock data - in real app, this would come from an API
const MOCK_LEADERBOARD = Array.from({ length: 50 }, (_, i) => ({
  rank: i + 1,
  username: `Player${Math.floor(Math.random() * 10000)}`,
  score: Math.floor(Math.random() * 10000) + 5000,
  quizzesTaken: Math.floor(Math.random() * 100) + 20,
  accuracy: Math.floor(Math.random() * 20) + 75,
  category: ['Science', 'History', 'Entertainment', 'Technology'][Math.floor(Math.random() * 4)]
}));

export default function Leaderboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeFrame, setTimeFrame] = useState('all-time');

  const filteredLeaderboard = MOCK_LEADERBOARD.filter(entry => {
    const matchesSearch = entry.username.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
      entry.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });


  const pageTitle = 'Global Trivia Leaderboard | Trivia Master';
  const metaDescription =
    'Check out the global leaderboard to see top trivia players across all categories like Science, History, Entertainment, and more on Trivia Master.';
  const canonicalUrl = `${window.location.origin}/leaderboard`;


  return (
    <Layout>

       {/* Add SEO tags */}
       <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Global Leaderboard</h1>
          <p className="text-xl text-gray-600">
            See how trivia masters perform across different categories
          </p>
        </div>

        <GlobalStats />
        <CategoryStats />

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search players..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Categories</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="entertainment">Entertainment</option>
            <option value="technology">Technology</option>
          </select>

          <select
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all-time">All Time</option>
            <option value="this-month">This Month</option>
            <option value="this-week">This Week</option>
            <option value="today">Today</option>
          </select>
        </div>

        <LeaderboardTable entries={filteredLeaderboard} />
      </div>
    </Layout>
  );
}