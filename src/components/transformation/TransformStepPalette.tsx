'use client';

import { motion } from 'framer-motion';

export const TransformStepPalette = ({ progress }: { progress: number }) => {
  const ctaOpacity = 0.25 + progress * 0.75;

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-5">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.08),transparent)]"
        animate={{ x: ['-120%', '120%'] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative z-10">
        <p className="text-sm text-[var(--text-secondary)]">Palette premium + surfaces nettes</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <motion.div className="rounded-[14px] border border-[rgba(255,255,255,0.08)] p-4" animate={{ backgroundColor: `rgba(79,140,255,${0.08 + progress * 0.14})` }}>
            <p className="text-sm">CTA principal</p>
            <motion.button className="mt-3 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white" animate={{ opacity: ctaOpacity }}>Demander un devis</motion.button>
          </motion.div>
          <div className="rounded-[14px] border border-[rgba(255,255,255,0.08)] p-4">
            <p className="text-sm">Surface secondaire</p>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">Lisible, contrastée, orientée conversion.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
