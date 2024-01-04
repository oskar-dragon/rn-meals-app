import { CategoryCard } from '@/components/CategoryCard';
import { CATEGORIES } from '@/constants/dummyData';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Screen } from '@/components/Screen';
import { useRouter } from 'expo-router';

export default function RootPage() {
  const router = useRouter();
  function redirectToMealsHandler(id: string) {
    router.push(`/meals/${id}`);
  }
  return (
    <Screen className="flex-1">
      <FlatList
        className="flex w-full"
        columnWrapperClassName="justify-between my-4 mx-4"
        numColumns={2}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryCard
            className={item.color}
            onPress={() => redirectToMealsHandler(item.id)}
          >
            {item.title}
          </CategoryCard>
        )}
        // columnWrapperStyle={{ marginTop: 4 }}
        ItemSeparatorComponent={() => <View className="w-[20]" />}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
}
