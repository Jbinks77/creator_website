'use client';

import { motion } from 'framer-motion';

const scores = [
  { label: 'Performance', from: 45, to: 98 },
  { label: 'SEO', from: 52, to: 96 },
  { label: 'UX', from: 60, to: 97 }
];

export const TransformStepPerformance = ({ progress }: { progress: number }) => {
  return (
    <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-5">
      <div className="grid gap-4 md:grid-cols-3">
        {scores.map((score) => {
          const value = Math.round(score.from + (score.to - score.from) * progress);
          return (
            <div key={score.label} className="text-center">
              <svg viewBox="0 0 120 120" className="mx-auto h-20 w-20 -rotate-90">
                <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.15)" strokeWidth="10" fill="none" />
                <motion.circle cx="60" cy="60" r="50" stroke="var(--accent)" strokeWidth="10" fill="none" strokeLinecap="round" animate={{ pathLength: value / 100 }} transition={{ duration: 0.45 }} />
              </svg>
              <p className="mt-2 text-xl font-semibold">{value}</p>
              <p className="text-xs text-[var(--text-secondary)]">{score.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 space-y-2">
        {[86, 68, 54, 42].map((w, i) => (
          <motion.div key={i} className="h-2 rounded bg-[#1a2233]" animate={{ width: `${w - progress * 32}%` }} transition={{ duration: 0.45 }} />
        ))}
      </div>
    </div>
  );
};
