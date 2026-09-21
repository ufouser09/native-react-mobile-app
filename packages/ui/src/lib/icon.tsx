import type { LucideIcon } from 'lucide-react-native';
import { cssInterop } from 'nativewind';
import * as React from 'react';

export function iconWithClassName(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}

export interface IconProps {
  as: LucideIcon;
  className?: string;
  size?: number;
  color?: string;
}

export function Icon({
  as: Component,
  className,
  size = 16,
  ...props
}: IconProps) {
  iconWithClassName(Component);
  return <Component className={className} size={size} {...props} />;
}
