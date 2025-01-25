import React from 'react';
import { Link } from 'react-router-dom';

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const sections: FooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Categories', href: '/categories' },
      { label: 'Leaderboard', href: '/leaderboard' },
      { label: 'About', href: '/about' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { label: 'History', href: '/history' },
      { label: 'Science', href: '/science' },
      { label: 'Entertainment', href: '/entertainment' },
      { label: 'Technology', href: '/technology' },
    ],
  },
  {
    title: 'Support',
    links: [
      // { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-2/3">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg font-semibold text-gray-100 mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}