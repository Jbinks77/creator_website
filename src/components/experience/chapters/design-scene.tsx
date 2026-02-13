'use client';

import { motion } from 'framer-motion';

export const DesignScene = ({ progress }: { progress: number }) => (
  <div className="relative overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-4">
    <motion.div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.08),transparent)]" animate={{ x: ['-120%', '120%'] }} transition={{ duration: 7, repeat: Infinity, repeatDelay: 1 }} />
    <motion.div layout className="grid gap-3 md:grid-cols-2" initial={false}>
      {[1, 2, 3, 4].map((n) => (
        <motion.div key={n} layout className="rounded-[16px] border border-[rgba(255,255,255,0.06)] bg-[#0e1118] p-4" animate={{ opacity: 0.4 + progress * 0.6, y: (1 - progress) * 8 }}>
          <div className="h-3 w-2/3 rounded bg-[rgba(245,247,250,0.18)]" />
          <div className="mt-3 h-2 w-full rounded bg-[rgba(245,247,250,0.1)]" />
          <div className="mt-2 h-2 w-5/6 rounded bg-[rgba(245,247,250,0.1)]" />
        </motion.div>
      ))}
    </motion.div>
  </div>
);
