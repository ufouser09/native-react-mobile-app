import * as React from 'react';
import { Platform, Pressable, Text as RNText, View } from 'react-native';
import Animated, {
  FadeOutUp,
  LayoutAnimationConfig,
  LinearTransition,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import * as AccordionPrimitive from '@rn-primitives/accordion';
import * as Slot from '@rn-primitives/slot';
import type { SlottableTextProps, TextRef } from '@rn-primitives/types';
import { ChevronDown, type LucideIcon } from 'lucide-react-native';
import { cssInterop } from 'nativewind';
import { cn } from '../../lib/utils';

function iconWithClassName(icon: LucideIcon) {
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

iconWithClassName(ChevronDown);

export const TextClassContext = React.createContext<string | undefined>(undefined);

export function AccordionText({
  className,
  asChild = false,
  ...props
}: SlottableTextProps & { ref?: React.Ref<TextRef> }) {
  const textClass = React.useContext(TextClassContext);
  const Component = asChild ? Slot.Text : RNText;
  return (
    <Component
      className={cn('text-base text-foreground web:select-text', textClass, className)}
      {...props}
    />
  );
}

export type AccordionProps = Omit<React.ComponentProps<typeof AccordionPrimitive.Root>, 'asChild'>;
export type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>;
export type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  children?: React.ReactNode;
};
export type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content>;

function Accordion({
  children,
  ...props
}: AccordionProps) {
  return (
    <LayoutAnimationConfig skipEntering>
      <AccordionPrimitive.Root
        {...(props as AccordionPrimitive.RootProps)}
        asChild={Platform.OS !== 'web'}>
        <Animated.View layout={LinearTransition.duration(200)}>{children}</Animated.View>
      </AccordionPrimitive.Root>
    </LayoutAnimationConfig>
  );
}

function AccordionItem({
  children,
  className,
  value,
  ...props
}: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        'border-border border-b',
        Platform.select({ web: 'last:border-b-0' }),
        className
      )}
      value={value}
      asChild={Platform.OS !== 'web'}
      {...props}>
      <Animated.View
        className="native:overflow-hidden"
        layout={Platform.select({ native: LinearTransition.duration(200) })}>
        {children}
      </Animated.View>
    </AccordionPrimitive.Item>
  );
}

const Trigger = Platform.OS === 'web' ? View : Pressable;

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  const { isExpanded } = AccordionPrimitive.useItemContext();

  const progress = useDerivedValue(
    () => (isExpanded ? withTiming(1, { duration: 250 }) : withTiming(0, { duration: 200 })),
    [isExpanded]
  );
  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 180}deg` }],
  }));

  return (
    <TextClassContext.Provider
      value={cn('text-sm native:text-base font-medium', isExpanded && 'text-foreground')}>
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className={cn(
            'flex flex-row items-center justify-between py-4 group',
            className
          )}
          asChild
          {...props}>
          <Trigger>
            <>{children}</>
            <Animated.View style={chevronStyle}>
              <ChevronDown
                size={18}
                className="text-muted-foreground shrink-0 transition-transform duration-200"
              />
            </Animated.View>
          </Trigger>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    </TextClassContext.Provider>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  const { isExpanded } = AccordionPrimitive.useItemContext();

  return (
    <TextClassContext.Provider value="text-sm native:text-base text-muted-foreground">
      <AccordionPrimitive.Content
        className={cn('overflow-hidden text-sm transition-all', className)}
        {...props}>
        <InnerContent isExpanded={isExpanded}>{children}</InnerContent>
      </AccordionPrimitive.Content>
    </TextClassContext.Provider>
  );
}

function InnerContent({
  children,
  isExpanded,
}: {
  children: React.ReactNode;
  isExpanded: boolean;
}) {
  if (Platform.OS === 'web') {
    return <View className="pb-4 pt-0">{children}</View>;
  }
  return (
    <Animated.View
      entering={LinearTransition.duration(200)}
      exiting={FadeOutUp.duration(150)}
      className="pb-4 pt-0">
      {children}
    </Animated.View>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
