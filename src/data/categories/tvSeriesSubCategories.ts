import { TVSeriesSubCategory } from '../../types';

export const tvSeriesSubCategories: TVSeriesSubCategory[] = [
  {
    id: 'hollywood-tv',
    subCategoryId: 'tv-series',
    name: 'Hollywood TV Series',
    description: 'Test your knowledge of popular American and British TV shows',
    difficulty: 'intermediate',
    questionsCount: 20,
    imageUrl: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37',
    tags: ['hollywood', 'american tv', 'british tv', 'drama', 'sitcoms'],
    popularity: 95,
    timeEstimate: '25 mins'
  },
  {
    id: 'bollywood-tv',
    subCategoryId: 'tv-series',
    name: 'Bollywood TV Series',
    description: 'Challenge yourself with Indian television trivia',
    difficulty: 'beginner',
    questionsCount: 15,
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
    tags: ['bollywood', 'indian tv', 'drama', 'reality shows'],
    popularity: 82,
    timeEstimate: '20 mins'
  },
  {
    id: 'korean-tv',
    subCategoryId: 'tv-series',
    name: 'Korean TV Series',
    description: 'Explore the world of K-dramas and Korean entertainment',
    difficulty: 'advanced',
    questionsCount: 25,
    imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3037c7ff',
    tags: ['k-drama', 'korean tv', 'entertainment', 'variety shows'],
    popularity: 88,
    timeEstimate: '30 mins'
  }
];