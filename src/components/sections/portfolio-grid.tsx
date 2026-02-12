'use client';

import { projects, ProjectType } from '@/lib/data';
import { useMemo, useState } from 'react';
import Image from 'next/image';

const filters: Array<'Tout' | ProjectType> = ['Tout', 'Vitrine', 'Landing', 'E-commerce'];

export const PortfolioGrid = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Tout');
  const filtered = useMemo(() => projects.filter((project) => filter === 'Tout' || project.type === filter), [filter]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm ${filter === f ? 'bg-cyan-300 text-slate-950' : 'bg-white/10 text-slate-300'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <article key={project.title} className="glass-card overflow-hidden rounded-2xl text-left">
            <div className="relative aspect-[16/10] w-full">
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{project.description}</p>
              <p className="mt-3 text-xs text-cyan-200">{project.stack.join(' · ')}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-white underline underline-offset-4">
                Voir le site
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
