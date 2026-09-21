export const Colors = {
  light: {
    text: '#062B21',
    background: '#F0FDF4',
    backgroundElement: '#DCFCE7',
    backgroundSelected: '#BBF7D0',
    textSecondary: '#166534',
  },
  dark: {
    text: '#ECFDF5',
    background: '#041812',
    backgroundElement: '#082E23',
    backgroundSelected: '#0E4032',
    textSecondary: '#6EE7B7',
  },
} as const;

export const IslamicTheme = {
  emeraldDarkest: '#03140F',
  emeraldDark: '#041F17',
  emeraldCard: '#083227',
  emeraldCardHover: '#0D4738',
  emeraldSurface: '#0E4032',
  emeraldLight: '#10B981',
  emeraldAccent: '#34D399',

  gold: '#F59E0B',
  goldLight: '#FCD34D',
  goldBright: '#FEF08A',
  goldDark: '#D97706',
  goldBorder: 'rgba(245, 158, 11, 0.35)',

  white: '#FFFFFF',
  textLight: '#F3F4F6',
  textMuted: '#9CA3AF',
  textSubtle: '#6B7280',

  danger: '#EF4444',
  success: '#10B981',

  glassBg: 'rgba(8, 50, 39, 0.75)',
  glassBorder: 'rgba(245, 158, 11, 0.22)',
} as const;

export type ThemeMode = 'light' | 'dark';
export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;
export type ThemePalette = Record<ThemeColor, string>;
