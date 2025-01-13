import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const DUMMY_LOCATIONS = {
  school: {
    latitude: 41.0082,
    longitude: 28.9784,
    title: 'Okul',
  },
  student: {
    latitude: 41.0092,
    longitude: 28.9794,
    title: 'Öğrenci',
    timestamp: '2024-03-15 14:30',
  },
};

export default function LocationScreen() {
  const selectedStudent = useSelector((state: RootState) => state.auth.selectedStudent);

  return (
    <View style={styles.container}>
      <Card style={styles.infoCard}>
        <Card.Content>
          <Text style={styles.studentName}>{selectedStudent?.name}</Text>
          <Text style={styles.lastUpdate}>Son Güncelleme: {DUMMY_LOCATIONS.student.timestamp}</Text>
        </Card.Content>
      </Card>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: DUMMY_LOCATIONS.school.latitude,
          longitude: DUMMY_LOCATIONS.school.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={DUMMY_LOCATIONS.school}
          title={DUMMY_LOCATIONS.school.title}
          pinColor="blue"
        />
        <Marker
          coordinate={DUMMY_LOCATIONS.student}
          title={`${selectedStudent?.name} - ${DUMMY_LOCATIONS.student.title}`}
          pinColor="red"
        />
      </MapView>

      <Button
        mode="contained"
        style={styles.refreshButton}
        onPress={() => console.log('Konum güncellendi')}
      >
        Konumu Güncelle
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  infoCard: {
    margin: 16,
  },
  map: {
    flex: 1,
    marginHorizontal: 16,
  },
  studentName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lastUpdate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  refreshButton: {
    margin: 16,
  },
}); 