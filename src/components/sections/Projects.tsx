import { memo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../../data';
import { fadeInUp, defaultViewport } from '../../utils/animations';

export const Projects = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#050505] relative" ref={containerRef} aria-labelledby="projects-heading">
      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <h2 id="projects-heading" className="text-xs sm:text-sm font-bold tracking-widest-premium text-blue-500 uppercase mb-4 md:mb-6">Selected Works</h2>
            <h3 
              className="font-extrabold text-white tracking-tighter leading-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
            >
              Featured <br/> <span className="text-gray-600 font-light">Projects.</span>
            </h3>
          </motion.div>
          <motion.a 
            href="https://github.com" 
            target="_blank"
            rel="noreferrer"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex items-center gap-3 text-white font-medium hover:text-blue-400 transition-colors group pb-2 border-b border-white/20 hover:border-blue-400 self-start md:self-auto text-sm md:text-base"
            aria-label="View all projects on GitHub"
          >
            View GitHub Archive
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
        </header>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative flex flex-col items-center">
        {projects.map((project, index) => {
          const cardRef = useRef<HTMLElement>(null);
          const { scrollYProgress } = useScroll({
            target: cardRef,
            offset: ["start end", "start start"]
          });
          
          const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
          const cardScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

          return (
            <motion.article 
              ref={cardRef}
              key={index}
              style={{ 
                backgroundColor: project.color,
                top: `calc(10vh + ${index * 20}px)`,
                scale: cardScale
              }}
              className="sticky flex flex-col md:flex-row gap-8 md:gap-20 items-center w-full max-w-6xl min-h-[50vh] rounded-[24px] md:rounded-[40px] p-6 sm:p-8 md:p-16 mb-16 md:mb-24 border border-white/10 shadow-2xl overflow-hidden will-change-transform"
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 group cursor-pointer perspective overflow-hidden rounded-xl md:rounded-3xl relative h-[250px] sm:h-[300px] md:h-[400px]">
                <motion.div 
                  initial={{ x: 0 }}
                  whileInView={{ x: "100%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-[#0C0C0C] z-30"
                />

                <motion.div 
                  style={{ scale: imageScale }}
                  className="absolute inset-0 w-full h-full bg-[#111] overflow-hidden border border-white/5 will-change-transform"
                >
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 md:p-6">
                      <span className="text-gray-500 font-medium z-20 mb-2 block tracking-widest uppercase text-xs md:text-sm">Image Placeholder</span>
                      <span className="text-gray-700 text-[10px] md:text-xs z-20 block max-w-xs">Replace with actual high-res image.</span>
                    </div>
                  )}
                </motion.div>
                
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-blue-500/90 text-white flex items-center justify-center backdrop-blur-sm transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                    <span className="font-bold tracking-wider text-xs md:text-base">VIEW</span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 flex flex-col items-start relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={defaultViewport}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <span className="text-[10px] md:text-xs font-bold text-white px-2 py-1 md:px-3 md:py-1 bg-white/10 rounded-full border border-white/5 tracking-widest uppercase">
                      0{index + 1}
                    </span>
                    <span className="text-blue-500 font-bold tracking-widest-premium text-[10px] md:text-xs uppercase">
                      {project.category}
                    </span>
                  </div>
                  
                  <h4 
                    className="font-bold text-white mb-4 md:mb-6 leading-tight group-hover:text-blue-400 transition-colors"
                    style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
                  >
                    {project.title}
                  </h4>
                  
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-6 md:mb-10 font-light max-w-md">
                    {project.description}
                  </p>
                  
                  <button className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 group" aria-label={`View ${project.title} details`}>
                    <ExternalLink size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                  </button>
                </motion.div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';
export default Projects;
