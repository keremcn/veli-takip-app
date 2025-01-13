import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Text, Card, Avatar, FAB } from 'react-native-paper';

const DUMMY_MESSAGES = [
  {
    id: '1',
    sender: 'Ayşe Öğretmen',
    subject: 'Matematik Ödevi Hakkında',
    message: 'Mehmet\'in ödevlerindeki başarısı çok iyi. Böyle devam etmesini dilerim.',
    date: '2024-03-15 14:30',
    isRead: true,
    avatar: 'https://picsum.photos/200',
  },
  {
    id: '2',
    sender: 'Okul Müdürlüğü',
    subject: 'Veli Toplantısı',
    message: '20 Mart 2024 tarihinde veli toplantısı yapılacaktır. Katılımınızı rica ederiz.',
    date: '2024-03-14 09:15',
    isRead: false,
    avatar: 'https://picsum.photos/201',
  },
  {
    id: '3',
    sender: 'Türkçe Öğretmeni',
    subject: 'Kitap Okuma Projesi',
    message: 'Bu ay için belirlenen kitaplar listesi ektedir.',
    date: '2024-03-13 11:45',
    isRead: true,
    avatar: 'https://picsum.photos/202',
  },
];

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {DUMMY_MESSAGES.map((message) => (
          <Card 
            key={message.id} 
            style={[
              styles.messageCard,
              !message.isRead && styles.unreadMessage
            ]}
          >
            <Card.Title
              title={message.sender}
              subtitle={message.subject}
              left={(props) => (
                <Avatar.Image {...props} source={{ uri: message.avatar }} />
              )}
            />
            <Card.Content>
              <Text style={styles.messageText}>{message.message}</Text>
              <Text style={styles.dateText}>{message.date}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => console.log('Yeni mesaj')}
        label="Yeni Mesaj"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messageCard: {
    margin: 8,
    elevation: 2,
  },
  unreadMessage: {
    backgroundColor: '#e3f2fd',
  },
  messageText: {
    marginTop: 8,
    fontSize: 14,
  },
  dateText: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
}); 