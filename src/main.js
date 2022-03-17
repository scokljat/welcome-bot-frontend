import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import GAuth from 'vue3-google-oauth2';

const gAuthOptions = {
  clientId: '808924355914-8k4928tljobpmqc276b5iqa60fshkubi',
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: false,
};

createApp(App).use(store).use(router).use(GAuth, gAuthOptions).mount('#app');
