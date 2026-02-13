'use client';

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { Chapters, chapters } from '@/components/transformation/Chapters';
import { Stage } from '@/components/transformation/Stage';

const getActiveIndex = (value: number) => {
  const idx = chapters.findIndex((ch) => value >= ch.range[0] && value <= ch.range[1]);
  return idx === -1 ? chapters.length - 1 : idx;
};

export const TransformationPage = () => {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });


  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const clamped = Math.max(0, Math.min(1, value));
    setActiveIndex(getActiveIndex(clamped));
  });

  if (reduced) {
    return (
      <main className="py-16 md:py-24">
        <section className="mx-auto w-full max-w-[1120px] px-4">
          <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.05] tracking-[-0.03em]">Live Transformation</h1>
          <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Version simplifiée (reduced motion) : mêmes étapes, transitions minimisées.</p>
          <div className="mt-8 space-y-5">
            {chapters.map((chapter) => (
              <section key={chapter.id} className="space-y-3 rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-4">
                <h2 className="text-2xl font-semibold">{chapter.title}</h2>
                <p className="text-sm text-[var(--text-secondary)]">{chapter.body}</p>
                <div className="h-20 rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[#0b0d12]" />
              </section>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="py-16 md:py-24">
      <section className="mx-auto w-full max-w-[1120px] px-4">
        <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.05] tracking-[-0.03em]">Live Transformation</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Ancien site → site parfait : typographie, design, conversion, performance.</p>
      </section>

      <section ref={containerRef} className="mx-auto mt-10 grid min-h-[360vh] w-full max-w-[1120px] gap-10 px-4 lg:grid-cols-[56%,44%]">
        <Stage progress={scrollYProgress} />
        <Chapters activeIndex={activeIndex} reduced={Boolean(reduced)} />
      </section>
    </main>
  );
};
