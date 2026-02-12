'use client';

import { motion } from 'framer-motion';

const scores = [
  { label: 'Perf', value: 96 },
  { label: 'A11y', value: 94 },
  { label: 'SEO', value: 92 }
];

export const PerformanceScoreWidget = () => (
  <div className="glass-card rounded-2xl p-5">
    <p className="font-semibold">#5 Score performance</p>
    <div className="mt-4 flex gap-4">
      {scores.map((score) => (
        <div key={score.label} className="relative h-20 w-20">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.18)" strokeWidth="12" fill="none" />
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              stroke="url(#grad)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: score.value / 100 }}
              transition={{ duration: 1 }}
            />
            <defs>
              <linearGradient id="grad"><stop offset="0%" stopColor="#45d6ff" /><stop offset="100%" stopColor="#bb86fc" /></linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 grid place-items-center text-sm font-semibold">{score.value}</div>
        </div>
      ))}
    </div>
  </div>
);
