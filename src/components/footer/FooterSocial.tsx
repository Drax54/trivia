import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/trivia-master',
    icon: Github,
    color: 'hover:text-gray-100',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/triviamaster',
    icon: Twitter,
    color: 'hover:text-blue-400',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/trivia-master',
    icon: Linkedin,
    color: 'hover:text-blue-500',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/triviamaster',
    icon: Instagram,
    color: 'hover:text-pink-500',
  },
];

export default function FooterSocial() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 ${link.color} transition-colors`}
            aria-label={link.name}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
}