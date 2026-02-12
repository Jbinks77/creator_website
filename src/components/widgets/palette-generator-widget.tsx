'use client';

import { useState } from 'react';

const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;

export const PaletteGeneratorWidget = () => {
  const [colors, setColors] = useState(['#45d6ff', '#9f7aea', '#0f172a']);

  return (
    <div className="glass-card rounded-2xl p-5">
      <p className="font-semibold">#4 Générateur de palette</p>
      <button onClick={() => setColors([randomHex(), randomHex(), randomHex()])} className="mt-3 rounded-full bg-white/10 px-3 py-1 text-sm">Nouvelles couleurs</button>
      <div className="mt-4 flex gap-2">
        {colors.map((color) => (
          <button key={color} onClick={() => navigator.clipboard?.writeText(color)} className="flex-1 rounded-lg p-3 text-xs font-semibold text-black" style={{ backgroundColor: color }}>
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};
