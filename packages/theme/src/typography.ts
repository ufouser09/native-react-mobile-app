import { Platform } from 'react-native';

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    serif: 'var(--font-serif, Georgia, Cambria, serif)',
    rounded: 'var(--font-rounded, sans-serif)',
    mono: 'var(--font-mono, monospace)',
  },
})!;

export const FontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const FontSizes = {
  caption: 11, // 0.675rem
  body5: 12,   // 0.75rem
  body4: 14,   // 0.875rem
  body3: 16,   // 1rem
  body2: 18,   // 1.125rem
  body1: 20,   // 1.25rem
  h6: 16,      // 1.0rem
  h5: 18,      // 1.1rem
  h4: 20,      // 1.25rem
  h3: 22,      // 1.35rem
  h2: 30,      // 1.85rem
  h1: 40,      // 2.5rem
  // Tailwind aliases:
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
} as const;

export const LineHeights = {
  caption: 15,
  body5: 16,
  body4: 20,
  body3: 24,
  body2: 26,
  body1: 28,
  h6: 22,
  h5: 24,
  h4: 26,
  h3: 28,
  h2: 36,
  h1: 48,
  // Tailwind aliases:
  xs: 16,
  sm: 20,
  base: 24,
  lg: 28,
  xl: 28,
  '2xl': 32,
  '3xl': 44,
  '4xl': 48,
  '5xl': 52,
} as const;

export const TypographyTokens = {
  h1: { fontSize: FontSizes.h1, lineHeight: LineHeights.h1, fontWeight: FontWeights.bold },
  h2: { fontSize: FontSizes.h2, lineHeight: LineHeights.h2, fontWeight: FontWeights.bold },
  h3: { fontSize: FontSizes.h3, lineHeight: LineHeights.h3, fontWeight: FontWeights.semibold },
  h4: { fontSize: FontSizes.h4, lineHeight: LineHeights.h4, fontWeight: FontWeights.semibold },
  h5: { fontSize: FontSizes.h5, lineHeight: LineHeights.h5, fontWeight: FontWeights.semibold },
  h6: { fontSize: FontSizes.h6, lineHeight: LineHeights.h6, fontWeight: FontWeights.semibold },
  body1: { fontSize: FontSizes.body1, lineHeight: LineHeights.body1, fontWeight: FontWeights.regular },
  body2: { fontSize: FontSizes.body2, lineHeight: LineHeights.body2, fontWeight: FontWeights.regular },
  body3: { fontSize: FontSizes.body3, lineHeight: LineHeights.body3, fontWeight: FontWeights.regular },
  body4: { fontSize: FontSizes.body4, lineHeight: LineHeights.body4, fontWeight: FontWeights.regular },
  body5: { fontSize: FontSizes.body5, lineHeight: LineHeights.body5, fontWeight: FontWeights.regular },
  body6: { fontSize: FontSizes.caption, lineHeight: LineHeights.caption, fontWeight: FontWeights.regular },
  caption: { fontSize: FontSizes.caption, lineHeight: LineHeights.caption, fontWeight: FontWeights.regular },
} as const;
