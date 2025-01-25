import React from 'react';
import { Share2, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';

interface QuizShareProps {
  categoryName: string;
  quizName: string;
}

export default function QuizShare({ categoryName, quizName }: QuizShareProps) {
  const url = window.location.href;
  const shareText = `Taking the ${quizName} quiz in ${categoryName} on Trivia Master! Join me!`;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Quiz link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-3 flex items-center gap-4">
      <div className="flex items-center text-gray-600">
        <Share2 className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">Share:</span>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
          title="Share on Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          title="Share on Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
          title="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
          title="Copy link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}