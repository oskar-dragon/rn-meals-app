import { IconButton } from '@/components/IconButton';
import { Screen } from '@/components/Screen';
import { StepsList } from '@/components/StepsList';
import { MEALS } from '@/constants/dummyData';
import { colours } from '@/styles/colours';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useLayoutEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default function MealScreen() {
  const navigaton = useNavigation();
  const router = useRouter();
  const params = useLocalSearchParams<{ id: string }>();
  const meal = MEALS.find((meal) => meal.id === params.id)!;

  function headerButtonPressHandler() {
    console.log('Favourited');
  }
  useLayoutEffect(() => {
    navigaton.setOptions({
      headerRight: () => (
        <IconButton
          iconName="star"
          onPress={headerButtonPressHandler}
          color={colours.white}
          size={20}
        />
      ),
    });
  }, [navigaton]);

  return (
    <Screen>
      <ScrollView>
        <View className="pb-8">
          <Image source={{ uri: meal.imageUrl }} className="h-48" />
          <View className="items-center gap-4">
            <Text className="text-2xl font-bold text-white">{meal.title}</Text>
            <View className="flex flex-row gap-4 uppercase">
              <Text className="text-sm text-white">{meal.duration}m</Text>
              <Text className="text-sm uppercase text-white">
                {meal.complexity}
              </Text>
              <Text className="text-sm uppercase text-white">
                {meal.affordability}
              </Text>
            </View>
          </View>

          <View className="items-center">
            <StepsList
              data={meal.steps}
              title="Ingredients"
              className="mt-4 w-4/6"
            />
            <StepsList data={meal.steps} title="Steps" className="mt-6 w-4/6" />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
