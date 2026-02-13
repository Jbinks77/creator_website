'use client';

import { createContext, useContext, useMemo, useState } from 'react';

type ToastItem = { id: number; message: string };

const ToastContext = createContext<{ push: (message: string) => void } | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const push = (message: string) => {
    const id = Date.now();
    setItems((prev) => [...prev, { id, message }]);
    window.setTimeout(() => setItems((prev) => prev.filter((item) => item.id !== id)), 2800);
  };

  const value = useMemo(() => ({ push }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-5 top-5 z-[80] space-y-2">
        {items.map((item) => (
          <div key={item.id} className="rounded-xl border border-white/20 bg-black/75 px-4 py-2 text-sm text-white backdrop-blur">
            {item.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
}
