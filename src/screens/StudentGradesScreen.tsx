import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentGradesScreen() {
  return (
    <View style={styles.container}>
      <Text>Notlar</Text>
      {/* Not bilgileri burada gösterilecek */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 