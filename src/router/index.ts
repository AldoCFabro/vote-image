import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('../views/RankingView.vue'),
  },
  {
    path: '/use',
    name: 'Use',
    component: () => import('../views/UseView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
