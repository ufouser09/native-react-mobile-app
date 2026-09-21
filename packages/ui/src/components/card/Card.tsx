import * as React from 'react';
import { View, Text as RNText, type ViewProps, type TextProps } from 'react-native';
import { cn } from '../../lib/utils';

export type CardProps = ViewProps & {
  className?: string;
};

function Card({ className, ...props }: CardProps) {
  return (
    <View
      className={cn(
        'bg-card border-border flex flex-col gap-6 rounded-2xl border py-6 shadow-sm shadow-black/5',
        className
      )}
      {...props}
    />
  );
}

export type CardHeaderProps = ViewProps & {
  className?: string;
};

function CardHeader({ className, ...props }: CardHeaderProps) {
  return <View className={cn('flex flex-col gap-1.5 px-6', className)} {...props} />;
}

export type CardTitleProps = TextProps & {
  className?: string;
};

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <RNText
      role="heading"
      aria-level={3}
      className={cn('text-card-foreground text-xl font-bold leading-tight tracking-tight', className)}
      {...props}
    />
  );
}

export type CardDescriptionProps = TextProps & {
  className?: string;
};

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <RNText
      className={cn('text-muted-foreground text-sm leading-relaxed', className)}
      {...props}
    />
  );
}

export type CardContentProps = ViewProps & {
  className?: string;
};

function CardContent({ className, ...props }: CardContentProps) {
  return <View className={cn('px-6', className)} {...props} />;
}

export type CardFooterProps = ViewProps & {
  className?: string;
};

function CardFooter({ className, ...props }: CardFooterProps) {
  return <View className={cn('flex flex-row items-center px-6 gap-2', className)} {...props} />;
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
