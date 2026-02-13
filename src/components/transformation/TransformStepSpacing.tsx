'use client';

import { motion } from 'framer-motion';

export const TransformStepSpacing = ({ progress }: { progress: number }) => {
  const gap = 8 + progress * 22;
  const pad = 12 + progress * 16;

  return (
    <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#0b0d12] p-4">
      <motion.div className="grid" animate={{ gap }} transition={{ duration: 0.45 }}>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="rounded-[14px] border border-[rgba(255,255,255,0.1)] bg-[#12161f]"
            animate={{ padding: pad, y: (1 - progress) * 4 * i }}
            transition={{ duration: 0.45 }}
          >
            <div className="h-3 w-2/3 rounded bg-[rgba(245,247,250,0.2)]" />
            <div className="mt-2 h-2 w-full rounded bg-[rgba(245,247,250,0.1)]" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
