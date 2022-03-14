import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // {
  //   path: '/messages',
  //   name: 'messages',
  //   component: () => import('../pages/MessagesPage.vue'),
  // },
  // {
  //   path: '/schedules',
  //   name: 'schedules',
  //   component: () => import('../pages/SchedulesPage.vue'),
  // },
  // {
  //   path: '/triggers',
  //   name: 'triggers',
  //   component: () => import('../pages/TriggersPage.vue'),
  // },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
