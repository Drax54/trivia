export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  questionsCount: number;
  tags: string[];
}

export interface SubCategory {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questionsCount: number;
  imageUrl: string;
  tags: string[];
  popularity: number;
  timeEstimate: string;
}

export interface QuizType {
  id: string;
  subCategoryId: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questionsCount: number;
  imageUrl: string;
  tags: string[];
  popularity: number;
  timeEstimate: string;
  icon: string;
}

export interface TVSeriesSubCategory {
  id: string;
  subCategoryId: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questionsCount: number;
  imageUrl: string;
  tags: string[];
  popularity: number;
  timeEstimate: string;
}

export interface Question {
  id: string;
  category: string;
  subCategoryId: string;
  quizTypeId: string;
  question: string;
  answer: string;
  options: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

export interface QuestionState {
  id: string;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
}

