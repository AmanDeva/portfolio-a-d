import { motion, AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { StarField } from './components/background';
import Hero from './components/Hero';
import ProjectsSection from './components/projects/ProjectsSection';
import Skills from './components/Skills';

function App() {
  return (
    <ErrorBoundary>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-transparent text-white relative"
        >
          <StarField />
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
            </div>
          }>
            <Hero />
            <ProjectsSection />
            <Skills />
            
            <footer className="py-8 text-center text-gray-400 border-t border-white/10">
              <div className="max-w-6xl mx-auto px-4">
                <p>© {new Date().getFullYear()} Aman Deva. All rights reserved.</p>
              </div>
            </footer>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;