import React from 'react';
import { Brain, Users, Target, Sparkles, Github, Twitter } from 'lucide-react';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <Brain className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Trivia Master</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your ultimate destination for testing and expanding your knowledge across various topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Users className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Community Driven</h3>
            <p className="text-gray-600">
              Join thousands of knowledge enthusiasts who contribute and compete in our growing community
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Target className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Diverse Categories</h3>
            <p className="text-gray-600">
              Explore questions across history, science, entertainment, and more, with new content added regularly
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Sparkles className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Learn & Improve</h3>
            <p className="text-gray-600">
              Track your progress, earn achievements, and compete on our global leaderboard
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I start playing?</h3>
                <p className="text-gray-600">
                  Simply choose a category that interests you and start answering questions. No registration required!
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How are scores calculated?</h3>
                <p className="text-gray-600">
                  Scores are based on correct answers, completion time, and question difficulty. Bonus points are awarded for streaks!
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I contribute questions?</h3>
                <p className="text-gray-600">
                  Yes! We welcome community contributions. Contact us to learn more about becoming a contributor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/trivia-master"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com/triviamaster"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}