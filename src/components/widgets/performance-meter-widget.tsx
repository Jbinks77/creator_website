'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const PerformanceMeterWidget = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const progress = inView ? 0.98 : 0.45;
  return (
    <div ref={ref} className="rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[var(--surface)] p-5">
      <p className="text-xs uppercase text-[var(--text-secondary)]">W3 Performance meter</p>
      <div className="mt-4 flex items-center gap-4">
        <svg viewBox="0 0 120 120" className="h-20 w-20 -rotate-90">
          <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.18)" strokeWidth="10" fill="none" />
          <motion.circle cx="60" cy="60" r="50" stroke="var(--accent)" strokeWidth="10" fill="none" strokeLinecap="round" initial={{ pathLength: 0.45 }} animate={{ pathLength: progress }} transition={{ duration: 1.2 }} />
        </svg>
        <p className="text-sm text-[var(--text-secondary)]">Score estimé: 45 → 98</p>
      </div>
    </div>
  );
};
