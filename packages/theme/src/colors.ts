/* =========================================================
   UI Color Palette System
   5 Ana Renk Ailesi (Mavi, Nötr, Sarı, Kırmızı, Yeşil) - 10'ar ton
   Semantik Katman (bg/border/text) Light & Dark theme-aware
   ========================================================= */

export const Blue = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
} as const;

export const Neutral = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
  950: '#0b0f19',
} as const;

export const Yellow = {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
} as const;

export const Red = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
} as const;

export const Green = {
  50: '#ecfdf5',
  100: '#d1fae5',
  200: '#a7f3d0',
  300: '#6ee7b7',
  400: '#34d399',
  500: '#10b981',
  600: '#059669',
  700: '#047857',
  800: '#065f46',
  900: '#064e3b',
} as const;

export const Palette = {
  blue: Blue,
  neutral: Neutral,
  yellow: Yellow,
  red: Red,
  green: Green,
} as const;

/* --- Semantik Renk Skalası (Light / Dark) --- */
export const SemanticColors = {
  light: {
    bgPrimary: Neutral[50],
    bgSurface: 'rgba(255, 255, 255, 0.75)',
    bgSurfaceHover: 'rgba(241, 245, 249, 0.9)',

    border: 'rgba(15, 23, 42, 0.08)',
    borderGlow: 'rgba(16, 185, 129, 0.4)',

    text1: Neutral[900],
    text2: Neutral[800],
    text3: Neutral[700],
    text4: Neutral[600],
    text5: Neutral[500],
    text6: Neutral[500],

    textPrimary: Neutral[900],
    textSecondary: Neutral[600],
    textMuted: Neutral[500],
  },
  dark: {
    bgPrimary: Neutral[950],
    bgSurface: 'rgba(20, 27, 45, 0.65)',
    bgSurfaceHover: 'rgba(30, 41, 67, 0.8)',

    border: 'rgba(255, 255, 255, 0.08)',
    borderGlow: 'rgba(16, 185, 129, 0.4)',

    text1: Neutral[50],
    text2: Neutral[100],
    text3: Neutral[200],
    text4: Neutral[300],
    text5: Neutral[400],
    text6: Neutral[500],

    textPrimary: Neutral[50],
    textSecondary: Neutral[300],
    textMuted: Neutral[500],
  },
} as const;

export const Gradients = {
  primary: [Green[400], Green[700]] as const,
  blue: [Blue[400], Blue[700]] as const,
  green: [Green[400], Green[700]] as const,
  yellow: [Yellow[400], Yellow[700]] as const,
} as const;

export const Colors = {
  light: {
    ...SemanticColors.light,
    text: SemanticColors.light.textPrimary,
    background: SemanticColors.light.bgPrimary,
    backgroundElement: Neutral[100],
    backgroundSelected: Neutral[200],
  },
  dark: {
    ...SemanticColors.dark,
    text: SemanticColors.dark.textPrimary,
    background: SemanticColors.dark.bgPrimary,
    backgroundElement: Neutral[900],
    backgroundSelected: Neutral[800],
  },
} as const;

export const IslamicTheme = {
  emeraldDarkest: '#03140F',
  emeraldDark: '#041F17',
  emeraldCard: '#083227',
  emeraldCardHover: '#0D4738',
  emeraldSurface: '#0E4032',
  emeraldLight: Green[500],
  emeraldAccent: Green[400],

  gold: Yellow[500],
  goldLight: Yellow[300],
  goldBright: Yellow[200],
  goldDark: Yellow[600],
  goldBorder: 'rgba(245, 158, 11, 0.35)',

  white: '#FFFFFF',
  textLight: '#F3F4F6',
  textMuted: '#9CA3AF',
  textSubtle: '#6B7280',

  danger: Red[500],
  success: Green[500],

  glassBg: 'rgba(8, 50, 39, 0.75)',
  glassBorder: 'rgba(245, 158, 11, 0.22)',
} as const;

export type ThemeMode = 'light' | 'dark';
export type ThemeColor = keyof typeof Colors.light;
export type ThemePalette = Record<ThemeColor, string>;
