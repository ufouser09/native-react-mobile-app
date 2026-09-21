import React from 'react';
import { View, type ViewProps } from 'react-native';
import { ThemeColor, useTheme, useThemeMode } from '@repo/theme';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;
  className?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  type,
  className,
  ...otherProps
}: ThemedViewProps) {
  const theme = useTheme();
  const mode = useThemeMode();

  let backgroundColor = theme[type ?? 'background'];
  if (lightColor && mode === 'light') {
    backgroundColor = lightColor;
  } else if (darkColor && mode === 'dark') {
    backgroundColor = darkColor;
  }

  return <View className={className} style={[{ backgroundColor }, style]} {...otherProps} />;
}
