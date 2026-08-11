import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] relative border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 rounded-t-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 border-b border-white/10 pb-16">
          <div className="text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter"
            >
              Kashif <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Raza</span>
            </motion.h2>
            <p className="text-gray-400 text-sm md:text-base max-w-sm font-light">
              Designing and building premium digital experiences for forward-thinking brands.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium tracking-widest uppercase text-gray-500">
            <a href="#about" className="hover:text-white transition-colors hover:-translate-y-1 transform duration-300">About</a>
            <a href="#projects" className="hover:text-white transition-colors hover:-translate-y-1 transform duration-300">Work</a>
            <a href="#contact" className="hover:text-white transition-colors hover:-translate-y-1 transform duration-300">Contact</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-xs md:text-sm text-gray-600 font-light tracking-wide">
          <p>&copy; {currentYear} Kashif Raza. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="text-red-500 animate-pulse">❤</span>
            <span>in Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
