'use client';

import { projects, ProjectType } from '@/lib/data';
import { useMemo, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const filters: Array<'Tout' | ProjectType> = ['Tout', 'Vitrine', 'Landing', 'E-commerce'];

export const PortfolioGrid = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Tout');
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  const filtered = useMemo(() => projects.filter((project) => filter === 'Tout' || project.type === filter), [filter]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-sm ${filter === f ? 'bg-cyan-300 text-slate-950' : 'bg-white/10 text-slate-300'}`}>
            {f}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <button key={project.title} className="glass-card rounded-2xl p-4 text-left" onClick={() => setSelected(project)}>
            <div className="h-36 rounded-xl bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-400/20" />
            <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-cyan-200">{project.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
            <span className="mt-3 inline-block text-sm text-white underline">Voir le site</span>
          </button>
        ))}
      </div>

      <Dialog.Root open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          <Dialog.Content className="glass-card fixed left-1/2 top-1/2 w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6">
            {selected && (
              <>
                <Dialog.Title className="text-xl font-semibold">{selected.title}</Dialog.Title>
                <p className="mt-2 text-slate-300">Objectif : {selected.description}</p>
                <p className="mt-2 text-slate-300">Features : animations fluides, structure SEO, conversion optimisée.</p>
                <p className="mt-2 text-slate-300">Stack : {selected.stack.join(' · ')}</p>
                <a href={selected.link} target="_blank" className="mt-4 inline-block text-cyan-200 underline" rel="noreferrer">Ouvrir le projet</a>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
};
