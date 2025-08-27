import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import WeatherApp from './pages/WeatherApp';
import TaskManager from './pages/TaskManager';
import PortfolioWebsite from './pages/PortfolioWebsite';
import BlogPlatform from './pages/BlogPlatform';
import EcommerceStore from './pages/EcommerceStore';
import ChatApp from './pages/ChatApp';
import RecipeFinder from './pages/RecipeFinder';
import QuizApp from './pages/QuizApp';


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Home />
          </motion.div>
        } />
        <Route path="/projects" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Projects />
          </motion.div>
        } />
        <Route path="/skills" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Skills />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Contact />
          </motion.div>
        } />
        <Route path="/projects/weather-app" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><WeatherApp /></motion.div>} />
        <Route path="/projects/task-manager" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><TaskManager /></motion.div>} />
        <Route path="/projects/portfolio-website" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><PortfolioWebsite /></motion.div>} />
        <Route path="/projects/blog-platform" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><BlogPlatform /></motion.div>} />
        <Route path="/projects/ecommerce-store" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><EcommerceStore /></motion.div>} />
        <Route path="/projects/chat-app" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><ChatApp /></motion.div>} />
        <Route path="/projects/recipe-finder" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><RecipeFinder /></motion.div>} />
        <Route path="/projects/quiz-app" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><QuizApp /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
