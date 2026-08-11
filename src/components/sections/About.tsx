import { memo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { stats } from '../../data';
import { staggerContainer, staggerItem, defaultViewport } from '../../utils/animations';

export const About = memo(() => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" ref={ref} className="py-32 relative bg-[#050505]" aria-labelledby="about-heading">
      <div className="container mx-auto px-6 md:px-12 overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="max-w-5xl mx-auto will-change-transform"
        >
          <header className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="h-[1px] w-12 bg-blue-500"></div>
            <h2 id="about-heading" className="text-xs sm:text-sm font-bold tracking-widest-premium text-blue-500 uppercase">
              About Me
            </h2>
          </header>
          
          <div 
            className="font-light text-gray-400 leading-relaxed tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
          >
            I'm <span className="font-semibold text-white transition-colors duration-500 hover:text-blue-400 cursor-default">Kashif Raza</span>, a BS Computer Science student who enjoys combining creativity with programming. My interests include <span className="font-medium text-white">frontend development</span>, <span className="font-medium text-white">UI/UX design</span>, <span className="font-medium text-white">3D visualization</span>, <span className="font-medium text-white">artificial intelligence</span>, and <span className="font-medium text-white">software engineering</span>.
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.article 
                key={i}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-start p-6 md:p-8 rounded-2xl glass-effect group"
              >
                <span className="text-4xl md:text-5xl font-black text-transparent text-stroke mb-3 md:mb-4 group-hover:text-white transition-colors duration-500">{stat.num}</span>
                <span className="text-[10px] md:text-xs text-blue-500 font-bold uppercase tracking-widest mb-1">{stat.label}</span>
                <span className="text-base md:text-lg text-white font-medium">{stat.value}</span>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

About.displayName = 'About';
export default About;
