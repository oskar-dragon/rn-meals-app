import { CategoryCard } from '@/components/CategoryCard';
import { CATEGORIES } from '@/constants/dummyData';
import { FlatList, Text, View } from 'react-native';
import { Screen } from '@/components/Screen';

export default function RootPage() {
  return (
    <Screen className="flex-1">
      <FlatList
        className="flex w-full"
        columnWrapperClassName="justify-between my-4"
        numColumns={2}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryCard className={item.color}>{item.title}</CategoryCard>
        )}
        // columnWrapperStyle={{ marginTop: 4 }}
        ItemSeparatorComponent={() => <View className="w-[20]" />}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
}
