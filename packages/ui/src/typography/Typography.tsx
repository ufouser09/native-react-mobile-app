import * as React from 'react';
import { Text as RNText, type TextProps as RNTextProps, Platform } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';
import { TextClassContext } from '../lib/text-context';

export const typographyVariants = cva(
  'font-sans',
  {
    variants: {
      variant: {
        h1: 'text-[40px] leading-[48px] font-bold text-ui-text-1',
        h2: 'text-[30px] leading-[36px] font-bold text-ui-text-1',
        h3: 'text-[22px] leading-[28px] font-semibold text-ui-text-2',
        h4: 'text-[20px] leading-[26px] font-semibold text-ui-text-2',
        h5: 'text-[18px] leading-[24px] font-semibold text-ui-text-2',
        h6: 'text-[16px] leading-[22px] font-semibold text-ui-text-2',
        body1: 'text-[20px] leading-[28px] font-normal text-ui-text-2',
        body2: 'text-[18px] leading-[26px] font-normal text-ui-text-3',
        body3: 'text-[16px] leading-[24px] font-normal text-ui-text-4',
        body4: 'text-[14px] leading-[20px] font-normal text-ui-text-5',
        body5: 'text-[12px] leading-[16px] font-normal text-ui-text-6',
        body6: 'text-[11px] leading-[15px] font-normal text-ui-text-6',
        caption: 'text-[11px] leading-[15px] font-normal text-ui-text-6',
      },
      color: {
        primary: 'text-ui-text-1',
        secondary: 'text-ui-text-4',
        neutral: 'text-ui-text-4',
        muted: 'text-ui-text-6',
        blue: 'text-ui-blue-400',
        green: 'text-ui-green-400',
        yellow: 'text-ui-yellow-400',
        red: 'text-ui-red-400',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
      },
      gutterBottom: {
        true: 'mb-2',
        false: '',
      },
      noWrap: {
        true: Platform.select({ web: 'truncate whitespace-nowrap overflow-hidden' }),
        false: '',
      },
    },
    defaultVariants: {
      variant: 'body3',
    },
  }
);

export type TypographyVariantProps = VariantProps<typeof typographyVariants>;

export interface TypographyProps
  extends Omit<RNTextProps, 'children'>,
    TypographyVariantProps {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const Typography = React.forwardRef<RNText, TypographyProps>(
  (
    {
      className,
      variant = 'body3',
      color,
      align,
      gutterBottom,
      noWrap,
      numberOfLines,
      children,
      ...props
    },
    ref
  ) => {
    const textClass = React.useContext(TextClassContext);

    return (
      <RNText
        ref={ref}
        numberOfLines={noWrap ? 1 : numberOfLines}
        className={cn(
          typographyVariants({ variant, color, align, gutterBottom, noWrap }),
          textClass,
          className
        )}
        {...props}>
        {children}
      </RNText>
    );
  }
);

Typography.displayName = 'Typography';

/* --- Alias Helper Components (MUI / Base UI Pattern) --- */
export const H1 = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="h1" {...props} />
));
H1.displayName = 'H1';

export const H2 = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="h2" {...props} />
));
H2.displayName = 'H2';

export const H3 = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="h3" {...props} />
));
H3.displayName = 'H3';

export const H4 = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="h4" {...props} />
));
H4.displayName = 'H4';

export const H5 = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="h5" {...props} />
));
H5.displayName = 'H5';

export const H6 = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="h6" {...props} />
));
H6.displayName = 'H6';

export const Body1 = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="body1" {...props} />
));
Body1.displayName = 'Body1';

export const Body2 = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="body2" {...props} />
));
Body2.displayName = 'Body2';

export const Body3 = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="body3" {...props} />
));
Body3.displayName = 'Body3';

export const Body4 = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="body4" {...props} />
));
Body4.displayName = 'Body4';

export const Body5 = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="body5" {...props} />
));
Body5.displayName = 'Body5';

export const Body6 = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="body6" {...props} />
));
Body6.displayName = 'Body6';

export const Caption = React.forwardRef<RNText, Omit<TypographyProps, 'variant'>>((props, ref) => (
  <Typography ref={ref} variant="caption" {...props} />
));
Caption.displayName = 'Caption';
