import { cn } from '../../lib/utils';
import { TextClassContext } from '../../lib/text-context';
import { Slot } from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Platform, Text as RNText, type Role } from 'react-native';

const textVariants = cva(
  cn(
    'text-foreground text-base',
    Platform.select({
      web: 'select-text',
    })
  ),
  {
    variants: {
      variant: {
        default: '',
        h1: cn(
          'text-[40px] leading-[48px] font-bold text-ui-text-1',
          Platform.select({ web: 'scroll-m-20 text-balance' })
        ),
        h2: cn(
          'border-border border-b pb-2 text-[30px] leading-[36px] font-bold text-ui-text-1',
          Platform.select({ web: 'scroll-m-20 first:mt-0' })
        ),
        h3: cn('text-[22px] leading-[28px] font-semibold text-ui-text-2', Platform.select({ web: 'scroll-m-20' })),
        h4: cn('text-[20px] leading-[26px] font-semibold text-ui-text-2', Platform.select({ web: 'scroll-m-20' })),
        h5: cn('text-[18px] leading-[24px] font-semibold text-ui-text-2', Platform.select({ web: 'scroll-m-20' })),
        h6: cn('text-[16px] leading-[22px] font-semibold text-ui-text-2', Platform.select({ web: 'scroll-m-20' })),
        body1: 'text-[20px] leading-[28px] font-normal text-ui-text-2',
        body2: 'text-[18px] leading-[26px] font-normal text-ui-text-3',
        body3: 'text-[16px] leading-[24px] font-normal text-ui-text-4',
        body4: 'text-[14px] leading-[20px] font-normal text-ui-text-5',
        body5: 'text-[12px] leading-[16px] font-normal text-ui-text-6',
        body6: 'text-[11px] leading-[15px] font-normal text-ui-text-6',
        caption: 'text-[11px] leading-[15px] font-normal text-ui-text-6',
        p: 'mt-3 leading-7 sm:mt-6',
        blockquote: 'mt-4 border-l-2 pl-3 italic sm:mt-6 sm:pl-6',
        code: cn(
          'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'
        ),
        lead: 'text-muted-foreground text-xl',
        large: 'text-lg font-semibold',
        small: 'text-sm font-medium leading-none',
        muted: 'text-muted-foreground text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type TextVariantProps = VariantProps<typeof textVariants>;

type TextVariant = NonNullable<TextVariantProps['variant']>;

const ROLE: Partial<Record<TextVariant, Role>> = {
  h1: 'heading',
  h2: 'heading',
  h3: 'heading',
  h4: 'heading',
  h5: 'heading',
  h6: 'heading',
  blockquote: Platform.select({ web: 'blockquote' as Role }),
  code: Platform.select({ web: 'code' as Role }),
};

const ARIA_LEVEL: Partial<Record<TextVariant, string>> = {
  h1: '1',
  h2: '2',
  h3: '3',
  h4: '4',
  h5: '5',
  h6: '6',
};

function Text({
  className,
  asChild = false,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof RNText> &
  React.RefAttributes<typeof RNText> &
  TextVariantProps & {
    asChild?: boolean;
  }) {
  const textClass = React.useContext(TextClassContext);
  const Component = asChild ? Slot : RNText;
  return (
    <Component
      className={cn(textVariants({ variant }), textClass, className)}
      role={variant ? ROLE[variant] : undefined}
      aria-level={variant ? ARIA_LEVEL[variant] : undefined}
      {...props}
    />
  );
}

export { Text, TextClassContext, textVariants };
