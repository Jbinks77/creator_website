'use client';

import { motion } from 'framer-motion';

export type TransformationChapter = {
  id: 'basic' | 'typography' | 'design' | 'conversion' | 'performance';
  title: string;
  body: string;
  range: [number, number];
};

export const chapters: TransformationChapter[] = [
  { id: 'basic', title: 'État de départ', body: 'Typographie fade, spacing mauvais, CTA faible.', range: [0, 0.2] },
  { id: 'typography', title: 'Typographie', body: 'Titres nets, hiérarchie lisible, message plus fort.', range: [0.2, 0.4] },
  { id: 'design', title: 'Design system', body: 'Cards premium, surfaces propres, accent maîtrisé.', range: [0.4, 0.6] },
  { id: 'conversion', title: 'Conversion', body: 'CTA affirmé, micro-motion, parcours orienté action.', range: [0.6, 0.8] },
  { id: 'performance', title: 'Performance', body: 'Lighthouse 45 → 98, waterfall raccourci.', range: [0.8, 1] }
];

export const Chapters = ({ activeIndex, reduced }: { activeIndex: number; reduced: boolean }) => (
  <div>
    {chapters.map((chapter, index) => (
      <article key={chapter.id} className="min-h-[88vh] py-12">
        <motion.p
          animate={{ opacity: activeIndex === index ? 1 : 0.45 }}
          transition={{ duration: reduced ? 0.01 : 0.35 }}
          className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]"
        >
          Chapitre {index + 1}
        </motion.p>
        <motion.h2
          animate={{ opacity: activeIndex === index ? 1 : 0.56, y: activeIndex === index ? 0 : 8 }}
          transition={{ duration: reduced ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-[clamp(28px,3.2vw,40px)] leading-[1.15] tracking-[-0.02em]"
        >
          {chapter.title}
        </motion.h2>
        <p className="mt-3 max-w-md text-[var(--text-secondary)]">{chapter.body}</p>
      </article>
    ))}
  </div>
);
