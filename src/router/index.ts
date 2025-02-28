// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import { useAuthStore } from '../stores/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/SobreView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  console.log('Rota:', to.path, 'Autenticado:', authStore.authenticated);

  if (to.meta.requiresAuth && !authStore.authenticated) {
    next('/login');
  } else if (to.path === '/login' && authStore.authenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;