'use client';

import { useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const reduced = useReducedMotion();
  const [style, setStyle] = useState({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * 6;
    const ry = (px - 0.5) * 6;
    setStyle({ transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)` });
  };

  return (
    <div
      className={cn('transition-transform duration-200 will-change-transform', className)}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={() => setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' })}
    >
      {children}
    </div>
  );
};
