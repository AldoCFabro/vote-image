import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('../views/CounterView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
