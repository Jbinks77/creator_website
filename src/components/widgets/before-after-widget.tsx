'use client';

import { useState } from 'react';

export const BeforeAfterWidget = () => {
  const [value, setValue] = useState(50);
  return (
    <div className="rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[var(--surface)] p-5">
      <p className="text-xs uppercase text-[var(--text-secondary)]">W1 Avant/Après</p>
      <div className="relative mt-4 h-40 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)]">
        <div className="absolute inset-0 bg-[#10131b]" />
        <div className="absolute inset-y-0 left-0 bg-[var(--accent)]/30" style={{ width: `${value}%` }} />
        <div className="absolute inset-0 grid grid-cols-2 text-xs text-[var(--text-secondary)]"><span className="p-3">Basic</span><span className="p-3 text-right">Premium</span></div>
      </div>
      <input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} className="mt-4 w-full" />
    </div>
  );
};
