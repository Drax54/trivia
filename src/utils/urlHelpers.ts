export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const generateQuizSlug = (name: string): string => {
  return `${generateSlug(name)}-trivia-quiz`;
};

export const getCategoryUrl = (categoryName: string): string => {
  return `/${generateSlug(categoryName)}`;
};

export const getQuizUrl = (categoryName: string, quizName: string): string => {
  return `/${generateSlug(categoryName)}/${generateQuizSlug(quizName)}`;
};