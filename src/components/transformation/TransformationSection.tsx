'use client';

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { TransformationStage } from '@/components/transformation/TransformationStage';

const steps = [
  { id: 'basic', title: 'État de départ', body: 'Typographie fade, mauvais spacing, CTA faible.' },
  { id: 'typography', title: 'Typographie & hiérarchie', body: 'Message clarifié, lecture guidée, impact immédiat.' },
  { id: 'spacing', title: 'Spacing & structure', body: 'Blocs alignés, respiration visuelle, parcours logique.' },
  { id: 'palette', title: 'Palette & surface', body: 'Accent premium, contraste maîtrisé, CTA engageants.' },
  { id: 'performance', title: 'Performance & SEO', body: 'Scores techniques en hausse, expérience fluide.' },
  { id: 'final', title: 'Conclusion', body: 'Le site est prêt à convertir et évoluer.' }
] as const;

type StepId = (typeof steps)[number]['id'];

export const TransformationSection = () => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const p = Math.max(0, Math.min(1, v));
    setProgress(p);
    setActive(Math.min(steps.length - 1, Math.floor(p * steps.length)));
  });

  const stepProgress = Math.max(0, Math.min(1, progress * steps.length - active));
  const stepId = steps[active].id as StepId;

  return (
    <main className="py-16 md:py-24">
      <section className="mx-auto w-full max-w-[1120px] px-4">
        <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.05] tracking-[-0.03em]">Live Transformation</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Regardez un site basique se transformer en version premium, performante et orientée conversion.</p>
      </section>

      <section ref={ref} className="mx-auto mt-10 grid min-h-[470vh] w-full max-w-[1120px] gap-10 px-4 lg:grid-cols-[56%,44%]">
        <TransformationStage step={stepId} progress={stepProgress} reduced={Boolean(reduced)} />

        <div>
          {steps.map((step, index) => (
            <article key={step.id} className="min-h-[90vh] py-12">
              <motion.p animate={{ opacity: active === index ? 1 : 0.45 }} transition={{ duration: reduced ? 0.01 : 0.35 }} className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Étape {index + 1}
              </motion.p>
              <motion.h2 animate={{ opacity: active === index ? 1 : 0.58, y: active === index ? 0 : 8 }} transition={{ duration: reduced ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }} className="mt-3 text-[clamp(28px,3.2vw,40px)] leading-[1.15] tracking-[-0.02em]">
                {step.title}
              </motion.h2>
              <p className="mt-3 max-w-md text-[var(--text-secondary)]">{step.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
