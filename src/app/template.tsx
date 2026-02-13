'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { pageOverlay } from '@/lib/motion';
import { useMotionState } from '@/components/motion/motion-provider';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { reducedMotion } = useMotionState();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {!reducedMotion && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px]"
            variants={pageOverlay}
            initial="initial"
            animate="exit"
            exit="enter"
          />
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
