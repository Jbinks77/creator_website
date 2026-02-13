'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { themeVars, ThemeMode } from '@/lib/theme';

type ThemeContextType = { theme: ThemeMode; toggleTheme: () => void };
const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme-mode') as ThemeMode | null;
    const mode = saved ?? 'dark';
    setTheme(mode);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    Object.entries(themeVars[theme]).forEach(([key, value]) => root.style.setProperty(key, value));
    localStorage.setItem('theme-mode', theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeMode = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeMode must be used within ThemeProvider');
  return ctx;
};
