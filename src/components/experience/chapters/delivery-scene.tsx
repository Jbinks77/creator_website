'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const DeliveryScene = ({ progress }: { progress: number }) => (
  <motion.div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-6 text-center" animate={{ scale: 0.95 + progress * 0.05, filter: `blur(${(1 - progress) * 2}px)` }}>
    <p className="text-sm text-[var(--text-secondary)]">Votre projet</p>
    <p className="mt-2 text-2xl font-semibold">Construisons le vôtre.</p>
    <div className="mt-5 flex justify-center gap-3">
      <Link href="/contact" className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">Demander un devis</Link>
      <Link href="/mes-creations" className="rounded-full border border-[rgba(255,255,255,0.14)] px-4 py-2 text-sm">Voir mes créations</Link>
    </div>
  </motion.div>
);
