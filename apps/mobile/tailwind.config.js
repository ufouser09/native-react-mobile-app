/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
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

        textLight: '#F3F4F6',
        textMuted: '#9CA3AF',
        textSubtle: '#6B7280',
      },
    },
  },
  plugins: [],
};
