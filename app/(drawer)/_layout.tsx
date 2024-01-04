import { colours } from '@/styles/colours';
// import '@/styles/global.css';
import { StatusBar } from 'expo-status-bar';
import { Drawer } from 'expo-router/drawer';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Drawer
        screenOptions={{
          drawerActiveBackgroundColor: colours.orange[900],
          drawerLabelStyle: {
            color: colours.orange[200],
          },
          headerTitleStyle: {
            color: colours.white,
          },
          drawerContentStyle: {
            backgroundColor: colours.amber[950],
          },
          headerStyle: {
            backgroundColor: colours.yellow[950],
          },
          headerTintColor: colours.white,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerIcon: ({ size }) => (
              <Ionicons name="menu" color={colours.orange[200]} size={size} />
            ),
            title: 'All Categories',
          }}
        />
        <Drawer.Screen
          name="favourite"
          options={{
            drawerIcon: ({ size }) => (
              <Ionicons name="star" color={colours.orange[200]} size={size} />
            ),
            title: 'Favourite',
          }}
        />
      </Drawer>
    </>
  );
}
