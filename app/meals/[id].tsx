import { MealsCard } from '@/components/MealsCard';
import { Screen } from '@/components/Screen';
import { CATEGORIES, MEALS } from '@/constants/dummyData';
import { useNavigation, useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { useLayoutEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function MealsScreen() {
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(params.id));
  const categoryTitle = CATEGORIES.find(
    (category) => category.id === params.id,
  )!;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle.title,
    });
  }, [navigation]);

  function redirectHandler(id: string) {
    router.push(`/meals/details/${id}`);
  }

  return (
    <Screen>
      <FlatList
        data={meals}
        contentContainerClassName="mt-4 mx-4 mb-20"
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealsCard meal={item} onPress={() => redirectHandler(item.id)} />
        )}
        ItemSeparatorComponent={() => <View className="h-[20]" />}
        ListFooterComponent={() => <View className="h-[40]" />}
      />
    </Screen>
  );
}
