import AsyncStorage from '@react-native-community/async-storage';
import reactotron from 'reactotron-react-native';

export function getToken() {
  async function get() {
    try {
      const response = await AsyncStorage.getItem('token');
      return response;
    } catch (error) {
      throw error;
    }
  }
  get();
}

export function setToken(accessToken) {
  async function set() {
    try {
      await AsyncStorage.setItem('token', accessToken);
    } catch (error) {
      throw error;
    }
  }
  set();
}
