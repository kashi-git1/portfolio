import { motion } from 'framer-motion';

const marqueeItems = [
  "Web Development", "•", "UI/UX Design", "•", "3D Modeling", "•", "React", "•", "TypeScript", "•", "Tailwind CSS", "•",
  "Web Development", "•", "UI/UX Design", "•", "3D Modeling", "•", "React", "•", "TypeScript", "•", "Tailwind CSS", "•",
];

export const Marquee = () => {
  return (
    <div className="py-16 md:py-24 bg-[#050505] border-y border-white/5 overflow-hidden flex whitespace-nowrap relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />
      
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35,
        }}
        className="flex items-center space-x-12"
      >
        {marqueeItems.map((item, index) => (
          <span
            key={index}
            className={`font-black uppercase tracking-wider ${
              item === '•' 
                ? 'text-blue-500/50' 
                : index % 4 === 0 
                  ? 'text-stroke' 
                  : 'text-white'
            }`}
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
