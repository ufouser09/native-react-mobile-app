import React, { createContext, useContext } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';
import { Colors, ThemeColor, ThemeMode, ThemePalette } from './colors';

export interface ThemeContextValue {
  theme: ThemePalette;
  colorScheme: ThemeMode;
  setColorScheme?: (scheme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
  colorScheme: controlledColorScheme,
}: {
  children: React.ReactNode;
  colorScheme?: ThemeMode;
}) {
  const systemScheme = useRNColorScheme();
  const currentScheme: ThemeMode =
    controlledColorScheme ?? (systemScheme === 'dark' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider
      value={{
        theme: Colors[currentScheme] ?? Colors.light,
        colorScheme: currentScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemePalette {
  const context = useContext(ThemeContext);
  const systemScheme = useRNColorScheme();
  const currentScheme: ThemeMode = systemScheme === 'dark' ? 'dark' : 'light';

  if (context?.theme) {
    return context.theme;
  }

  return Colors[currentScheme] ?? Colors.light;
}

export function useThemeMode(): ThemeMode {
  const context = useContext(ThemeContext);
  const systemScheme = useRNColorScheme();
  return context?.colorScheme ?? (systemScheme === 'dark' ? 'dark' : 'light');
}
