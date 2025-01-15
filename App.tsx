import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { store } from './src/store';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './src/store';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { logout } from './src/store/slices/authSlice';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import StudentListScreen from './src/screens/StudentListScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import GradesScreen from './src/screens/GradesScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import LocationScreen from './src/screens/LocationScreen';
import NotificationSettingsScreen from './src/screens/NotificationSettingsScreen';
import NewsDetailScreen from './src/screens/NewsDetailScreen';
import ErrorListScreen from './src/screens/ErrorListScreen';
import { addSampleErrorLogs } from './src/utils/errorLogger';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DrawerContent(props) {
  const dispatch = useDispatch();
  const navigation = props.navigation;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )}
          label="Ana Sayfa"
          onPress={() => navigation.navigate('MainTabs', { screen: 'AnaSayfa' })}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="account-multiple" color={color} size={size} />
          )}
          label="Öğrenci Seçimi"
          onPress={() => navigation.navigate('MainTabs', { screen: 'OgrenciListesi' })}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          )}
          label="Ders Programı"
          onPress={() => navigation.navigate('MainTabs', { screen: 'DersProgrami' })}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={size} />
          )}
          label="Konum Takibi"
          onPress={() => navigation.navigate('MainTabs', { screen: 'KonumTakibi' })}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="bell-outline" color={color} size={size} />
          )}
          label="Bildirim Ayarları"
          onPress={() => navigation.navigate('MainTabs', { screen: 'BildirimAyarlari' })}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="alert" color={color} size={size} />
          )}
          label="Hata Listesi"
          onPress={() => navigation.navigate('MainTabs', { screen: 'HataListesi' })}
        />
      </DrawerContentScrollView>
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="logout" color={color} size={size} />
        )}
        label="Çıkış Yap"
        onPress={handleLogout}
        style={styles.logoutButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    marginBottom: 16,
  },
});

function AppContent() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    addSampleErrorLogs(); // Örnek hata verilerini ekle
  }, []);

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen 
          name="MainTabs" 
          component={TabNavigator}
          options={{
            headerTitle: 'Veli Takip Sistemi',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <AppContent />
      </PaperProvider>
    </ReduxProvider>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'AnaSayfa':
              iconName = 'home';
              break;
            case 'Dersler':
              iconName = 'book';
              break;
            case 'Mesajlar':
              iconName = 'message';
              break;
            case 'Bildirimler':
              iconName = 'bell';
              break;
            default:
              iconName = 'circle';
          }

          return <MaterialCommunityIcons name={iconName} size={28} color={color} />;
        },
        tabBarStyle: {
          height: 65,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
        },
        tabBarItemStyle: {
          minWidth: '25%',
          padding: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
        tabBarActiveTintColor: '#1976D2',
        tabBarInactiveTintColor: '#757575',
        headerShown: true,
      })}
    >
      <Tab.Screen 
        name="AnaSayfa" 
        component={HomeScreen}
        options={{ title: 'Ana Sayfa' }}
      />
      <Tab.Screen 
        name="Dersler" 
        component={GradesScreen}
        options={{ title: 'Dersler' }}
      />
      <Tab.Screen 
        name="Mesajlar" 
        component={MessagesScreen}
      />
      <Tab.Screen 
        name="Bildirimler" 
        component={NotificationsScreen}
      />
      <Tab.Screen 
        name="HaberDetay" 
        component={NewsDetailScreen}
        options={{ 
          title: 'Detay',
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen 
        name="BildirimAyarlari" 
        component={NotificationSettingsScreen}
        options={{ 
          title: 'Bildirim Ayarları',
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen 
        name="OgrenciListesi" 
        component={StudentListScreen}
        options={{ 
          title: 'Öğrenci Seçimi',
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen 
        name="DersProgrami" 
        component={ScheduleScreen}
        options={{ 
          title: 'Ders Programı',
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen 
        name="KonumTakibi" 
        component={LocationScreen}
        options={{ 
          title: 'Konum Takibi',
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen 
        name="HataListesi" 
        component={ErrorListScreen}
        options={{ 
          title: 'Hata Listesi',
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
} 