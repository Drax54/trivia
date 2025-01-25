import { SubQuiz } from '../types';

export const subQuizzes: SubQuiz[] = [
  // History Quizzes
  {
    id: 'uk-history',
    categoryId: 'history',
    name: 'British History',
    description: 'Explore the rich history of the United Kingdom from medieval times to the modern era',
    difficulty: 'intermediate',
    questionsCount: 15,
    imageUrl: 'https://images.unsplash.com/photo-1543799382-9a0208331ef7',
    tags: ['uk', 'monarchy', 'medieval', 'industrial revolution'],
    popularity: 25,
    timeEstimate: '20 mins'
  },
  {
    id: 'us-history',
    categoryId: 'history',
    name: 'American History',
    description: 'From the colonial period to modern America - test your knowledge of US history',
    difficulty: 'beginner',
    questionsCount: 20,
    imageUrl: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74',
    tags: ['usa', 'independence', 'civil war', 'modern history'],
    popularity: 35,
    timeEstimate: '25 mins'
  },
  {
    id: 'indian-history',
    categoryId: 'history',
    name: 'Indian History',
    description: 'Journey through ancient India to independence and beyond',
    difficulty: 'advanced',
    questionsCount: 25,
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
    tags: ['india', 'ancient civilizations', 'independence', 'mughal empire'],
    popularity: 30,
    timeEstimate: '30 mins'
  },

  // Science Quizzes
  {
    id: 'physics-mechanics',
    categoryId: 'science',
    name: 'Physics: Mechanics',
    description: 'Master the fundamentals of classical mechanics',
    difficulty: 'intermediate',
    questionsCount: 15,
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    tags: ['physics', 'mechanics', 'motion', 'forces'],
    popularity: 20,
    timeEstimate: '20 mins'
  },
  {
    id: 'ai-mathematics',
    categoryId: 'science',
    name: 'Mathematics for AI',
    description: 'Essential math concepts for artificial intelligence and machine learning',
    difficulty: 'advanced',
    questionsCount: 20,
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904',
    tags: ['mathematics', 'AI', 'machine learning', 'statistics'],
    popularity: 40,
    timeEstimate: '25 mins'
  },
  {
    id: 'class-10-science',
    categoryId: 'science',
    name: 'Class 10 Science',
    description: 'Comprehensive review of 10th grade science curriculum',
    difficulty: 'beginner',
    questionsCount: 30,
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
    tags: ['physics', 'chemistry', 'biology', 'class 10'],
    popularity: 50,
    timeEstimate: '35 mins'
  },

  // Technology Quizzes
  {
    id: 'web-development',
    categoryId: 'technology',
    name: 'Web Development',
    description: 'Test your knowledge of modern web development technologies',
    difficulty: 'intermediate',
    questionsCount: 20,
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['javascript', 'html', 'css', 'react'],
    popularity: 45,
    timeEstimate: '25 mins'
  },
  {
    id: 'cybersecurity',
    categoryId: 'technology',
    name: 'Cybersecurity Basics',
    description: 'Essential knowledge for digital security',
    difficulty: 'beginner',
    questionsCount: 15,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    tags: ['security', 'networking', 'encryption'],
    popularity: 35,
    timeEstimate: '20 mins'
  },
  {
    id: 'cloud-computing',
    categoryId: 'technology',
    name: 'Cloud Computing',
    description: 'Modern cloud platforms and architecture',
    difficulty: 'advanced',
    questionsCount: 25,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    tags: ['aws', 'azure', 'cloud', 'devops'],
    popularity: 30,
    timeEstimate: '30 mins'
  }
];