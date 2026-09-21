import * as React from 'react';
import { Platform, Pressable, View, Text as RNText, type ViewProps, type TextProps } from 'react-native';
import Animated, { FadeIn, FadeOut, ReduceMotion } from 'react-native-reanimated';
import { FullWindowOverlay as RNFullWindowOverlay } from 'react-native-screens';
import * as AlertDialogPrimitive from '@rn-primitives/alert-dialog';
import { cn } from '../../lib/utils';
import { buttonVariants, buttonTextVariants } from '../../lib/button-variants';

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

const FullWindowOverlay = Platform.OS === 'ios' ? RNFullWindowOverlay : React.Fragment;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function AlertDialogOverlay({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof AlertDialogPrimitive.Overlay>, 'asChild'> & {
  children?: React.ReactNode;
}) {
  return (
    <FullWindowOverlay>
      <AlertDialogPrimitive.Overlay
        className={cn(
          'absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/60 p-4',
          Platform.select({
            web: 'animate-in fade-in-0 fixed',
          }),
          className
        )}
        {...props}
        asChild={Platform.OS !== 'web'}>
        {Platform.OS === 'web' ? (
          <View className="flex items-center justify-center w-full h-full">{children}</View>
        ) : (
          <AnimatedPressable
            entering={FadeIn.duration(200).delay(50).reduceMotion(ReduceMotion.System)}
            exiting={FadeOut.duration(150).reduceMotion(ReduceMotion.System)}>
            <>{children}</>
          </AnimatedPressable>
        )}
      </AlertDialogPrimitive.Overlay>
    </FullWindowOverlay>
  );
}

function AlertDialogContent({
  className,
  portalHost,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content> & {
  portalHost?: string;
}) {
  return (
    <AlertDialogPortal hostName={portalHost}>
      <AlertDialogOverlay>
        <AlertDialogPrimitive.Content
          className={cn(
            'bg-card border-border z-50 flex w-full max-w-[calc(100%-2rem)] flex-col gap-4 rounded-2xl border p-6 shadow-2xl shadow-black/20 sm:max-w-lg',
            Platform.select({
              web: 'animate-in fade-in-0 zoom-in-95 duration-200',
            }),
            className
          )}
          {...props}
        />
      </AlertDialogOverlay>
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({ className, ...props }: ViewProps) {
  return <View className={cn('flex flex-col gap-2 text-center sm:text-left', className)} {...props} />;
}

function AlertDialogFooter({ className, ...props }: ViewProps) {
  return (
    <View
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end mt-4', className)}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      className={cn('text-foreground text-lg font-bold tracking-tight', className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      className={cn('text-muted-foreground text-sm leading-relaxed', className)}
      {...props}
    />
  );
}

function AlertDialogAction({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> & { children?: React.ReactNode }) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants({ variant: 'default' }), className)}
      {...props}>
      {typeof children === 'string' ? (
        <RNText className={buttonTextVariants({ variant: 'default' })}>{children}</RNText>
      ) : (
        children
      )}
    </AlertDialogPrimitive.Action>
  );
}

function AlertDialogCancel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel> & { children?: React.ReactNode }) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: 'outline' }), className)}
      {...props}>
      {typeof children === 'string' ? (
        <RNText className={buttonTextVariants({ variant: 'outline' })}>{children}</RNText>
      ) : (
        children
      )}
    </AlertDialogPrimitive.Cancel>
  );
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
