import React from 'react';
import { Platform, StyleSheet, Text, type TextProps } from 'react-native';
import { Fonts, ThemeColor, useTheme } from '@repo/theme';

export type ThemedTextVariant =
  | 'default'
  | 'title'
  | 'small'
  | 'smallBold'
  | 'subtitle'
  | 'link'
  | 'linkPrimary'
  | 'code';

export type ThemedTextProps = TextProps & {
  type?: ThemedTextVariant;
  themeColor?: ThemeColor;
  className?: string;
};

export function ThemedText({
  style,
  type = 'default',
  themeColor,
  className,
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      className={className}
      style={[
        { color: theme[themeColor ?? 'text'] },
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'small' && styles.small,
        type === 'smallBold' && styles.smallBold,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && styles.link,
        type === 'linkPrimary' && styles.linkPrimary,
        type === 'code' && styles.code,
        style,
      ]}
      {...rest}
    />
  );
}

export function Heading(props: ThemedTextProps) {
  return <ThemedText type="title" {...props} />;
}

export function Subheading(props: ThemedTextProps) {
  return <ThemedText type="subtitle" {...props} />;
}

export function Paragraph(props: ThemedTextProps) {
  return <ThemedText type="default" {...props} />;
}

export function Caption(props: ThemedTextProps) {
  return <ThemedText type="small" {...props} />;
}

export function CodeText(props: ThemedTextProps) {
  return <ThemedText type="code" {...props} />;
}

const styles = StyleSheet.create({
  small: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  smallBold: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    lineHeight: 52,
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 44,
    fontWeight: '600',
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
  },
  linkPrimary: {
    lineHeight: 30,
    fontSize: 14,
    color: '#3c87f7',
  },
  code: {
    fontFamily: Fonts.mono,
    fontWeight: Platform.select({ android: '700' }) ?? '500',
    fontSize: 12,
  },
});
