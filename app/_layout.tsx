import { colours } from '@/styles/colours';
import '@/styles/global.css';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Drawer } from 'expo-router/drawer';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <>
      <Stack
        screenOptions={{
          headerTitleStyle: {
            color: colours.white,
          },
          headerStyle: {
            backgroundColor: colours.yellow[950],
          },
          headerBackTitle: 'Back',
          headerTintColor: colours.white,
        }}
      >
        <Stack.Screen
          name="(drawer)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="meals/[id]" />
        <Stack.Screen
          name="meals/details/[id]"
          options={{
            headerTitle: 'Meal Details',
          }}
        />
      </Stack>
    </>
  );
}
