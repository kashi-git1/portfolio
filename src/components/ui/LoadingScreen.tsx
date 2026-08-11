import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center relative z-10 w-full max-w-sm px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-blue-500 font-bold tracking-widest-premium uppercase text-sm mb-8"
            >
              Loading Experience
            </motion.div>
            
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            
            <motion.div 
              className="text-white text-5xl font-extrabold tabular-nums self-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {progress > 100 ? 100 : progress}%
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-0 w-full h-[1px] bg-white/5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
