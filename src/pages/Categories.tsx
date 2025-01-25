import React, { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import { categories } from '../data/trivia';
import { Helmet } from 'react-helmet-async';


export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('all');

  const breadcrumbItems = [
    { label: 'Categories' }
  ];

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim() && difficulty === 'all') return categories;

    return categories.filter(category => {
      const matchesSearch = !searchTerm.trim() || 
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesSearch;
    });
  }, [searchTerm, difficulty]);



  const pageTitle = 'Trivia Categories - Explore a Wide Range of Topics | Trivia Master';
  const metaDescription = 'Discover quiz categories ranging from beginner to advanced. Explore topics like history, science, movies, and more. Find the perfect quiz for you on Trivia Master!';
  const canonicalUrl = `${window.location.origin}/categories`;



  return (
    <Layout>

      {/* Add Helmet for SEO tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>


      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All Categories
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our comprehensive collection of quiz categories
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <SearchBar 
              searchTerm={searchTerm}
              onSearch={setSearchTerm}
            />
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 appearance-none"
              >
                <option value="all">All Difficulties</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No categories found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setDifficulty('all');
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