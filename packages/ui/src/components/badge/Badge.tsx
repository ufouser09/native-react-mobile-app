import * as React from 'react';
import { Platform, View, Text as RNText } from 'react-native';
import { Slot } from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

export const badgeVariants = cva(
  cn(
    'border-border group shrink-0 flex-row items-center justify-center gap-1 overflow-hidden rounded-full border px-2.5 py-0.5',
    Platform.select({
      web: 'w-fit whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    })
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-primary border-transparent',
          Platform.select({ web: 'hover:bg-primary/90' })
        ),
        secondary: cn(
          'bg-secondary border-transparent',
          Platform.select({ web: 'hover:bg-secondary/80' })
        ),
        destructive: cn(
          'bg-destructive border-transparent',
          Platform.select({ web: 'hover:bg-destructive/90' })
        ),
        outline: Platform.select({ web: 'hover:bg-accent hover:text-accent-foreground' }),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const badgeTextVariants = cva('text-xs font-semibold', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      destructive: 'text-white',
      outline: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type BadgeProps = React.ComponentProps<typeof View> & {
  asChild?: boolean;
  label?: string;
} & VariantProps<typeof badgeVariants>;

function Badge({ className, variant = 'default', asChild, children, label, ...props }: BadgeProps) {
  const Component = asChild ? Slot : View;
  const content = label ?? children;

  return (
    <Component className={cn(badgeVariants({ variant }), className)} {...props}>
      {typeof content === 'string' ? (
        <RNText className={cn(badgeTextVariants({ variant }))}>{content}</RNText>
      ) : (
        content
      )}
    </Component>
  );
}

export { Badge };
