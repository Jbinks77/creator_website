'use client';

import { MotionConfig } from 'framer-motion';
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

type MotionState = {
  reducedMotion: boolean;
  devReducedMotion: boolean;
  setDevReducedMotion: (value: boolean) => void;
};

const MotionStateContext = createContext<MotionState | null>(null);

const isTouchDevice = () =>
  typeof window !== 'undefined' && (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);

function useSmoothScroll(enabled: boolean) {
  const targetRef = useRef(0);
  const currentRef = useRef(0);

  useEffect(() => {
    if (!enabled || isTouchDevice()) {
      return;
    }

    let raf = 0;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const max = document.documentElement.scrollHeight - window.innerHeight;
      targetRef.current = Math.max(0, Math.min(max, targetRef.current + event.deltaY));
    };

    targetRef.current = window.scrollY;
    currentRef.current = window.scrollY;

    const loop = () => {
      currentRef.current += (targetRef.current - currentRef.current) * 0.09;
      if (Math.abs(targetRef.current - currentRef.current) < 0.1) {
        currentRef.current = targetRef.current;
      }
      window.scrollTo(0, currentRef.current);
      raf = window.requestAnimationFrame(loop);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    raf = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.cancelAnimationFrame(raf);
    };
  }, [enabled]);
}

export function AppMotionProvider({ children }: { children: React.ReactNode }) {
  const [systemReduce, setSystemReduce] = useState(false);
  const [devReducedMotion, setDevReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setSystemReduce(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const reducedMotion = systemReduce || devReducedMotion;
  useSmoothScroll(!reducedMotion);

  const value = useMemo(
    () => ({ reducedMotion, devReducedMotion, setDevReducedMotion }),
    [reducedMotion, devReducedMotion]
  );

  return (
    <MotionStateContext.Provider value={value}>
      <MotionConfig reducedMotion={reducedMotion ? 'always' : 'never'} transition={{ duration: 0.6 }}>
        {children}
      </MotionConfig>
    </MotionStateContext.Provider>
  );
}

export function useMotionState() {
  const context = useContext(MotionStateContext);
  if (!context) {
    throw new Error('useMotionState must be used inside AppMotionProvider');
  }
  return context;
}
