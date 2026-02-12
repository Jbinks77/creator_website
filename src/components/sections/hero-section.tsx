'use client';

import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/button';

const badges = ['Next.js', 'UI premium', 'SEO', 'Performance'];

export const HeroSection = () => (
  <section className="aurora relative overflow-hidden pt-16 md:pt-24">
    <div className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute -left-10 top-10 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>

    <div className="mx-auto max-w-6xl px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-7xl"
      >
        Des expériences web{' '}
        <span className="bg-gradient-to-r from-cyan-200 to-violet-300 bg-clip-text text-transparent transition hover:brightness-125">
          qui transforment vos visiteurs en clients.
        </span>
      </motion.h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-300">Des sites web qui font vendre — design, performance, conversion.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href="/contact">Demander un devis</LinkButton>
        <LinkButton href="/mes-creations" variant="outline">Voir mes créations</LinkButton>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span key={badge} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">{badge}</span>
        ))}
      </div>

      <motion.div
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        Scroll pour découvrir l’expérience
      </motion.div>
    </div>
  </section>
);
