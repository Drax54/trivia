import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import SubCategory from './pages/SubCategory';
import QuizTypes from './pages/QuizTypes';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import { HelmetProvider } from 'react-helmet-async';
import TermsAndConditions from './pages/terms';
import PrivacyPolicy from './pages/privacy-policy';
import Contact from './pages/contact';
// function App() {
//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/:categorySlug" element={<SubCategory />} />
//         <Route path="/:categorySlug/:subCategorySlug" element={<QuizTypes />} />
//         <Route path="/:categorySlug/:subCategorySlug/:quizTypeSlug" element={<Quiz />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/leaderboard" element={<Leaderboard />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




function App() {
  return (

    <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/categories" element={<Categories />} />
          <Route path="/:categorySlug" element={<SubCategory />} />
          <Route path="/:categorySlug/:subCategorySlug" element={<QuizTypes />} />
          <Route path="/quiz/:quizTypeSlug" element={<Quiz />} /> {/* Updated Route */}
          <Route path="*" element={<NotFound />} /> {/* Debug unmatched routes */}

          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HelmetProvider>

    </BrowserRouter>
  );
}

export default App;