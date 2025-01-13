import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { List, Text, Card, Avatar, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { selectStudent } from '../store/slices/authSlice';
import { RootState } from '../store';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type Student = {
  id: string;
  name: string;
  class: string;
  photo: string;
  attendance: {
    total: number;
    absent: number;
  };
  gpa: number;
};

type StudentListScreenProps = {
  navigation: DrawerNavigationProp<any>;
};

const DUMMY_STUDENTS = [
  {
    id: '1',
    name: 'Mehmet Yılmaz',
    class: '8-A',
    photo: 'https://picsum.photos/200',
    attendance: { total: 180, absent: 3 },
    gpa: 85.4,
  },
  {
    id: '2',
    name: 'Ayşe Yılmaz',
    class: '5-B',
    photo: 'https://picsum.photos/201',
    attendance: { total: 180, absent: 1 },
    gpa: 92.7,
  }
];

export default function StudentListScreen({ navigation }: StudentListScreenProps) {
  const dispatch = useDispatch();
  const selectedStudent = useSelector((state: RootState) => state.auth.selectedStudent);

  const handleStudentSelect = (student: Student) => {
    dispatch(selectStudent(student));
    navigation.navigate('MainTabs', { screen: 'AnaSayfa' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Öğrenci Listesi</Text>
      {DUMMY_STUDENTS.map((student) => (
        <Card key={student.id} style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Avatar.Image size={80} source={{ uri: student.photo }} />
            <View style={styles.studentInfo}>
              <Text style={styles.name}>{student.name}</Text>
              <Text style={styles.class}>Sınıf: {student.class}</Text>
              <Text style={styles.stats}>
                Devamsızlık: {student.attendance.absent} gün
              </Text>
              <Text style={styles.stats}>
                Not Ortalaması: {student.gpa}
              </Text>
            </View>
          </Card.Content>
          <Card.Actions>
            <Button 
              mode="contained" 
              onPress={() => handleStudentSelect(student)}
              disabled={selectedStudent?.id === student.id}
            >
              {selectedStudent?.id === student.id ? 'Seçili Öğrenci' : 'Seç'}
            </Button>
            <Button 
              mode="outlined" 
              onPress={() => navigation.navigate('ÖğrenciDetay', { student })}
            >
              Detaylar
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  studentInfo: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  class: {
    fontSize: 16,
    marginBottom: 4,
  },
  stats: {
    fontSize: 14,
    color: '#666',
  },
}); 