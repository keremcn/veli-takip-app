import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './src/store';

import HomeScreen from './src/screens/HomeScreen';
import GradesScreen from './src/screens/GradesScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dersler & Notlar" component={GradesScreen} />
      <Tab.Screen name="Mesajlar" component={MessagesScreen} />
      <Tab.Screen name="Bildirimler" component={NotificationsScreen} />
      <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Ana Menü" component={TabNavigator} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}