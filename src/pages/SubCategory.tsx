import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, Filter, Trophy, Clock, Users } from 'lucide-react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import { categories, subCategories } from '../data/categories';
import { generateSlug } from '../utils/urlHelpers';
import * as Icons from 'lucide-react';
import { Helmet } from 'react-helmet-async';


export default function SubCategory() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const category = categories.find(c => generateSlug(c.name) === categorySlug);
  const Icon = category ? Icons[category.icon as keyof typeof Icons] : null;

  const breadcrumbItems = [
    { label: 'Categories', href: '/categories' },
    { label: category?.name || '' }
  ];

  const filteredSubCategories = useMemo(() => {
    if (!category) return [];

    let filtered = subCategories.filter(quiz => quiz.categoryId === category.id);

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(quiz =>
        quiz.name.toLowerCase().includes(term) ||
        quiz.description.toLowerCase().includes(term) ||
        quiz.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(quiz => quiz.difficulty === selectedDifficulty);
    }

    return filtered;
  }, [category, searchTerm, selectedDifficulty]);

  if (!category) {
    navigate('/categories');
    return null;
  }


  const pageTitle = `${category.name} Relates All Trivia Quizzes and Answers - Trivia Master`;
  const pageDescription = `Explore ${category.name} quizzes and test your knowledge with a wide range of questions.`;


  return (
    <Layout>

      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://yourdomain.com/${categorySlug}`} />
        
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            {Icon && <Icon className="w-12 h-12 text-indigo-600" />}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
              <p className="text-gray-600 mt-1">{category.description}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search ${category.name} subcategories...`}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubCategories.map((subCategory) => (
            <div
              key={subCategory.id}
              onClick={() => navigate(`/${categorySlug}/${generateSlug(subCategory.name)}`)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${subCategory.imageUrl})` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{subCategory.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium
                    ${subCategory.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                      subCategory.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}`}>
                    {subCategory.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{subCategory.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {subCategory.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{subCategory.popularity}k plays</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{subCategory.timeEstimate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSubCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No subcategories found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDifficulty('all');
              }}
              className="mt-4 text-indigo-600 hover:text-indigo-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}