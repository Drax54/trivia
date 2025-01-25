import React from 'react';
import { Share2, Twitter, Facebook, Linkedin, Link } from 'lucide-react';

interface ShareQuizProps {
  categoryId: string;
  categoryName: string;
  score?: number;
  totalQuestions?: number;
}

export default function ShareQuiz({ categoryId, categoryName, score, totalQuestions }: ShareQuizProps) {
  const baseUrl = window.location.origin;
  const quizUrl = `${baseUrl}/quiz/${categoryId}`;
  const shareText = score !== undefined
    ? `I scored ${score}/${totalQuestions} in the ${categoryName} Quiz on Trivia Master!`
    : `Test your knowledge with the ${categoryName} Quiz on Trivia Master!`;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(quizUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quizUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(quizUrl)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(quizUrl);
      alert('Quiz link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2 text-gray-600 mb-2">
        <Share2 className="w-4 h-4" />
        <span>Share this quiz</span>
      </div>
      <div className="flex space-x-4">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <Link className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}