import React from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import { Spacing, useTheme } from '@repo/theme';

export type CardProps = ViewProps & {
  variant?: 'elevated' | 'outlined' | 'flat';
  className?: string;
};

export function Card({ style, variant = 'flat', className, children, ...rest }: CardProps) {
  const theme = useTheme();

  return (
    <View
      className={className}
      style={[
        styles.card,
        { backgroundColor: theme.backgroundElement },
        variant === 'outlined' && {
          borderWidth: 1,
          borderColor: theme.backgroundSelected,
        },
        variant === 'elevated' && styles.elevated,
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: Spacing.four,
  },
  elevated: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});
