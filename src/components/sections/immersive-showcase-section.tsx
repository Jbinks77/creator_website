'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Gauge, Layers2, MousePointer2, Sparkles } from 'lucide-react';
import { useMemo } from 'react';

const pillars = [
  {
    icon: Layers2,
    title: 'Narration visuelle',
    text: 'Chaque bloc raconte une progression claire, avec profondeur et hiérarchie premium.'
  },
  {
    icon: MousePointer2,
    title: 'Interaction subtile',
    text: 'La page réagit à l’utilisateur (hover, parallax, transitions fluides) sans effet gadget.'
  },
  {
    icon: Gauge,
    title: 'Sensations + perf',
    text: 'Animations maîtrisées, respect de reduced motion et base optimisée pour Lighthouse.'
  }
];

export const ImmersiveShowcaseSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 20 });

  const glow = useMotionTemplate`radial-gradient(450px at ${smoothX}px ${smoothY}px, rgba(75,220,255,0.22), transparent 70%)`;

  const lines = useMemo(() => Array.from({ length: 9 }, (_, i) => i), []);

  return (
    <section className="mx-auto mt-24 max-w-6xl px-4">
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-6 md:p-10"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }}
      >
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glow }} />

        <div className="pointer-events-none absolute inset-0 opacity-30">
          {lines.map((line) => (
            <motion.div
              key={line}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
              style={{ top: `${(line + 1) * 10}%` }}
              animate={{ opacity: [0.15, 0.45, 0.15] }}
              transition={{ duration: 4 + line * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr,1fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-cyan-100">
              <Sparkles className="h-3.5 w-3.5" /> Expérience immersive
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight md:text-5xl">
              Une homepage vivante, cinématique et orientée conversion.
            </h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Dans l’esprit des sites événementiels premium: couches animées, rythme narratif, et micro-feedback précis.
            </p>
          </div>

          <motion.div
            className="glass-card relative rounded-2xl p-5"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-sm text-slate-300">Prototype interactif</p>
            <p className="mt-2 text-2xl font-semibold text-cyan-200">Layered Motion System</p>
            <p className="mt-3 text-sm text-slate-300">Parallax doux, glow réactif, lignes dynamiques et cartes flottantes synchronisées.</p>
          </motion.div>
        </div>

        <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                className="glass-card rounded-2xl p-5"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <Icon className="h-5 w-5 text-cyan-200" />
                <h3 className="mt-3 font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{pillar.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
