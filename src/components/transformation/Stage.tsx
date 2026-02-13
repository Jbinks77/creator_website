'use client';

import { motion, type MotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import { useState } from 'react';

type StageProps = {
  progress: MotionValue<number>;
  reduced?: boolean;
};

const circumference = 2 * Math.PI * 46;

export const Stage = ({ progress, reduced = false }: StageProps) => {
  const typographyP = useTransform(progress, [0.2, 0.4], [0, 1], { clamp: true });
  const spacingP = useTransform(progress, [0.4, 0.6], [0, 1], { clamp: true });
  const designP = useTransform(progress, [0.4, 0.8], [0, 1], { clamp: true });
  const conversionP = useTransform(progress, [0.6, 0.8], [0, 1], { clamp: true });
  const performanceP = useTransform(progress, [0.8, 1], [0, 1], { clamp: true });

  const oldOpacity = useTransform(progress, [0, 0.66], [1, 0], { clamp: true });
  const newOpacity = useTransform(progress, [0.24, 0.9], [0, 1], { clamp: true });
  const oldBlur = useTransform(progress, [0, 0.66], [0, 8], { clamp: true });
  const newBlur = useTransform(progress, [0.24, 0.9], [8, 0], { clamp: true });
  const stageScale = useTransform(progress, [0, 1], [0.98, 1]);
  const stageY = useTransform(progress, [0, 1], [8, 0]);
  const radius = useTransform(progress, [0, 1], [12, 20]);

  const headingSize = useTransform(typographyP, [0, 1], ['24px', '32px']);
  const headingColor = useTransform(typographyP, [0, 1], ['rgba(245,247,250,0.52)', 'rgba(245,247,250,0.7)']);
  const spacingMargin = useTransform(spacingP, [0, 1], ['10px', '20px']);
  const ctaBg = useTransform(conversionP, [0, 1], ['rgba(79,140,255,0.12)', 'rgba(79,140,255,0.82)']);
  const premiumShadow = useTransform(designP, [0, 1], ['0 1px 0 rgba(255,255,255,0.04),0 24px 60px rgba(0,0,0,0.45)', '0 1px 0 rgba(255,255,255,0.04),0 24px 60px rgba(0,0,0,0.6)']);
  const premiumCtaOpacity = useTransform(conversionP, [0, 1], [0.35, 1]);

  const waterfall1 = useTransform(performanceP, [0, 1], ['88%', '54%']);
  const waterfall2 = useTransform(performanceP, [0, 1], ['72%', '38%']);
  const waterfall3 = useTransform(performanceP, [0, 1], ['55%', '21%']);
  const waterfall4 = useTransform(performanceP, [0, 1], ['44%', '10%']);

  const [score, setScore] = useState(45);
  useMotionValueEvent(performanceP, 'change', (v) => {
    setScore(Math.round(45 + v * 53));
  });

  const ringOffset = useTransform(performanceP, (v) => circumference - ((45 + v * 53) / 100) * circumference);

  if (reduced) {
    return (
      <div className="space-y-4">
        {[0, 0.3, 0.55, 0.75, 1].map((p) => (
          <div key={p} className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-4">
            <p className="text-sm text-[var(--text-secondary)]">État {Math.round(p * 100)}%</p>
            <div className="mt-3 h-20 rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[#0b0d12]" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="lg:sticky lg:top-24">
      <motion.div
        style={{ scale: stageScale, y: stageY, borderRadius: radius }}
        className="relative overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-5 shadow-card"
      >
        <motion.div className="pointer-events-none absolute inset-0" style={{ opacity: designP }}>
          <div className="transformation-sweep absolute inset-0" />
        </motion.div>

        <motion.div style={{ opacity: oldOpacity, filter: oldBlur }} className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">Ancien site</p>
          <motion.h3 style={{ fontSize: headingSize, color: headingColor }} className="font-medium leading-[1.2]">
            Une offre peu claire, un message qui ne convertit pas.
          </motion.h3>
          <motion.div style={{ marginTop: spacingMargin }} className="space-y-2">
            <div className="h-2 w-3/4 rounded bg-[rgba(245,247,250,0.16)]" />
            <div className="h-2 w-2/3 rounded bg-[rgba(245,247,250,0.1)]" />
          </motion.div>
          <motion.button style={{ backgroundColor: ctaBg }} className="mt-3 rounded-full px-4 py-2 text-sm text-white/80">
            Demander un devis
          </motion.button>
        </motion.div>

        <motion.div style={{ opacity: newOpacity, filter: newBlur }} className="absolute inset-5 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">Site parfait</p>
          <h3 className="text-[clamp(24px,2.5vw,32px)] font-semibold leading-[1.1] tracking-[-0.02em]">
            Une hiérarchie nette, une narration claire, un CTA qui convertit.
          </h3>
          <div className="grid gap-3 md:grid-cols-2">
            <motion.div style={{ borderRadius: radius }} className="rounded-[16px] border border-[rgba(255,255,255,0.1)] bg-[#101522] p-4">
              <p className="text-sm text-[var(--text-secondary)]">Typographie / rythme</p>
              <div className="mt-3 h-2 w-full rounded bg-[rgba(245,247,250,0.14)]" />
              <div className="mt-2 h-2 w-2/3 rounded bg-[rgba(245,247,250,0.2)]" />
            </motion.div>
            <motion.div style={{ boxShadow: premiumShadow }} className="rounded-[16px] border border-[rgba(255,255,255,0.1)] bg-[#0f1420] p-4">
              <p className="text-sm text-[var(--text-secondary)]">Conversion</p>
              <motion.button style={{ opacity: premiumCtaOpacity }} className="mt-3 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">
                Construisons votre site premium
              </motion.button>
            </motion.div>
          </div>

          <div className="mt-2 rounded-[16px] border border-[rgba(255,255,255,0.1)] bg-[#0d121d] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">Performance</p>
            <div className="mt-3 flex items-center gap-4">
              <svg viewBox="0 0 120 120" className="h-20 w-20 -rotate-90">
                <circle cx="60" cy="60" r="46" stroke="rgba(255,255,255,0.16)" strokeWidth="10" fill="none" />
                <motion.circle cx="60" cy="60" r="46" stroke="var(--accent)" strokeWidth="10" fill="none" strokeLinecap="round" strokeDasharray={circumference} style={{ strokeDashoffset: ringOffset }} />
              </svg>
              <div>
                <p className="text-3xl font-semibold">{score}</p>
                <p className="text-xs text-[var(--text-secondary)]">Lighthouse global</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <motion.div className="h-2 rounded bg-[#1a2233]" style={{ width: waterfall1 }} />
              <motion.div className="h-2 rounded bg-[#1a2233]" style={{ width: waterfall2 }} />
              <motion.div className="h-2 rounded bg-[#1a2233]" style={{ width: waterfall3 }} />
              <motion.div className="h-2 rounded bg-[#1a2233]" style={{ width: waterfall4 }} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
