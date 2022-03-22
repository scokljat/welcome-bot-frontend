import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import GAuth from 'vue3-google-oauth2';
// table imports
import 'element-plus/es/components/table/style/css';
import 'element-plus/es/components/table-column/style/css';
import 'element-plus/es/components/pagination/style/css';

const gAuthOptions = {
  clientId: process.env.VUE_APP_CLIENT_ID,
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: false,
};

createApp(App).use(store).use(router).use(GAuth, gAuthOptions).mount('#app');
