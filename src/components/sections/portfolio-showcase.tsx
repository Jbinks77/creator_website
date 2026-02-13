'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/motion/reveal';
import { TiltCard } from '@/components/motion/tilt-card';
import { projects, ProjectType } from '@/lib/site-data';

const filters: ('Tout' | ProjectType)[] = ['Tout', 'Vitrine', 'Landing', 'E-commerce'];

export function PortfolioShowcase() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Tout');
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  const list = useMemo(() => (filter === 'Tout' ? projects : projects.filter((p) => p.type === filter)), [filter]);

  return (
    <Reveal className="mx-auto max-w-6xl px-4 pb-20 pt-14">
      <div className="flex flex-wrap gap-3">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-full border px-4 py-2 text-sm transition ${filter === item ? 'border-white bg-white text-black' : 'border-white/20 text-white/70 hover:border-white/60'}`}
          >
            {item}
          </button>
        ))}
      </div>
      <motion.div className="mt-8 grid gap-5 md:grid-cols-2">
        {list.map((project) => (
          <TiltCard key={project.title} className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.02]">
            <button
              className="w-full p-6 text-left"
              onClick={() => {
                setSelected(project);
                setOpen(true);
              }}
            >
              <div className="h-44 rounded-2xl bg-gradient-to-br from-white/15 to-transparent transition duration-500 hover:scale-[1.02]" />
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/50">{project.type}</p>
              <h3 className="mt-2 text-2xl text-white">{project.title}</h3>
              <p className="mt-2 text-white/60">{project.summary}</p>
            </button>
          </TiltCard>
        ))}
      </motion.div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/15 bg-[#090b12] p-7 text-white">
            <Dialog.Title className="text-2xl">{selected?.title}</Dialog.Title>
            <p className="mt-3 text-white/70">{selected?.summary}</p>
            <p className="mt-5 text-sm text-cyan-200">Impact: {selected?.impact}</p>
            {selected?.url && selected.url !== '#' && (
              <a className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10" href={selected.url} target="_blank" rel="noreferrer">
                Voir le site
              </a>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Reveal>
  );
}
