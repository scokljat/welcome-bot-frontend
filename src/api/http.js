import store from '@/store';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error.response.status === 403) {
      store.dispatch('deleteAuth');
    }
    return Promise.reject(error);
  }
);

export default instance;
