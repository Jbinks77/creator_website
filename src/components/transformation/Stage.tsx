'use client';

import { motion, type MotionValue, useMotionValueEvent, useTransform } from 'framer-motion';
import { useState } from 'react';

type StageProps = {
  progress: MotionValue<number>;
  activeChapter: number;
  reduced?: boolean;
};

const circumference = 2 * Math.PI * 46;

export const Stage = ({ progress, activeChapter, reduced = false }: StageProps) => {
  const oldOpacity = useTransform(progress, [0, 0.55], [1, 0], { clamp: true });
  const newOpacity = useTransform(progress, [0.35, 1], [0, 1], { clamp: true });
  const oldBlur = useTransform(progress, [0, 0.55], ['blur(0px)', 'blur(8px)'], { clamp: true });
  const newBlur = useTransform(progress, [0.35, 1], ['blur(8px)', 'blur(0px)'], { clamp: true });

  const radius = useTransform(progress, [0, 1], [12, 28]);
  const shellShadow = useTransform(progress, [0, 0.5, 1], ['0 1px 0 rgba(255,255,255,0.02),0 10px 24px rgba(0,0,0,0.35)', '0 1px 0 rgba(255,255,255,0.03),0 20px 42px rgba(0,0,0,0.48)', '0 1px 0 rgba(255,255,255,0.04),0 28px 72px rgba(0,0,0,0.62)']);
  const stageScale = useTransform(progress, [0, 1], [0.985, 1]);

  const spacing = useTransform(progress, [0, 1], [12, 22]);
  const headingTracking = useTransform(progress, [0, 1], ['0em', '-0.025em']);
  const oldCtaBg = useTransform(progress, [0, 0.8], ['rgba(255,255,255,0.1)', 'rgba(79,140,255,0.12)']);
  const newCtaBg = useTransform(progress, [0.6, 1], ['rgba(79,140,255,0.45)', 'rgba(79,140,255,1)']);
  const newCtaGlow = useTransform(progress, [0.6, 1], ['0 0 0 rgba(79,140,255,0)', '0 10px 30px rgba(79,140,255,0.45)']);

  const designGate = useTransform(progress, [0.45, 0.6], [0, 1], { clamp: true });

  const performanceP = useTransform(progress, [0.8, 1], [0, 1], { clamp: true });
  const perfOpacity = useTransform(progress, [0.8, 0.88], [0, 1], { clamp: true });
  const waterfall1 = useTransform(performanceP, [0, 1], ['88%', '54%']);
  const waterfall2 = useTransform(performanceP, [0, 1], ['72%', '38%']);
  const waterfall3 = useTransform(performanceP, [0, 1], ['55%', '21%']);
  const waterfall4 = useTransform(performanceP, [0, 1], ['44%', '10%']);
  const ringOffset = useTransform(performanceP, (v) => circumference - ((45 + v * 53) / 100) * circumference);

  const [score, setScore] = useState(45);
  useMotionValueEvent(performanceP, 'change', (v) => setScore(Math.round(45 + v * 53)));

  if (reduced) {
    return (
      <div className="space-y-4">
        {[0, 0.25, 0.5, 0.75, 1].map((p) => (
          <div key={p} className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-4">
            <p className="text-sm text-[var(--text-secondary)]">État {Math.round(p * 100)}%</p>
            <div className="mt-3 h-20 rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[#0b0d12]" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="lg:sticky lg:top-24 lg:h-[62vh] lg:min-h-[520px]">
      <motion.div
        style={{ borderRadius: radius, scale: stageScale, boxShadow: shellShadow }}
        className="relative h-full overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-5"
      >
        <motion.div className="pointer-events-none absolute inset-0" style={{ opacity: designGate }}>
          <div className="transformation-sweep absolute inset-0" />
        </motion.div>

        <motion.div className="space-y-3" style={{ opacity: oldOpacity, filter: oldBlur }}>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">Ancien site</p>
          <motion.h3 style={{ letterSpacing: headingTracking }} className="text-2xl font-medium leading-[1.2] text-white/70">
            Une offre peu claire, un message qui ne convertit pas.
          </motion.h3>
          <motion.div className="space-y-2" style={{ marginTop: spacing }}>
            <div className="h-2 w-3/4 rounded bg-[rgba(245,247,250,0.16)]" />
            <div className="h-2 w-2/3 rounded bg-[rgba(245,247,250,0.1)]" />
          </motion.div>
          <motion.button style={{ backgroundColor: oldCtaBg }} className="mt-3 rounded-full px-4 py-2 text-sm text-white/80">
            Demander un devis
          </motion.button>
        </motion.div>

        <motion.div className="absolute inset-5 space-y-4" style={{ opacity: newOpacity, filter: newBlur }}>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">Site parfait</p>
          <h3 className="text-[clamp(24px,2.5vw,32px)] font-semibold leading-[1.1] tracking-[-0.02em]">
            Une hiérarchie nette, une narration claire, un CTA qui convertit.
          </h3>

          <motion.div style={{ gap: spacing }} className="grid md:grid-cols-2">
            <motion.div style={{ borderRadius: radius }} className="rounded-[16px] border border-[rgba(255,255,255,0.1)] bg-[#101522] p-4">
              <p className="text-sm text-[var(--text-secondary)]">Typographie / rythme</p>
              <div className="mt-3 h-2 w-full rounded bg-[rgba(245,247,250,0.14)]" />
              <div className="mt-2 h-2 w-2/3 rounded bg-[rgba(245,247,250,0.2)]" />
            </motion.div>

            <motion.div style={{ borderRadius: radius }} className="rounded-[16px] border border-[rgba(255,255,255,0.1)] bg-[#0f1420] p-4">
              <p className="text-sm text-[var(--text-secondary)]">Conversion</p>
              <motion.button
                style={{ backgroundColor: newCtaBg, boxShadow: newCtaGlow }}
                className="mt-3 rounded-full px-4 py-2 text-sm font-semibold text-white"
              >
                Construisons votre site premium
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div style={{ opacity: activeChapter >= 4 ? perfOpacity : 0 }} className="mt-2 rounded-[16px] border border-[rgba(255,255,255,0.1)] bg-[#0d121d] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">Performance</p>
            <div className="mt-3 flex items-center gap-4">
              <svg viewBox="0 0 120 120" className="h-20 w-20 -rotate-90">
                <circle cx="60" cy="60" r="46" stroke="rgba(255,255,255,0.16)" strokeWidth="10" fill="none" />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="46"
                  stroke="var(--accent)"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  style={{ strokeDashoffset: ringOffset }}
                />
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
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
