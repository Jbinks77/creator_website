'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  ['Découverte', 'Objectifs, audience, priorités business.'],
  ['Design', 'Direction visuelle, structure, parcours.'],
  ['Développement', 'Intégration propre, rapide, maintenable.'],
  ['Livraison', 'Déploiement, QA, transmission des clés.']
];

export const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 20%'] });
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="mx-auto w-full max-w-[1120px] px-4">
        <h2 className="text-[clamp(28px,3.2vw,40px)]">Process</h2>
        <div className="mt-6 h-px w-full bg-[rgba(255,255,255,0.12)]"><motion.div style={{ width }} className="h-px bg-[var(--accent)]" /></div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map(([title, text]) => (
            <article key={title} className="rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[var(--surface)] p-4">
              <h3 className="text-[20px]">{title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
