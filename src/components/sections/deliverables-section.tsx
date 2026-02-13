'use client';

import { motion } from 'framer-motion';
import { revealUp } from '@/lib/motion';

const rows = [
  'Temps de chargement < 1s (selon pages)',
  'SEO technique propre',
  'Animations haut de gamme',
  'Composants réutilisables',
  'Conversion-first'
];

export const DeliverablesSection = () => (
  <section className="py-16 md:py-24">
    <div className="mx-auto w-full max-w-[1120px] px-4">
      <h2 className="text-[clamp(28px,3.2vw,40px)] leading-[1.15] tracking-[-0.02em]">Ce que je livre</h2>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {rows.map((item, index) => (
          <motion.div key={item} variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm">
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
