'use client';

import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { projects, ProjectType } from '@/data/projects';
import { useMemo, useState } from 'react';
import { TiltCard } from '@/components/shared/tilt-card';

const filters: Array<'Tout' | ProjectType> = ['Tout', 'Vitrine', 'Landing', 'E-commerce'];

export const PortfolioGrid = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Tout');
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const filtered = useMemo(() => projects.filter((p) => filter === 'Tout' || p.type === filter), [filter]);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1120px] px-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-sm ${filter === f ? 'bg-[var(--accent)] text-white' : 'border border-[rgba(255,255,255,0.1)]'}`}>{f}</button>)}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <TiltCard key={project.title}>
              <button onClick={() => setSelected(project)} className="w-full overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[var(--surface)] text-left shadow-card transition-shadow hover:shadow-card-hover">
                <div className="relative aspect-[16/10]">
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className="p-4">
                  <h3 className="text-[20px]">{project.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">{project.description}</p>
                  <p className="mt-2 text-xs text-[var(--text-secondary)]">{project.stack.join(' / ')}</p>
                </div>
              </button>
            </TiltCard>
          ))}
        </div>
      </div>

      <Dialog.Root open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/70" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-6">
            {selected && (
              <>
                <Dialog.Title className="text-xl font-semibold">{selected.title}</Dialog.Title>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{selected.description}</p>
                <p className="mt-3 text-sm">Stack : {selected.stack.join(' · ')}</p>
                <a href={selected.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-[var(--accent)] px-4 py-2 text-sm text-white">Ouvrir</a>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
};
