'use client';

import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Reveal } from '@/components/motion/reveal';

export default function TransformationPage() {
  const ref = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(18);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const beforeOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const afterOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0.2, 1]);
  const ring = useTransform(scrollYProgress, [0, 1], [18, 94]);

  useMotionValueEvent(ring, 'change', (latest) => setScore(Math.round(latest)));

  return (
    <div ref={ref} className="mx-auto max-w-6xl px-4 py-16">
      <Reveal>
        <h1 className="text-5xl text-white">Live Transformation</h1>
        <p className="mt-4 max-w-2xl text-white/70">Du site daté au système digital qui rassure, convainc et convertit.</p>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <motion.div style={{ opacity: beforeOpacity }} className="rounded-3xl border border-red-200/20 bg-red-400/5 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-red-200/70">Avant</p>
          <h2 className="mt-3 text-2xl text-white">Message flou, lenteur, peu de demandes.</h2>
        </motion.div>
        <motion.div style={{ opacity: afterOpacity }} className="rounded-3xl border border-emerald-200/20 bg-emerald-400/5 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/70">Après</p>
          <h2 className="mt-3 text-2xl text-white">Clarté, fluidité, confiance immédiate.</h2>
        </motion.div>
      </div>

      <Reveal className="mt-16">
        <div className="flex items-center gap-6 rounded-3xl border border-white/15 bg-white/[0.03] p-8">
          <div className="grid h-24 w-24 place-items-center rounded-full border border-white/20">
            <span className="text-2xl text-white">{score}</span>
          </div>
          <p className="text-white/70">Ring score d’amélioration perçue pendant le scroll (stage sticky/crossfade V1).</p>
        </div>
      </Reveal>
    </div>
  );
}
