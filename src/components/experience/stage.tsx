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

export const Stage = ({ chapterId, chapterProgress }: { chapterId: ExperienceChapterId; chapterProgress: number }) => {
  const Scene = SceneMap[chapterId];
  return (
    <div className="sticky top-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={chapterId}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Scene progress={chapterProgress} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
