import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// table imports
import 'element-plus/es/components/table/style/css';
import 'element-plus/es/components/table-column/style/css';
import 'element-plus/es/components/pagination/style/css';

createApp(App).use(store).use(router).mount('#app');
