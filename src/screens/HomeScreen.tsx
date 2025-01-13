import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Title, Paragraph, Chip, Avatar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { News } from '../store/slices/newsSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
  const selectedStudent = useSelector((state: RootState) => state.auth.selectedStudent);
  const { news, announcements } = useSelector((state: RootState) => state.news);

  const renderNewsItem = (item: News) => (
    <Card 
      key={item.id} 
      style={styles.card}
      onPress={() => navigation.navigate('HaberDetay', { item })}
    >
      {item.image && (
        <Card.Cover source={{ uri: item.image }} />
      )}
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph numberOfLines={2}>{item.content}</Paragraph>
        <View style={styles.cardFooter}>
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
  );

  return (
    <ScrollView style={styles.container}>
      {selectedStudent && (
        <Card style={styles.studentCard}>
          <Card.Title
            title={selectedStudent.name}
            subtitle={selectedStudent.class}
            left={(props) => (
              <Avatar.Image {...props} source={{ uri: selectedStudent.photo }} />
            )}
          />
        </Card>
      )}

      <Title style={styles.sectionTitle}>Duyurular</Title>
      {announcements.map(renderNewsItem)}

      <Title style={styles.sectionTitle}>Haberler</Title>
      {news.map(renderNewsItem)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  studentCard: {
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  sectionTitle: {
    marginVertical: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
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
  detailsContainer: {
    marginTop: 12,
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
});