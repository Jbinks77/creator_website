import { Variants } from 'framer-motion';

export const cinematicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: cinematicEase
    }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04
    }
  }
};

export const pageOverlay: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.55, ease: cinematicEase } },
  exit: { opacity: 0, transition: { duration: 0.55, ease: cinematicEase } }
};
