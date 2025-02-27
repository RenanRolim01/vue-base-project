// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SobreView from '../views/SobreView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: SobreView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;