import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import QuizHeader from '../components/quiz/QuizHeader';
import QuestionCard from '../components/QuestionCard';
import QuizSidebar from '../components/QuizSidebar';
import TableOfContents from '../components/TableOfContents';
import QuizCompletion from '../components/QuizCompletion';
import Breadcrumbs from '../components/Breadcrumbs';
import Layout from '../components/Layout';
import { categories, questions } from '../data/trivia';
import { subCategories } from '../data/categories';
import { quizTypes } from '../data/quizTypes';
import { QuestionState } from '../types';
import { printQuizQuestions, printQuizAnswers } from '../utils/pdfExport';
import { generateSlug } from '../utils/urlHelpers';
console.log('Quiz component is rendering...');
import { Helmet } from 'react-helmet-async';



export default function Quiz() {
  const { quizTypeSlug } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [questionStates, setQuestionStates] = useState<Record<string, QuestionState>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);


  // Move all data fetching to the top, before any conditional returns
  const quizType = quizTypes.find((qt) => qt.id === quizTypeSlug);
  const subCategory = quizTypes && subCategories.find((sc) => sc.id === quizType?.subCategoryId);
  const category = subCategory && categories.find((c) => c.id === subCategory?.categoryId);
  const quizQuestions = quizType ? questions.filter((q) => q.quizTypeId === quizType?.id) : [];

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (!showCompletion) {
        setTimeElapsed((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [showCompletion]);



  const handleAnswerSelect = (questionId: string, answer: string) => {
    const question = quizQuestions.find((q) => q.id === questionId);
    if (!question) return;

    setQuestionStates((prev) => ({
      ...prev,
      [questionId]: {
        id: questionId,
        selectedAnswer: answer,
        isCorrect: answer === question.answer,
      },
    }));
  };

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
    const element = document.getElementById(`question-${quizQuestions[index].id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCompleteQuiz = () => {
    setIsQuizCompleted(true);
    setShowCompletion(true);
  };

  const handleCloseCompletion = () => {
    setShowCompletion(false);
  };

  const handleRetry = () => {
    setQuestionStates({});
    setTimeElapsed(0);
    setCurrentQuestionIndex(0);
    setIsQuizCompleted(false);
    setShowCompletion(false);
  };

  const handlePrintQuestions = () => {
    if (!quizType) return;
    const title = `${quizType.name} - Quiz Questions`;
    printQuizQuestions(quizQuestions, title);
  };

  const handlePrintAnswers = () => {
    if (!quizType) return;
    const title = `${quizType.name} - Quiz Questions with Answers`;
    printQuizAnswers(quizQuestions, title);
  };

  if (!category || !subCategory || !quizType || quizQuestions.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the quiz you're looking for.
            </p>
            <button
              onClick={() => navigate('/categories')}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Browse Categories
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const pageTitle = `${quizType.name} - Trivia Master`;
  const metaDescription = `${quizType.description} Test your knowledge with the ${quizType.name} quiz.`;
  const canonicalUrl = `${window.location.origin}/quiz/${quizTypeSlug}`;


  const breadcrumbItems = [
    { label: 'Categories', href: '/' },
    { label: category?.name || '', href: `/${category?.id}` },
    { label: subCategory?.name || '', href: `/${category?.id}/${subCategory?.id}` },
    { label: quizType?.name || '' },
  ];
  
  
  // console.log('quizTypeSlug:', quizTypeSlug);
  // console.log('quizTypes:', quizTypes.map((qt) => generateSlug(qt.name)));


  // Render loading state
  if (!quizType || !subCategory || !category || quizQuestions.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Loading Quiz...</h2>
          </div>
        </div>
      </Layout>
    );
  }

  return (


    <Layout>

      {/* Add SEO tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex justify-between items-center mb-8">
          {/* <button
            onClick={() => navigate('/categories')}

            className="flex items-center text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to {quizType.name}
          </button> */}

          <div className="flex gap-4">
            <button
              onClick={handlePrintQuestions}
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print Questions
            </button>
            <button
              onClick={handlePrintAnswers}
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print Answers
            </button>
          </div>
        </div>

        <QuizHeader
          subQuiz={{ ...quizType, name: `${quizType.name} - Trivia Questions and Answers` }}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={quizQuestions.length}
          timeElapsed={timeElapsed}
          questionStates={questionStates}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {quizQuestions.map((question, index) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  index={index}
                  questionState={questionStates[question.id] || {
                    id: question.id,
                    selectedAnswer: null,
                    isCorrect: null,
                  }}
                  onAnswerSelect={(answer) => handleAnswerSelect(question.id, answer)}
                  isQuizCompleted={isQuizCompleted}
                />
              ))}

              <div className="flex justify-center mt-8">
                <button
                  onClick={handleCompleteQuiz}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  Complete Quiz
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <TableOfContents
              questions={quizQuestions}
              questionStates={questionStates}
              currentQuestionIndex={currentQuestionIndex}
              onQuestionClick={handleQuestionClick}
            />
            <QuizSidebar
              questions={quizQuestions}
              currentQuestionIndex={currentQuestionIndex}
              questionStates={questionStates}
              timeElapsed={timeElapsed}
            />
          </div>
        </div>

        {showCompletion && (
          <QuizCompletion
            questions={quizQuestions}
            questionStates={questionStates}
            timeElapsed={timeElapsed}
            onRetry={handleRetry}
            onClose={handleCloseCompletion}
            categoryId={category.id}
            categoryName={category.name}
          />
        )}
      </div>
    </Layout>
  );
}