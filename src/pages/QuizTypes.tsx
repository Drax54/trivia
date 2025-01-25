import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, Users, Clock } from 'lucide-react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import { categories } from '../data/categories';
import { subCategories } from '../data/categories';
import { quizTypes } from '../data/quizTypes';
import { generateSlug } from '../utils/urlHelpers';
import * as Icons from 'lucide-react';
import { Helmet } from 'react-helmet-async';


export default function QuizTypes() {
  const { categorySlug, subCategorySlug } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const category = categories.find(c => generateSlug(c.name) === categorySlug);
  const subCategory = subCategories.find(sc => generateSlug(sc.name) === subCategorySlug);

  const breadcrumbItems = [
    { label: 'Categories', href: '/categories' },
    { label: category?.name || '', href: `/${categorySlug}` },
    { label: subCategory?.name || '' }
  ];




  const filteredQuizTypes = useMemo(() => {
    if (!subCategory) return [];

    let filtered = quizTypes.filter(qt => qt.subCategoryId === subCategory.id);

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(qt =>
        qt.name.toLowerCase().includes(term) ||
        qt.description.toLowerCase().includes(term) ||
        qt.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(qt => qt.difficulty === selectedDifficulty);
    }

    return filtered;
  }, [subCategory, searchTerm, selectedDifficulty]);

  if (!category || !subCategory) {
    navigate('/categories');
    return null;
  }

  console.log('categorySlug:', categorySlug);
  console.log('subCategorySlug:', subCategorySlug);
  console.log('Generated Category Slug:', generateSlug(categories[0]?.name));
  console.log('Generated SubCategory Slug:', generateSlug(subCategories[0]?.name));
  
  console.log('Filtered Quiz Types:', filteredQuizTypes);
  console.log('SubCategory ID:', subCategory?.id);
  console.log('Quiz Type IDs:', quizTypes.map(qt => qt.subCategoryId));
  
  // Dynamic meta tags
  const pageTitle = `${subCategory?.name || 'Quizzes'} Trivia Quiz and Answers - Trivia Master`;
  const metaDescription = `Explore a variety of engaging quizzes in the ${subCategory?.name || 'General'} category. Test your knowledge on topics like ${subCategory?.tags?.slice(0, 3).join(', ') || 'fun and knowledge'} and more!`;
  const canonicalUrl = `${window.location.origin}/categories/${categorySlug}/${subCategorySlug}`;
  
  return (
    <Layout>

      {/* Add Helmet for meta tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{subCategory.name}</h1>
          <p className="text-xl text-gray-600">{subCategory.description}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search quiz types..."
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
          {filteredQuizTypes.map((quizType) => {
            const Icon = Icons[quizType.icon as keyof typeof Icons];
            return (
              <div
                key={quizType.id}
                // onClick={() => navigate(`/${categorySlug}/${subCategorySlug}/${generateSlug(quizType.name)}`)}

                onClick={() => navigate(`/quiz/${quizType.id}`)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${quizType.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white mb-2">
                      {Icon && <Icon className="w-5 h-5" />}
                      <span className="font-medium">{quizType.name}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium
                      ${quizType.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                        quizType.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'}`}>
                      {quizType.difficulty}
                    </span>
                    <span className="text-sm text-gray-500">{quizType.questionsCount} questions</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{quizType.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {quizType.tags.slice(0, 3).map((tag) => (
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
                      <span>{quizType.popularity}k plays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{quizType.timeEstimate}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredQuizTypes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No quiz types found matching your criteria.
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