import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';

export default function LoginScreen() {
  const [email, setEmail] = useState('veli@example.com');
  const [password, setPassword] = useState('123456');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Örnek veri ile giriş
    dispatch(login({
      token: 'dummy-token',
      parent: {
        id: '1',
        name: 'Ahmet Yılmaz',
        email: email,
        phone: '0555 555 5555',
        students: [
          {
            id: '1',
            name: 'Mehmet Yılmaz',
            class: '8-A',
            photo: 'https://example.com/student1.jpg'
          },
          {
            id: '2',
            name: 'Ayşe Yılmaz',
            class: '5-B',
            photo: 'https://example.com/student2.jpg'
          }
        ]
      }
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veli Takip Sistemi</Text>
      <TextInput
        label="E-posta"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        label="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Giriş Yap
      </Button>
      <Text style={styles.hint}>
        Örnek giriş bilgileri:{'\n'}
        E-posta: veli@example.com{'\n'}
        Şifre: 123456
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  hint: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
  }
}); 