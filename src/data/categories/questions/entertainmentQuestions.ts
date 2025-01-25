import { Question } from '../../../types';

export const entertainmentQuestions: Question[] = [
  // Classic Movies Questions
  {
    id: 'classic1',
    quizTypeId: 'entertainment-quiz',
    category: 'entertainment',
    subCategoryId: 'classic-movies',
    question: "Which 1942 film features the famous line 'Here's looking at you, kid'?",
    answer: "Casablanca",
    options: ["Gone with the Wind", "Casablanca", "Citizen Kane", "The Maltese Falcon"],
    difficulty: 'medium',
    tags: ['classic films', 'golden age', 'film history']
  },
  {
    id: 'classic2',
    quizTypeId: 'entertainment-quiz',
    category: 'entertainment',
    subCategoryId: 'classic-movies',
    question: "Who directed 'Citizen Kane' (1941)?",
    answer: "Orson Welles",
    options: ["Orson Welles", "Alfred Hitchcock", "John Ford", "Frank Capra"],
    difficulty: 'medium',
    tags: ['classic films', 'directors', 'film history']
  },
  {
    id: 'classic3',
    quizTypeId: 'entertainment-quiz',
    category: 'entertainment',
    subCategoryId: 'classic-movies',
    question: "Which 1939 film starred Clark Gable as Rhett Butler?",
    answer: "Gone with the Wind",
    options: ["Gone with the Wind", "The Wizard of Oz", "Stagecoach", "Mr. Smith Goes to Washington"],
    difficulty: 'easy',
    tags: ['classic films', 'golden age', 'romance']
  }
  // Add `quizTypeId` to the remaining objects as well
];
