export const themeVars = {
  dark: {
    '--bg': '#050608',
    '--surface': '#0B0D12',
    '--border': '#1A1F2A',
    '--text': '#F5F7FA',
    '--text-secondary': 'rgba(245,247,250,0.72)',
    '--accent': '#4F8CFF',
    '--success': '#46D39A'
  },
  light: {
    '--bg': '#F5F7FA',
    '--surface': '#FFFFFF',
    '--border': '#DDE2EB',
    '--text': '#0B0D12',
    '--text-secondary': 'rgba(11,13,18,0.72)',
    '--accent': '#4F8CFF',
    '--success': '#46D39A'
  }
} as const;

export type ThemeMode = keyof typeof themeVars;
