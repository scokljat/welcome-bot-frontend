import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const routes = [
  { path: '/', redirect: '/auth' },
  {
    path: '/auth',
    name: 'login',
    component: () => import('../pages/LoginPage.vue'),
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('../pages/MessagesPage.vue'),
  },
  {
    path: '/schedules',
    name: 'schedules',
    component: () => import('../pages/SchedulesPage.vue'),
  },
  {
    path: '/triggers',
    name: 'triggers',
    component: () => import('../pages/TriggersPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error',
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../pages/ErrorPage.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.getters.isLoggedIn) next({ name: 'login' });
  else next();
});

export default router;
