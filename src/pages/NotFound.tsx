import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Magnetic } from '../components/ui/Magnetic';
import { SplitText } from '../components/ui/SplitText';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-[150px] md:text-[250px] font-black text-transparent text-stroke leading-none tracking-tighter">
            404
          </h1>
        </motion.div>
        
        <SplitText 
          text="Page Not Found"
          className="text-2xl md:text-4xl font-bold text-white mb-6 justify-center"
        />
        
        <motion.p 
          className="text-gray-400 max-w-md mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Magnetic>
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
            >
              <ArrowLeft size={20} />
              Return Home
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </div>
  );
};
