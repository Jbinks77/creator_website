'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export const PricingToggleWidget = () => {
  const [annual, setAnnual] = useState(true);
  const base = annual ? 99 : 129;

  return (
    <div className="glass-card rounded-2xl p-5">
      <p className="font-semibold">#1 Pricing toggle</p>
      <button onClick={() => setAnnual((v) => !v)} className="mt-3 rounded-full bg-white/10 px-3 py-1 text-sm">
        {annual ? 'Annuel' : 'Mensuel'}
      </button>
      <motion.p key={String(annual)} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-3xl font-semibold text-cyan-200">
        {base}€ / mois
      </motion.p>
    </div>
  );
};
