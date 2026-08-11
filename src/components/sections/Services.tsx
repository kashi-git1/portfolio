import { memo } from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data';
import { staggerContainer, staggerItem, defaultViewport, fadeInUp } from '../../utils/animations';

export const Services = memo(() => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <header className="mb-16 md:mb-24 md:w-2/3">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <h2 id="services-heading" className="text-xs sm:text-sm font-bold tracking-widest-premium text-blue-500 uppercase mb-4 md:mb-6">What I Do</h2>
            <h3 
              className="font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Elevating digital <br className="hidden md:block"/> experiences through <span className="text-gray-500 font-light italic">design & code.</span>
            </h3>
          </motion.div>
        </header>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={staggerItem}
              whileHover={{ y: -10 }}
              className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full glass-effect rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-all duration-500 bg-[#0a0a0a]/80 group-hover:bg-[#0C0C0C]/90 backdrop-blur-2xl">
                <div>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-500">
                    {service.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">{service.title}</h4>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';
export default Services;
