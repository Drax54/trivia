
//main category file


import { Category } from '../../types';

const categories: Category[] = [
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: 'Film',
    description: 'Movies, TV shows, and pop culture trivia',
    questionsCount: 15,
    tags: ['movies', 'tv shows', 'music', 'celebrities', 'pop culture', 'classic films']
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: 'Cpu',
    description: 'Test your knowledge of tech and innovation',
    questionsCount: 15,
    tags: ['computers', 'artificial intelligence', 'programming', 'internet', 'mobile devices', 'cybersecurity']
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: 'Trophy',
    description: 'Challenge yourself with sports trivia',
    questionsCount: 15,
    tags: ['football', 'olympics', 'cricket', 'athletes', 'world cup', 'championships']
  }
];

export { categories };