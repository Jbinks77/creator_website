'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/button';

const HeroCanvas = dynamic(() => import('@/components/three/hero-canvas').then((mod) => mod.HeroCanvas), {
  ssr: false,
  loading: () => <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-slate-900 to-slate-950" />
});

export const HeroSection = () => (
  <section className="relative min-h-[92vh] overflow-hidden">
    <HeroCanvas />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />

    <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl items-center px-4">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.22em] text-cyan-100"
        >
          Studio [TON NOM]
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl"
        >
          Je crée des sites web immersifs
          <span className="block bg-gradient-to-r from-cyan-200 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
            designés pour convertir.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-slate-200"
        >
          Expériences premium, performances élevées et animations soignées pour marquer vos visiteurs dès la première seconde.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <LinkButton href="#services">Mes services</LinkButton>
          <LinkButton href="/contact" variant="outline">Contact</LinkButton>
        </motion.div>
      </div>
    </div>
  </section>
);
