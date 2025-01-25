const categories = require('../data/categories/quizTypes');
const subQuizzes = require('../data/categories/subQuizzes');
const scienceQuestions = require('../data/categories/scienceQuestions');
const trivia = require('../data/categories/trivia');

/**
 * Generates all trivia paths for sitemap
 * @returns {string[]} - Array of paths
 */
function generateAllTriviaPaths() {
  const paths: string[] = [];

  // Generate category paths
  categories.forEach((category: { id: string }) => {
    paths.push(`/categories/${category.id}`);
  });

  // Generate subcategory paths
  subQuizzes.forEach((quiz: { id: string, category: string }) => {
    paths.push(`/categories/${quiz.category}/${quiz.id}`);
  });

  // Generate question paths
  scienceQuestions.forEach((question: { id: string }) => {
    paths.push(`/quiz/science/${question.id}`);
  });

  // Trivia questions
  trivia.forEach((item: { id: string }) => {
    paths.push(`/trivia/${item.id}`);
  });

  return paths;
}

module.exports = { generateAllTriviaPaths };
