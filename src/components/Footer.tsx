import React from 'react';
import { Brain } from 'lucide-react';
import FooterLinks from './footer/FooterLinks';
import FooterNewsletter from './footer/FooterNewsletter';
import FooterSocial from './footer/FooterSocial';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Brand and Newsletter Section */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-indigo-500" />
              <span className="text-2xl font-bold text-white">Trivia Master</span>
            </div>
            <p className="text-gray-400">
              Challenge yourself with our diverse collection of quizzes. Learn, compete, and have fun!
            </p>
            <FooterSocial />
          </div>

          {/* Links Section */}
          <FooterLinks />
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <FooterNewsletter />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Trivia Master. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}