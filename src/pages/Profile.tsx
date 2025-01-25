import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Clock, Target, LogOut } from 'lucide-react';
import Layout from '../components/Layout';
import { useAuthStore } from '../store/authStore';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO


export default function Profile() {
  const navigate = useNavigate();
  const { user, signOut } = useAuthStore();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    navigate('/signin');
    return null;
  }

  // Mock data - replace with actual data from your backend
  const quizStats = {
    totalQuizzes: 15,
    averageScore: 85,
    timeSpent: '12h 30m',
    completedCategories: ['History', 'Science', 'Technology'],
  };

  const recentQuizzes = [
    {
      id: 1,
      name: 'World History',
      score: 90,
      date: '2024-03-15',
      category: 'History',
    },
    {
      id: 2,
      name: 'Physics Basics',
      score: 85,
      date: '2024-03-14',
      category: 'Science',
    },
    // Add more recent quizzes
  ];


  const pageTitle = 'User Profile - Track Your Trivia Progress | Trivia Master';
  const metaDescription =
    'View your trivia performance stats, recent quizzes, and achievements. Keep track of your progress and compare with others on Trivia Master.';
  const canonicalUrl = `${window.location.origin}/profile`;



  return (
    <Layout>

      {/* Add Helmet for SEO */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <button
            onClick={handleSignOut}
            className="flex items-center px-4 py-2 text-red-600 hover:text-red-700"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Trophy className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Total Quizzes
            </h3>
            <p className="text-3xl font-bold text-indigo-600">
              {quizStats.totalQuizzes}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Target className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Average Score
            </h3>
            <p className="text-3xl font-bold text-indigo-600">
              {quizStats.averageScore}%
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Clock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Time Spent
            </h3>
            <p className="text-3xl font-bold text-indigo-600">
              {quizStats.timeSpent}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-purple-600">
                {quizStats.completedCategories.length}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Categories
            </h3>
            <p className="text-3xl font-bold text-indigo-600">
              {quizStats.completedCategories.length}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Quizzes
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Quiz</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Score</th>
                  <th className="text-left py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentQuizzes.map((quiz) => (
                  <tr key={quiz.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{quiz.name}</td>
                    <td className="py-3 px-4">{quiz.category}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {quiz.score}%
                      </span>
                    </td>
                    <td className="py-3 px-4">{quiz.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}