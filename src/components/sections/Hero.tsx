import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Magnetic } from '../ui/Magnetic';
import { SplitText } from '../ui/SplitText';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse parallax setup
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const mouseX = useSpring(mousePosition.x * 100, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(mousePosition.y * 100, { stiffness: 50, damping: 20 });
  
  const bgTransform1 = useMotionTemplate`translate(${mouseX}px, ${mouseY}px)`;
  const bgTransform2 = useMotionTemplate`translate(${useTransform(mouseX, x => -x)}px, ${useTransform(mouseY, y => -y)}px)`;

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients with Mouse Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ transform: bgTransform1 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse will-change-transform" 
        />
        <motion.div 
          style={{ transform: bgTransform2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse will-change-transform" 
        />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 lg:gap-16 items-center relative z-10 w-full max-w-full">
        <motion.div style={{ opacity: opacityText }} className="order-2 md:order-1 flex flex-col items-start space-y-6 md:space-y-8 flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full"
          >
            <span className="inline-block py-2 px-5 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-medium text-gray-300 mb-6 md:mb-8 uppercase tracking-widest shadow-lg backdrop-blur-md">
              Computer Science Student & Software Developer
            </span>
            
            <div className="overflow-hidden w-full">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-extrabold tracking-tighter text-white leading-[1.1] mb-2 drop-shadow-2xl"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                Hi, I'm <br />
                <span className="text-gradient">
                  Kashif
                </span>
              </motion.h1>
            </div>
          </motion.div>

          <SplitText 
            text="A Computer Science student at Bahria University passionate about modern web development, UI/UX, 3D design, and building visually engaging digital experiences." 
            className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-lg leading-relaxed font-light"
            delay={0.6}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group relative inline-flex justify-center w-full sm:w-auto px-8 py-4 bg-white text-[#050505] font-semibold rounded-full overflow-hidden transition-all active:scale-95 text-sm sm:text-base"
              >
                <span className="relative z-10 pointer-events-none">View Work</span>
                <div className="absolute inset-0 h-full w-full bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex justify-center w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors hover:border-white/40 text-sm sm:text-base"
              >
                Contact Me
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Profile Image with Curtain Reveal & Parallax */}
        <motion.div
          style={{ transform: bgTransform1 }}
          className="order-1 md:order-2 flex justify-center md:justify-end will-change-transform w-full md:w-auto"
        >
          <div 
            className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-b from-[#111] to-[#050505] flex items-center justify-center group cursor-pointer shadow-[0_0_40px_rgba(59,130,246,0.05)] hover:shadow-[0_0_80px_rgba(168,85,247,0.15)] transition-all duration-700 hover:-translate-y-4"
            style={{ width: "clamp(260px, 40vw, 380px)", height: "clamp(340px, 55vw, 500px)" }}
          >
            
            {/* Curtain Reveal */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute inset-0 bg-[#0C0C0C] z-30"
            />

            <motion.img 
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              src="/hero-profile.png" 
              alt="Kashif Raza" 
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out z-10 will-change-transform" 
            />
            
            {/* Subtle gradient overlay to blend perfectly with the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2.5rem] z-40 pointer-events-none group-hover:border-white/30 transition-colors duration-700"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] text-gray-500 mb-3 uppercase tracking-widest-premium group-hover:text-white transition-colors">Scroll Down</span>
        <div className="w-px h-16 bg-gradient-to-b from-gray-500 to-transparent overflow-hidden relative">
           <motion.div 
             animate={{ y: [0, 64] }} 
             transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
             className="w-full h-1/2 bg-white absolute top-0"
           />
        </div>
      </motion.div>
    </section>
  );
};
