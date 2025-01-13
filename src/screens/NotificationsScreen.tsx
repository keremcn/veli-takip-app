import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Text, Card, IconButton, Badge } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DUMMY_NOTIFICATIONS = [
  {
    id: '1',
    type: 'grade',
    title: 'Yeni Not Girildi',
    message: 'Matematik sınavı notu girildi: 85',
    date: '2024-03-15 14:30',
    isRead: false,
    icon: 'book',
  },
  {
    id: '2',
    type: 'attendance',
    title: 'Devamsızlık Bildirimi',
    message: 'Bugün okula gelmedi',
    date: '2024-03-14 09:00',
    isRead: true,
    icon: 'calendar-alert',
  },
  {
    id: '3',
    type: 'homework',
    title: 'Yeni Ödev',
    message: 'Türkçe dersi için kompozisyon ödevi verildi',
    date: '2024-03-13 15:45',
    isRead: false,
    icon: 'pencil',
  },
  {
    id: '4',
    type: 'announcement',
    title: 'Okul Duyurusu',
    message: 'Yarın öğretmenler kurulu toplantısı nedeniyle ders yapılmayacaktır',
    date: '2024-03-12 11:30',
    isRead: true,
    icon: 'bullhorn',
  },
];

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      {DUMMY_NOTIFICATIONS.map((notification) => (
        <Card 
          key={notification.id} 
          style={[
            styles.notificationCard,
            !notification.isRead && styles.unreadNotification
          ]}
        >
          <Card.Title
            title={notification.title}
            subtitle={notification.date}
            left={(props) => (
              <View>
                <MaterialCommunityIcons 
                  name={notification.icon} 
                  size={24} 
                  color="#1976D2"
                />
                {!notification.isRead && (
                  <Badge style={styles.badge} size={8} />
                )}
              </View>
            )}
          />
          <Card.Content>
            <Text style={styles.message}>{notification.message}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 8,
  },
  notificationCard: {
    marginBottom: 8,
    elevation: 2,
  },
  unreadNotification: {
    backgroundColor: '#e3f2fd',
  },
  message: {
    fontSize: 14,
    marginTop: 4,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#f44336',
  },
}); 