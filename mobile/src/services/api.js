import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.10:3000/',
});

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
export default api;
