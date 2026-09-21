import * as React from 'react';
import { View, Text as RNText, type ViewProps, type TextProps } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import { cn } from '../../lib/utils';
import { Icon } from '../../lib/icon';

export const AlertContext = React.createContext<{ variant?: 'default' | 'destructive' }>({});

export interface AlertProps extends ViewProps {
  icon?: LucideIcon;
  variant?: 'default' | 'destructive';
  iconClassName?: string;
  className?: string;
}

export function Alert({
  className,
  variant = 'default',
  children,
  icon: IconComponent,
  iconClassName,
  ...props
}: AlertProps) {
  return (
    <AlertContext.Provider value={{ variant }}>
      <View
        role="alert"
        className={cn(
          'relative w-full rounded-xl border p-4 shadow-sm',
          variant === 'default' && 'bg-card border-border text-card-foreground',
          variant === 'destructive' && 'bg-destructive/10 border-destructive/30 text-destructive',
          className
        )}
        {...props}
      >
        {IconComponent && (
          <View className="absolute left-4 top-4">
            <Icon
              as={IconComponent}
              className={cn(
                'size-5',
                variant === 'default' && 'text-foreground',
                variant === 'destructive' && 'text-destructive',
                iconClassName
              )}
            />
          </View>
        )}
        <View className={cn(IconComponent ? 'pl-7' : '')}>
          {children}
        </View>
      </View>
    </AlertContext.Provider>
  );
}

export interface AlertTitleProps extends TextProps {
  className?: string;
}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  const { variant } = React.useContext(AlertContext);
  return (
    <RNText
      className={cn(
        'mb-1 font-semibold text-base leading-tight tracking-tight',
        variant === 'destructive' ? 'text-destructive' : 'text-foreground',
        className
      )}
      {...props}
    />
  );
}

export interface AlertDescriptionProps extends TextProps {
  className?: string;
}

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  const { variant } = React.useContext(AlertContext);
  return (
    <RNText
      className={cn(
        'text-sm leading-relaxed',
        variant === 'destructive' ? 'text-destructive/90' : 'text-muted-foreground',
        className
      )}
      {...props}
    />
  );
}
