import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Text, Chip } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { News } from '../store/slices/newsSlice';

export default function NewsDetailScreen() {
  const route = useRoute();
  const { item } = route.params as { item: News };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        {item.image && (
          <Card.Cover source={{ uri: item.image }} />
        )}
        <Card.Content>
          <Title style={styles.title}>{item.title}</Title>
          
          <View style={styles.detailsContainer}>
            {item.location && (
              <View style={styles.detailRow}>
                <MaterialCommunityIcons name="map-marker" size={16} color="#666" />
                <Text style={styles.detailText}>{item.location}</Text>
              </View>
            )}
            {item.time && (
              <View style={styles.detailRow}>
                <MaterialCommunityIcons name="clock-outline" size={16} color="#666" />
                <Text style={styles.detailText}>{item.time}</Text>
              </View>
            )}
            {item.contact && (
              <View style={styles.detailRow}>
                <MaterialCommunityIcons name="account" size={16} color="#666" />
                <Text style={styles.detailText}>{item.contact}</Text>
              </View>
            )}
          </View>

          <Paragraph style={styles.content}>{item.content}</Paragraph>

          <View style={styles.footer}>
            <Text style={styles.date}>{item.date}</Text>
            {item.priority && (
              <Chip 
                mode="outlined" 
                style={[
                  styles.priorityChip,
                  item.priority === 'high' && styles.highPriority
                ]}
              >
                {item.priority === 'high' ? 'Önemli' : 'Normal'}
              </Chip>
            )}
          </View>
        </Card.Content>
      </Card>
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
  title: {
    fontSize: 24,
    marginVertical: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 16,
  },
  detailsContainer: {
    marginVertical: 12,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  date: {
    color: '#666',
  },
  priorityChip: {
    backgroundColor: 'transparent',
  },
  highPriority: {
    borderColor: '#f44336',
  },
}); 