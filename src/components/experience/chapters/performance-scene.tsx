'use client';

import { motion } from 'framer-motion';

const items = [
  { label: 'Performance', from: 45, to: 98 },
  { label: 'SEO', from: 52, to: 95 },
  { label: 'Accessibilité', from: 60, to: 100 }
];

export const PerformanceScene = ({ progress }: { progress: number }) => (
  <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-4">
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => {
        const value = Math.round(item.from + (item.to - item.from) * progress);
        return (
          <div key={item.label} className="text-center">
            <svg viewBox="0 0 120 120" className="mx-auto h-20 w-20 -rotate-90">
              <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.14)" strokeWidth="10" fill="none" />
              <motion.circle cx="60" cy="60" r="50" stroke="#4F8CFF" strokeWidth="10" fill="none" strokeLinecap="round" animate={{ pathLength: value / 100 }} transition={{ duration: 0.5 }} />
            </svg>
            <p className="mt-2 text-xl font-semibold">{value}</p>
            <p className="text-xs text-[var(--text-secondary)]">{item.label}</p>
          </div>
        );
      })}
    </div>
    <div className="mt-5 space-y-2">
      {[80, 65, 50, 40].map((w, i) => <motion.div key={i} className="h-2 rounded bg-[#1a2233]" animate={{ width: `${w - progress * 28}%` }} />)}
    </div>
  </div>
);
