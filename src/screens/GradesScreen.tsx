import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, List, DataTable } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const DUMMY_GRADES = {
  matematik: [
    { id: '1', type: 'Sınav', date: '2024-03-15', score: 85, maxScore: 100 },
    { id: '2', type: 'Ödev', date: '2024-03-10', score: 90, maxScore: 100 },
  ],
  turkce: [
    { id: '3', type: 'Sınav', date: '2024-03-12', score: 75, maxScore: 100 },
    { id: '4', type: 'Proje', date: '2024-03-05', score: 95, maxScore: 100 },
  ],
  fen: [
    { id: '5', type: 'Sınav', date: '2024-03-08', score: 88, maxScore: 100 },
    { id: '6', type: 'Laboratuvar', date: '2024-03-01', score: 92, maxScore: 100 },
  ],
};

export default function GradesScreen() {
  const selectedStudent = useSelector((state: RootState) => state.auth.selectedStudent);

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.summaryCard}>
        <Card.Content>
          <Text style={styles.studentName}>{selectedStudent?.name}</Text>
          <Text style={styles.className}>{selectedStudent?.class}</Text>
          <Text style={styles.gpa}>Genel Ortalama: 88.5</Text>
        </Card.Content>
      </Card>

      {Object.entries(DUMMY_GRADES).map(([subject, grades]) => (
        <Card key={subject} style={styles.subjectCard}>
          <Card.Title title={subject.toUpperCase()} />
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Tür</DataTable.Title>
                <DataTable.Title>Tarih</DataTable.Title>
                <DataTable.Title numeric>Not</DataTable.Title>
              </DataTable.Header>

              {grades.map((grade) => (
                <DataTable.Row key={grade.id}>
                  <DataTable.Cell>{grade.type}</DataTable.Cell>
                  <DataTable.Cell>{grade.date}</DataTable.Cell>
                  <DataTable.Cell numeric>{grade.score}</DataTable.Cell>
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
  summaryCard: {
    marginBottom: 16,
  },
  subjectCard: {
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
  gpa: {
    fontSize: 18,
    marginTop: 8,
    color: '#2196F3',
  },
});