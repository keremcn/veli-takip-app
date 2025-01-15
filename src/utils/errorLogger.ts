import AsyncStorage from '@react-native-async-storage/async-storage';

const ERROR_LOG_KEY = '@error_logs';

export const logError = async (error: Error) => {
  const errorLog = {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
  };

  try {
    const existingLogs = await AsyncStorage.getItem(ERROR_LOG_KEY);
    const logs = existingLogs ? JSON.parse(existingLogs) : [];
    logs.push(errorLog);
    await AsyncStorage.setItem(ERROR_LOG_KEY, JSON.stringify(logs));
  } catch (e) {
    console.error('Error logging failed', e);
  }
};

export const getErrorLogs = async () => {
  try {
    const logs = await AsyncStorage.getItem(ERROR_LOG_KEY);
    return logs ? JSON.parse(logs) : [];
  } catch (e) {
    console.error('Error fetching logs', e);
    return [];
  }
};

export const addSampleErrorLogs = async () => {
  const sampleErrors = [
    {
      message: 'Örnek hata 1: Giriş başarısız.',
      stack: 'LoginScreen.tsx:40',
      timestamp: new Date().toISOString(),
    },
    {
      message: 'Örnek hata 2: Ağ bağlantısı hatası.',
      stack: 'NetworkService.ts:15',
      timestamp: new Date().toISOString(),
    },
  ];

  try {
    const existingLogs = await AsyncStorage.getItem(ERROR_LOG_KEY);
    const logs = existingLogs ? JSON.parse(existingLogs) : [];
    logs.push(...sampleErrors);
    await AsyncStorage.setItem(ERROR_LOG_KEY, JSON.stringify(logs));
  } catch (e) {
    console.error('Örnek hata verisi eklenirken hata oluştu', e);
  }
}; 