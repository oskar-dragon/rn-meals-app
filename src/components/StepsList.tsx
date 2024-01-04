import { View, Text, FlatList } from 'react-native';
import { cn, cnBase } from 'tailwind-variants';
import { flatMergeArrays } from 'tailwind-variants/dist/utils';

export function StepsList<T extends Array<string>>({
  data,
  title,
  className,
}: {
  data: T;
  title: string;
  className?: string;
}) {
  return (
    <View className={cnBase('items-center', className)}>
      <Text className="text-xl font-bold text-orange-600/80">{title}</Text>
      <View className="gap-2">
        {data.map((datum) => (
          <View className="rounded-md bg-orange-200" key={datum}>
            <Text className="text-center">{datum}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
