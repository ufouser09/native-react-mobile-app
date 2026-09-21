import { cva, type VariantProps } from 'class-variance-authority';
import { Platform } from 'react-native';
import { cn } from './utils';

export const buttonVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-2 rounded-xl shadow-none',
    Platform.select({
      web: "focus-visible:border-ring focus-visible:ring-ring/50 whitespace-nowrap outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none",
    })
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-primary active:bg-primary/90 shadow-sm shadow-black/5',
          Platform.select({ web: 'hover:bg-primary/90' })
        ),
        destructive: cn(
          'bg-destructive active:bg-destructive/90 shadow-sm shadow-black/5',
          Platform.select({ web: 'hover:bg-destructive/90' })
        ),
        outline: cn(
          'border-border bg-background active:bg-accent border shadow-sm shadow-black/5',
          Platform.select({ web: 'hover:bg-accent' })
        ),
        secondary: cn(
          'bg-secondary active:bg-secondary/80 shadow-sm shadow-black/5',
          Platform.select({ web: 'hover:bg-secondary/80' })
        ),
        ghost: cn(
          'active:bg-accent',
          Platform.select({ web: 'hover:bg-accent' })
        ),
        link: '',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        sm: 'h-9 px-3',
        lg: 'h-12 px-6',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const buttonTextVariants = cva(
  cn(
    'text-foreground text-sm font-semibold',
    Platform.select({ web: 'pointer-events-none transition-colors' })
  ),
  {
    variants: {
      variant: {
        default: 'text-primary-foreground',
        destructive: 'text-white',
        outline: 'text-foreground',
        secondary: 'text-secondary-foreground',
        ghost: 'text-foreground',
        link: 'text-primary underline',
      },
      size: {
        default: '',
        sm: 'text-xs',
        lg: 'text-base',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
