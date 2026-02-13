'use client';

import { useMotionState } from '@/components/motion/motion-provider';

export function ReduceMotionToggle() {
  const { devReducedMotion, setDevReducedMotion, reducedMotion } = useMotionState();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => setDevReducedMotion(!devReducedMotion)}
      className="fixed bottom-4 left-4 z-[70] rounded-full border border-white/15 bg-black/70 px-3 py-2 text-xs text-white backdrop-blur"
    >
      Reduce motion (dev): {reducedMotion ? 'ON' : 'OFF'}
    </button>
  );
}
