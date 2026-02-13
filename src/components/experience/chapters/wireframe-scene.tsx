'use client';

import { motion } from 'framer-motion';

export const WireframeScene = ({ progress }: { progress: number }) => {
  const p = Math.max(0, Math.min(1, progress));
  return (
    <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#080a0e] p-4">
      <svg viewBox="0 0 800 460" className="w-full">
        {[
          'M40 40 H760 V420 H40 Z',
          'M70 90 H730',
          'M70 130 H430 V380 H70 Z',
          'M460 130 H730 V260 H460 Z',
          'M460 280 H730 V380 H460 Z'
        ].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="rgba(245,247,250,0.7)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: p }}
            transition={{ duration: 0.55, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        <motion.circle cx={70 + p * 660} cy="90" r="5" fill="#4F8CFF" />
      </svg>
    </div>
  );
};
