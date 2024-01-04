import Meal from '@/constants/models/meal';
import { Image, Pressable, PressableProps, Text, View } from 'react-native';

type MealsCardProps = {
  meal: Pick<
    Meal,
    'imageUrl' | 'title' | 'duration' | 'complexity' | 'affordability'
  >;
} & PressableProps;

export function MealsCard({ meal, ...restProps }: MealsCardProps) {
  return (
    <Pressable
      className="android:overflow-hidden ios:overflow-visible w-full rounded-lg bg-white shadow active:opacity-70"
      {...restProps}
    >
      <View className="overflow-hidden rounded-lg">
        <Image source={{ uri: meal.imageUrl }} className="h-[200]" />
        <View className="flex flex-col items-center justify-center gap-2 py-2">
          <Text className="text-xl font-bold">{meal.title}</Text>
          <View className="flex flex-row gap-4 uppercase">
            <Text className="text-sm">{meal.duration}m</Text>
            <Text className="text-sm uppercase">{meal.complexity}</Text>
            <Text className="text-sm uppercase">{meal.affordability}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
