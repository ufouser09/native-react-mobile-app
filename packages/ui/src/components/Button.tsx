import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { Spacing, useTheme } from '@repo/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type ButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  className?: string;
};

export function Button({
  title,
  variant = 'primary',
  style,
  textStyle,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  const getBackgroundColor = (pressed: boolean) => {
    if (disabled) return theme.backgroundSelected;
    if (variant === 'primary') return pressed ? '#0b7c59' : '#10B981';
    if (variant === 'secondary') return pressed ? theme.backgroundSelected : theme.backgroundElement;
    if (variant === 'outline' || variant === 'ghost') return pressed ? theme.backgroundElement : 'transparent';
    return 'transparent';
  };

  const getTextColor = () => {
    if (disabled) return theme.textSecondary;
    if (variant === 'primary') return '#FFFFFF';
    if (variant === 'outline') return theme.text;
    return theme.text;
  };

  return (
    <Pressable
      className={className}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: getBackgroundColor(pressed),
          borderColor: variant === 'outline' ? theme.backgroundSelected : 'transparent',
          borderWidth: variant === 'outline' ? 1 : 0,
          opacity: disabled ? 0.6 : 1,
        },
        style,
      ]}
      {...rest}
    >
      <Text style={[styles.text, { color: getTextColor() }, textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: Spacing.four,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
