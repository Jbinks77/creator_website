'use client';

import { motion } from 'framer-motion';

const lines = [
  "export const Hero = () => (",
  "  <section className='hero'>",
  "    <h1>Offre claire</h1>",
  "    <CTA href='/contact'>Demander un devis</CTA>",
  "  </section>",
  ");",
  '',
  'const metrics = {',
  "  perf: 98,",
  "  seo: 95,",
  "  accessibility: 100",
  '};'
];

export const CodeScene = ({ progress }: { progress: number }) => {
  const visible = Math.round(progress * lines.length);
  return (
    <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#080a0e] p-4 font-mono text-sm">
      {lines.map((line, i) => (
        <motion.p key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: i < visible ? 1 : 0.16, y: 0 }} transition={{ duration: 0.35 }} className={i === 3 || i === 8 ? 'text-[#4F8CFF]' : 'text-[var(--text-secondary)]'}>
          {line || ' '}
        </motion.p>
      ))}
    </div>
  );
};
