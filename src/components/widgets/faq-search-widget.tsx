'use client';

import { faq } from '@/data/faq';
import { useMemo, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';

export const FAQSearchWidget = () => {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => faq.filter((item) => item.question.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <div className="rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[var(--surface)] p-5">
      <p className="text-xs uppercase text-[var(--text-secondary)]">W4 FAQ recherche</p>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher..." className="mt-4 w-full rounded-xl border border-[rgba(255,255,255,0.14)] bg-transparent px-3 py-2 text-sm" />
      <Accordion.Root type="single" collapsible className="mt-3 space-y-2">
        {filtered.map((item) => (
          <Accordion.Item key={item.question} value={item.question} className="rounded-xl border border-[rgba(255,255,255,0.1)] p-3">
            <Accordion.Trigger className="w-full text-left text-sm">{item.question}</Accordion.Trigger>
            <Accordion.Content className="pt-2 text-sm text-[var(--text-secondary)]">{item.answer}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};
