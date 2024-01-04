import { View } from 'react-native';
import { TWPropsWithChildren } from './types';
import { tv } from 'tailwind-variants';

const styles = tv({
  base: 'flex-1 bg-amber-950/85',
});

export function Screen({ children, className }: TWPropsWithChildren) {
  return <View className={styles({ class: className })}>{children}</View>;
}
