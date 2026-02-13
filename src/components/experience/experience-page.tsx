'use client';

import { experienceChapters } from '@/data/experience';
import { Stage } from '@/components/experience/stage';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { WireframeScene } from '@/components/experience/chapters/wireframe-scene';
import { CodeScene } from '@/components/experience/chapters/code-scene';
import { DesignScene } from '@/components/experience/chapters/design-scene';
import { PerformanceScene } from '@/components/experience/chapters/performance-scene';
import { DeliveryScene } from '@/components/experience/chapters/delivery-scene';

export const ExperiencePage = () => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(experienceChapters.length - 1, Math.floor(v * experienceChapters.length));
    setActive(idx);
  });

  if (reduced) {
    return (
      <main className="py-16 md:py-24">
        <section className="mx-auto w-full max-w-[1120px] px-4">
          <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.05] tracking-[-0.03em]">The Build</h1>
          <p className="mt-3 text-[var(--text-secondary)]">Regardez un site performant se construire, étape par étape.</p>
          <div className="mt-10 space-y-8">
            <WireframeScene progress={1} />
            <CodeScene progress={1} />
            <DesignScene progress={1} />
            <PerformanceScene progress={1} />
            <DeliveryScene progress={1} />
          </div>
        </section>
      </main>
    );
  }

  const chapterProgress = Math.max(0, Math.min(1, scrollYProgress.get() * experienceChapters.length - active));

  return (
    <main className="py-16 md:py-24">
      <section className="mx-auto w-full max-w-[1120px] px-4">
        <div className="relative overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,rgba(79,140,255,0.08),transparent_55%)] px-6 py-12">
          <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.05] tracking-[-0.03em]">The Build</h1>
          <p className="mt-3 text-[var(--text-secondary)]">Regardez un site performant se construire, étape par étape.</p>
          <div className="mt-8 flex items-center gap-2 text-sm text-[var(--text-secondary)]"><span className="h-px w-16 bg-[rgba(255,255,255,0.2)]" />Scroll</div>
        </div>
      </section>

      <section ref={ref} className="mx-auto mt-12 grid w-full max-w-[1120px] gap-10 px-4 lg:grid-cols-[56%,44%]">
        <Stage chapterId={experienceChapters[active].id} chapterProgress={chapterProgress} />
        <div>
          {experienceChapters.map((chapter, index) => (
            <article key={chapter.id} className="min-h-[80vh] py-12">
              <motion.p animate={{ opacity: active === index ? 1 : 0.45 }} className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Chapitre {index + 1}
              </motion.p>
              <motion.h2 animate={{ opacity: active === index ? 1 : 0.5, y: active === index ? 0 : 8 }} className="mt-3 text-[clamp(28px,3.2vw,40px)] leading-[1.15] tracking-[-0.02em]">
                {chapter.title}
              </motion.h2>
              <p className="mt-4 max-w-md text-[var(--text-secondary)]">{chapter.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1120px] px-4">
        <div className="rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[var(--surface)] px-6 py-10 text-center">
          <h2 className="text-[clamp(28px,3.2vw,40px)]">Construisons le vôtre.</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white">Demander un devis</Link>
            <Link href="/mes-creations" className="rounded-full border border-[rgba(255,255,255,0.14)] px-5 py-2.5 text-sm">Voir mes créations</Link>
          </div>
        </div>
      </section>
    </main>
  );
};
