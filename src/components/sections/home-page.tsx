'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ParallaxMedia } from '@/components/motion/parallax-media';
import { Reveal } from '@/components/motion/reveal';
import { TiltCard } from '@/components/motion/tilt-card';
import { cinematicEase, staggerContainer } from '@/lib/motion';
import { pills, processSteps, proofMetrics, services } from '@/lib/site-data';

export function HomePageSections() {
  return (
    <>
      <section className="mx-auto grid min-h-[78vh] max-w-6xl items-end gap-10 px-4 pb-20 pt-14 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 text-xs uppercase tracking-[0.3em] text-white/60">
            Studio [TON NOM]
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: cinematicEase }}
            className="text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            Des sites web qui font vendre — design, performance, conversion.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 max-w-xl text-white/65">
            Je conçois des expériences web fluides et premium pensées pour transformer vos visiteurs en clients.
          </motion.p>
          <div className="mt-9 flex gap-4">
            <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">Démarrer</Link>
            <Link href="/mes-creations" className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/90">Voir les projets</Link>
          </div>
        </div>
        <ParallaxMedia className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-blue-500/10 to-purple-600/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.03] p-10">
            <div className="grain-overlay absolute inset-0 opacity-35" />
            <div className="h-52 rounded-2xl bg-gradient-to-br from-white/10 to-white/0" />
            <p className="mt-6 text-sm text-white/70">Interactions subtiles, staging visuel et rythme cinématique.</p>
          </div>
        </ParallaxMedia>
      </section>

      <Reveal className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap gap-3">
          {pills.map((pill) => (
            <span key={pill} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
              {pill}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-white">Services</h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <TiltCard key={service.title} className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 transition">
              <h3 className="text-xl text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-cyan-200">{service.price}</p>
              <p className="mt-4 text-white/70">{service.desc}</p>
            </TiltCard>
          ))}
        </motion.div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-white">Process</h2>
        <div className="mt-8 space-y-6 border-l border-white/20 pl-6">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative">
              <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-white/80" />
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">0{index + 1}</p>
              <h3 className="mt-1 text-xl text-white">{step.title}</h3>
              <p className="mt-2 text-white/65">{step.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-8">
          <h2 className="text-3xl font-semibold text-white">Proof</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {proofMetrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-3xl text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-white/60">{metric.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/45">*Les résultats varient selon l’offre, le trafic et la qualité de l’offre commerciale.</p>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 pb-20 pt-10">
        <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-white/10 to-transparent p-8">
          <h2 className="text-3xl font-semibold text-white">Prêt à transformer votre présence web ?</h2>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
            Réserver un appel découverte
          </Link>
        </div>
      </Reveal>
    </>
  );
}
