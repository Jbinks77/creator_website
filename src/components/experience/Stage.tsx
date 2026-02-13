'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { ExperienceChapterId } from '@/data/experience';
import { WireframeScene } from '@/components/experience/chapters/wireframe-scene';
import { CodeScene } from '@/components/experience/chapters/code-scene';
import { DesignScene } from '@/components/experience/chapters/design-scene';
import { PerformanceScene } from '@/components/experience/chapters/performance-scene';
import { DeliveryScene } from '@/components/experience/chapters/delivery-scene';

const SceneMap: Record<ExperienceChapterId, ComponentType<{ progress: number }>> = {
  wireframe: WireframeScene,
  code: CodeScene,
  design: DesignScene,
  performance: PerformanceScene,
  delivery: DeliveryScene
};

export const Stage = ({ chapterId, chapterProgress, reducedMotion }: { chapterId: ExperienceChapterId; chapterProgress: number; reducedMotion: boolean }) => {
  const Scene = SceneMap[chapterId];

  return (
    <div className={reducedMotion ? 'lg:static' : 'lg:sticky lg:top-24'}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={chapterId}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -10, filter: 'blur(8px)' }}
          transition={{ duration: reducedMotion ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Scene progress={reducedMotion ? 1 : chapterProgress} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
