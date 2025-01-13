import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, List, DataTable } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const DUMMY_SCHEDULE = {
  Pazartesi: [
    { id: '1', time: '09:00-09:40', subject: 'Matematik', teacher: 'Ayşe Öğretmen', room: '204' },
    { id: '2', time: '10:00-10:40', subject: 'Türkçe', teacher: 'Mehmet Öğretmen', room: '205' },
    { id: '3', time: '11:00-11:40', subject: 'Fen Bilgisi', teacher: 'Zeynep Öğretmen', room: 'Lab-1' },
  ],
  Salı: [
    { id: '4', time: '09:00-09:40', subject: 'İngilizce', teacher: 'John Öğretmen', room: '304' },
    { id: '5', time: '10:00-10:40', subject: 'Sosyal Bilgiler', teacher: 'Ali Öğretmen', room: '206' },
  ],
};

export default function ScheduleScreen() {
  const selectedStudent = useSelector((state: RootState) => state.auth.selectedStudent);

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.headerCard}>
        <Card.Content>
          <Text style={styles.studentName}>{selectedStudent?.name}</Text>
          <Text style={styles.className}>{selectedStudent?.class}</Text>
        </Card.Content>
      </Card>

      {Object.entries(DUMMY_SCHEDULE).map(([day, lessons]) => (
        <Card key={day} style={styles.dayCard}>
          <Card.Title title={day} />
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Saat</DataTable.Title>
                <DataTable.Title>Ders</DataTable.Title>
                <DataTable.Title>Öğretmen</DataTable.Title>
                <DataTable.Title>Sınıf</DataTable.Title>
              </DataTable.Header>

              {lessons.map((lesson) => (
                <DataTable.Row key={lesson.id}>
                  <DataTable.Cell>{lesson.time}</DataTable.Cell>
                  <DataTable.Cell>{lesson.subject}</DataTable.Cell>
                  <DataTable.Cell>{lesson.teacher}</DataTable.Cell>
                  <DataTable.Cell>{lesson.room}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  headerCard: {
    marginBottom: 16,
  },
  dayCard: {
    marginBottom: 16,
  },
  studentName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  className: {
    fontSize: 16,
    color: '#666',
  },
}); 