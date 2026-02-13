'use client';

import { motion } from 'framer-motion';

export const TransformStepTypography = ({ progress }: { progress: number }) => {
  const weight = Math.round(420 + progress * 280);
  const size = 26 + progress * 20;

  return (
    <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#0b0d12] p-5">
      <motion.p className="text-sm text-[var(--text-secondary)]" animate={{ letterSpacing: `${0.01 - progress * 0.01}em` }}>
        Avant: typographie fade
      </motion.p>
      <motion.h3
        className="mt-4 leading-[1.1] tracking-[-0.02em]"
        animate={{ fontSize: `${size}px`, fontWeight: weight, color: 'var(--text)' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        Je transforme votre message en hiérarchie claire et premium.
      </motion.h3>
      <motion.div className="mt-5 h-1 rounded-full bg-[var(--accent)]" animate={{ width: `${35 + progress * 60}%` }} />
    </div>
  );
};
