'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { easeOutQuint, revealUp } from '@/lib/motion';

const badges = ['Next.js', 'UI premium', 'SEO', 'Performance'];

export const HeroSection = () => {
  const lightRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      raf = requestAnimationFrame(() => {
        if (!lightRef.current) return;
        const rect = lightRef.current.parentElement?.getBoundingClientRect();
        if (!rect) return;
        lightRef.current.style.transform = `translate(${e.clientX - rect.left - 150}px, ${e.clientY - rect.top - 150}px)`;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, [reduced]);

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10">
        <div ref={lightRef} className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.18),transparent_65%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_45%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-12 px-4 lg:grid-cols-2">
        <motion.div variants={revealUp} initial="hidden" animate="visible">
          <h1 className="text-[clamp(44px,6vw,72px)] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--text)]">Je conçois des sites web qui donnent envie d’acheter.</h1>
          <p className="mt-4 text-base leading-[1.6] text-[var(--text-secondary)]">Design sur-mesure, animations premium, performance, SEO.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white">Demander un devis</Link>
            <Link href="/mes-creations" className="rounded-full border border-[rgba(255,255,255,0.14)] px-5 py-2.5 text-sm">Voir mes créations</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((badge) => <span key={badge} className="rounded-full border border-[rgba(255,255,255,0.1)] px-3 py-1 text-xs text-[var(--text-secondary)]">{badge}</span>)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: easeOutQuint }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-[24px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.08),transparent)] [animation:sweep_8s_ease-in-out_infinite]" />
          <div className="relative rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.04)] p-4 backdrop-blur-[16px] shadow-card">
            <div className="relative h-[340px] overflow-hidden rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#0b0d12]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(79,140,255,0.28),transparent_35%)]" />
              <div className="absolute inset-6 rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[#050608]" />
              <div className="absolute inset-x-12 bottom-10 h-20 rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[#0b0d12] shadow-card" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-[var(--text-secondary)]"><span className="h-px w-16 bg-[rgba(255,255,255,0.2)]" />Scroll</div>
        </motion.div>
      </div>
    </section>
  );
};
