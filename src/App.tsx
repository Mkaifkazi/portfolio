import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { ThemeProvider } from './contexts/ThemeContext';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { PERSONAL_INFO } from './utils/constants';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-float" />
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-300 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-float animation-delay-400" />
            </div>
          </div>

          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold gradient-text mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {PERSONAL_INFO.name}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Frontend Developer | React.js | Next.js | TypeScript
              </motion.p>

              <motion.p
                className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Building modern, accessible web applications with 5+ years of experience
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <a href="#projects" className="btn-primary">
                  View Projects
                </a>
                <a href={PERSONAL_INFO.resumeUrl} download className="btn-secondary">
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* All Sections */}
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
