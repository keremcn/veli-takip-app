import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Switch, Card, Text, Button } from 'react-native-paper';

const NOTIFICATION_SETTINGS = {
  grades: {
    title: 'Not Bildirimleri',
    description: 'Yeni not girildiğinde bildirim al',
    default: true,
  },
  attendance: {
    title: 'Devamsızlık Bildirimleri',
    description: 'Devamsızlık durumunda bildirim al',
    default: true,
  },
  homework: {
    title: 'Ödev Bildirimleri',
    description: 'Yeni ödev verildiğinde bildirim al',
    default: true,
  },
  messages: {
    title: 'Mesaj Bildirimleri',
    description: 'Yeni mesaj geldiğinde bildirim al',
    default: true,
  },
  announcements: {
    title: 'Duyuru Bildirimleri',
    description: 'Okul duyurularında bildirim al',
    default: true,
  },
};

export default function NotificationSettingsScreen() {
  const [settings, setSettings] = useState(
    Object.keys(NOTIFICATION_SETTINGS).reduce((acc, key) => ({
      ...acc,
      [key]: NOTIFICATION_SETTINGS[key].default,
    }), {})
  );

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          {Object.entries(NOTIFICATION_SETTINGS).map(([key, setting]) => (
            <List.Item
              key={key}
              title={setting.title}
              description={setting.description}
              right={() => (
                <Switch
                  value={settings[key]}
                  onValueChange={() => handleToggle(key)}
                />
              )}
            />
          ))}
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        style={styles.saveButton}
        onPress={() => console.log('Ayarlar kaydedildi:', settings)}
      >
        Ayarları Kaydet
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  saveButton: {
    marginTop: 8,
  },
}); 