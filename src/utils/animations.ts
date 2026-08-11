import type { Variants } from 'framer-motion';

/**
 * Standard fade in up animation for section headings or content blocks.
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

/**
 * Container variants for staggering children.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

/**
 * Child item variants for staggered lists (e.g., Skills, Services).
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

/**
 * Standard viewport options for scroll-triggered animations to improve performance.
 */
export const defaultViewport = {
  once: true,
  margin: "-50px"
};
