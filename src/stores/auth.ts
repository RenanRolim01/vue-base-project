// src/stores/auth.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const authenticated = ref(false);
  const router = useRouter();

  // Verifica o estado inicial
  function checkAuth() {
    authenticated.value = !!localStorage.getItem('token');
  }

  // Login simulado
  function login(username: string, password: string) {
    if (username === 'admin' && password === '12345') {
      localStorage.setItem('token', 'fake-token');
      authenticated.value = true;
      router.push('/');
    } else {
      throw new Error('Usuário ou senha incorretos');
    }
  }

  // Logout
  function logout() {
    localStorage.removeItem('token');
    authenticated.value = false;
    router.push('/login');
  }

  return { authenticated, checkAuth, login, logout };
});