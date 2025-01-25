import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <div className="w-full lg:w-1/3">
      {/* <h3 className="text-lg font-semibold text-gray-100 mb-4">Stay Updated</h3>
      <p className="text-gray-400 mb-4">
        Subscribe to our newsletter for the latest quizzes and trivia updates.
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Subscribe</span>
          </button>
        </div>
        <p className="text-xs text-gray-500">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </form> */}
    </div>
  );
}