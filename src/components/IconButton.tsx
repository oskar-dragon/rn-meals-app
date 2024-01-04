import { Pressable, PressableProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { cnBase } from 'tailwind-variants';

type IconProps = ComponentProps<typeof Ionicons>;
export function IconButton({
  className,
  color,
  iconName,
  size,
  ...restProps
}: PressableProps & {
  iconName: IconProps['name'];
  color?: IconProps['color'];
  size?: IconProps['size'];
}) {
  return (
    <Pressable
      {...restProps}
      className={cnBase(className, 'active:opacity-50')}
    >
      <Ionicons name={iconName} color={color} size={size} />
    </Pressable>
  );
}
