'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { TransformStepTypography } from '@/components/transformation/TransformStepTypography';
import { TransformStepSpacing } from '@/components/transformation/TransformStepSpacing';
import { TransformStepPalette } from '@/components/transformation/TransformStepPalette';
import { TransformStepPerformance } from '@/components/transformation/TransformStepPerformance';

type StepId = 'basic' | 'typography' | 'spacing' | 'palette' | 'performance' | 'final';

const BasicScene = ({ progress }: { progress: number }) => (
  <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#0b0d12] p-5">
    <motion.h3 className="text-xl text-[rgba(245,247,250,0.55)]" animate={{ opacity: 0.5 + progress * 0.3 }}>Titre basique, hiérarchie faible</motion.h3>
    <p className="mt-2 text-sm text-[rgba(245,247,250,0.5)]">Spacing serré, CTA discret, intention floue.</p>
    <button className="mt-4 rounded-full bg-[#3b4352] px-4 py-2 text-sm text-white/75">En savoir plus</button>
  </div>
);

const FinalScene = ({ progress }: { progress: number }) => (
  <motion.div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[var(--surface)] p-6 text-center" animate={{ scale: 0.96 + progress * 0.04 }}>
    <p className="text-sm text-[var(--text-secondary)]">Transformation complète</p>
    <p className="mt-2 text-2xl font-semibold">Construisons votre site premium</p>
    <div className="mt-4 flex flex-wrap justify-center gap-3">
      <a href="/contact" className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white">Demander un devis</a>
      <a href="/mes-creations" className="rounded-full border border-[rgba(255,255,255,0.14)] px-4 py-2 text-sm">Voir mes créations</a>
    </div>
  </motion.div>
);

const scenes: Record<StepId, ComponentType<{ progress: number }>> = {
  basic: BasicScene,
  typography: TransformStepTypography,
  spacing: TransformStepSpacing,
  palette: TransformStepPalette,
  performance: TransformStepPerformance,
  final: FinalScene
};

export const TransformationStage = ({ step, progress, reduced }: { step: StepId; progress: number; reduced: boolean }) => {
  const Scene = scenes[step];

  return (
    <div className={reduced ? 'lg:static' : 'lg:sticky lg:top-24'}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8, filter: 'blur(6px)' }}
          transition={{ duration: reduced ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Scene progress={reduced ? 1 : progress} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
