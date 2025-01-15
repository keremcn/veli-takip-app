import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { getErrorLogs } from '../utils/errorLogger';

export default function ErrorListScreen() {
  const [errorLogs, setErrorLogs] = useState([]);

  useEffect(() => {
    const fetchErrorLogs = async () => {
      const logs = await getErrorLogs();
      setErrorLogs(logs);
    };

    fetchErrorLogs();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {errorLogs.length === 0 ? (
        <Text style={styles.noLogs}>Hiç hata kaydı yok.</Text>
      ) : (
        errorLogs.map((log, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content>
              <Text style={styles.message}>{log.message}</Text>
              <Text style={styles.timestamp}>{log.timestamp}</Text>
              <Text style={styles.stack}>{log.stack}</Text>
            </Card.Content>
          </Card>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  message: {
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
  },
  stack: {
    fontSize: 12,
    color: 'black',
  },
  noLogs: {
    textAlign: 'center',
    marginTop: 20,
  },
}); 