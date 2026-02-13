'use client';

import { useThemeMode } from '@/components/providers/theme-provider';

export const ThemeToggleWidget = () => {
  const { theme, toggleTheme } = useThemeMode();
  return (
    <div className="rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[var(--surface)] p-5">
      <p className="text-xs uppercase text-[var(--text-secondary)]">W2 Toggle Dark/Light</p>
      <button onClick={toggleTheme} className="mt-4 rounded-full border border-[rgba(255,255,255,0.14)] px-4 py-2 text-sm">
        Basculer vers {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  );
};
