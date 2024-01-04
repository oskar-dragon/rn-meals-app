import { Pressable, PressableProps, Text, View } from 'react-native';
import { tv } from 'tailwind-variants';
import { TWPropsWithChildren } from './types';

const styles = tv({
  slots: {
    base: 'aspect-square w-5/12 android:overflow-hidden items-center justify-center rounded-lg shadow active:opacity-70',
    text: 'text-2xl font-bold',
  },
});

export function CategoryCard({
  children,
  className,
  ...restProps
}: TWPropsWithChildren<PressableProps>) {
  const { base, text } = styles();

  return (
    <Pressable {...restProps} className={base({ class: className })}>
      <View className="overflow-hidden">
        <Text className={text()}>{children}</Text>
      </View>
    </Pressable>
  );
}
