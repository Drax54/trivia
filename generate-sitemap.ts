import fs from 'fs';
import path from 'path';

// Import your dynamic data
import { categories } from './src/data/categories/mainCategories';
import { subCategories } from './src/data/categories/subCategories';
import { quizTypeQuestions } from './src/data/categories/questions/quizTypeQuestions';

// Define types for better type safety
type Category = {
  id: string;
  name: string;
};

type SubCategory = {
  id: string;
  name: string;
  categoryId: string;
};

type Quiz = {
  id: string;
  quizTypeId: string;
};

// Static pages
const staticPages = [
  '/',
  '/categories',
  '/leaderboard',
  '/about',
];

// Use a Set to avoid duplicate URLs
const dynamicPages = new Set<string>();

// Generate category URLs
categories.forEach((category: Category) => {
  dynamicPages.add(`/${category.id}`);
});

// Generate subcategory URLs
subCategories.forEach((subCategory: SubCategory) => {
  dynamicPages.add(`/${subCategory.categoryId}/${subCategory.id}`);
});

// Generate quiz URLs
quizTypeQuestions.forEach((quiz: Quiz) => {
  dynamicPages.add(`/quiz/${quiz.quizTypeId}`);
});

// Combine static and dynamic URLs
const allPages = [...staticPages, ...dynamicPages];

// Path to save the sitemap in the `dist` folder
const sitemapPath = path.resolve('dist', 'sitemap.xml');

// Generate XML sitemap content
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (url) => `
  <url>
    <loc>http://localhost:5173${url}</loc>
  </url>`
  )
  .join('')}
</urlset>
`;

// Write the sitemap to the `dist` directory
fs.writeFileSync(sitemapPath, sitemapContent);
console.log(`✅ Sitemap generated at ${sitemapPath}`);
