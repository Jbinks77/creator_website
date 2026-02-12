'use client';

import { testimonials } from '@/lib/data';
import { useEffect, useState } from 'react';

export const TestimonialCarouselWidget = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 3000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <div className="glass-card rounded-2xl p-5">
      <p className="font-semibold">#3 Témoignages</p>
      <blockquote className="mt-4 text-slate-200">“{t.text}”</blockquote>
      <p className="mt-3 text-sm text-slate-400">{t.author} · {t.role}</p>
      <div className="mt-3 flex gap-2">
        {testimonials.map((_, i) => <button key={i} onClick={() => setIndex(i)} className={`h-2 w-6 rounded-full ${i===index?'bg-cyan-300':'bg-white/20'}`} aria-label={`Témoignage ${i + 1}`} />)}
      </div>
    </div>
  );
};
