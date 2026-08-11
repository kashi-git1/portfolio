import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { BackToTop } from './components/ui/BackToTop';
import { LoadingScreen } from './components/ui/LoadingScreen';

// Lazy load heavy sections
const Marquee = lazy(() => import('./components/sections/Marquee').then(module => ({ default: module.Marquee })));
const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Skills = lazy(() => import('./components/sections/Skills').then(module => ({ default: module.Skills })));
const Services = lazy(() => import('./components/sections/Services').then(module => ({ default: module.Services })));
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })));
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero is loaded immediately above the fold */}
        <Hero />
        
        {/* Lazy load everything below the fold */}
        <Suspense fallback={<div className="h-32 w-full flex items-center justify-center text-gray-500">Loading...</div>}>
          <Marquee />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-blue-500/30 selection:text-blue-200">
      <CustomCursor />
      <ScrollProgress />
      <LoadingScreen />
      <BackToTop />
      
      <AnimatePresence mode="wait">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </div>
  );
}

export default App;
