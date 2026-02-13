'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MouseEvent } from 'react';
import { useMotionState } from '@/components/motion/motion-provider';

export function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 18 });
  const { reducedMotion } = useMotionState();

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 6);
    rotateY.set((px - 0.5) * 6);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={reducedMotion ? undefined : { rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
      whileHover={reducedMotion ? undefined : { scale: 1.01, boxShadow: '0 24px 70px rgba(0,0,0,0.38)' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
