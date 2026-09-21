import * as React from 'react';
import * as AvatarPrimitive from '@rn-primitives/avatar';
import { cn } from '../../lib/utils';

export type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
export type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image>;
export type AvatarFallbackProps = React.ComponentProps<typeof AvatarPrimitive.Fallback>;

function Avatar({
  className,
  ...props
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn('relative flex size-10 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: AvatarImageProps) {
  return <AvatarPrimitive.Image className={cn('aspect-square size-full', className)} {...props} />;
}

function AvatarFallback({
  className,
  ...props
}: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        'bg-muted flex size-full flex-row items-center justify-center rounded-full',
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarFallback, AvatarImage };
