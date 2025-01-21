import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentScheduleScreen() {
  return (
    <View style={styles.container}>
      <Text>Ders Programı</Text>
      {/* Ders programı bilgileri burada gösterilecek */}
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