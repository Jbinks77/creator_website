'use client';

import { faq } from '@/lib/data';
import { useMemo, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';

export const FAQSearchWidget = () => {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => faq.filter((item) => item.q.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <div className="glass-card rounded-2xl p-5">
      <p className="font-semibold">#6 FAQ avec recherche</p>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher une question" className="mt-3 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm" />
      <Accordion.Root type="single" collapsible className="mt-3 space-y-2">
        {filtered.map((item) => (
          <Accordion.Item key={item.q} value={item.q} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <Accordion.Trigger className="w-full text-left text-sm font-medium">{item.q}</Accordion.Trigger>
            <Accordion.Content className="pt-2 text-sm text-slate-300">{item.a}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};
