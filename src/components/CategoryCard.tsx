import { PropsWithChildren } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';
import { tv } from 'tailwind-variants';
import { TWPropsWithChildren } from './types';

const styles = tv({
  slots: {
    base: 'h-[150] w-[150] items-center justify-center rounded-lg bg-red-700 shadow',
    text: 'text-1xl font-bold',
  },
});

export function CategoryCard({
  children,
  className,
  ...restProps
}: TWPropsWithChildren<PressableProps>) {
  const { base, text } = styles();

  return (
    <Pressable {...restProps}>
      <View className={base({ class: className })}>
        <Text className={text()}>{children}</Text>
      </View>
    </Pressable>
  );
}
