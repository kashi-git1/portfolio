import { motion } from 'framer-motion';
import { memo } from 'react';
import { skills } from '../../data';
import { staggerContainer, staggerItem, defaultViewport, fadeInUp } from '../../utils/animations';

export const Skills = memo(() => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-[#0C0C0C] overflow-hidden" aria-labelledby="skills-heading">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full overflow-hidden">
        <header className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <motion.div
             variants={fadeInUp}
             initial="hidden"
             whileInView="visible"
             viewport={defaultViewport}
          >
            <h2 
              id="skills-heading"
              className="font-extrabold text-white mb-4 md:mb-6 tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              The Arsenal
            </h2>
            <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl font-light">
              A curated stack of modern tools and technologies I use to bring digital experiences to life.
            </p>
          </motion.div>
        </header>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.article
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent group overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative h-full w-full bg-[#0a0a0a] rounded-2xl p-4 sm:p-6 md:p-8 flex items-center justify-center text-center transition-colors duration-500 group-hover:bg-[#111]">
                <span className="text-sm md:text-base lg:text-lg font-medium text-gray-400 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300 transform translate-z-10">
                  {skill}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
export default Skills;
