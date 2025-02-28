<!-- src/views/LoginView.vue -->
<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="handleLogin">
                <v-text-field
                  v-model="username"
                  label="Usuário"
                  prepend-icon="mdi-account"
                  type="text"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Senha"
                  prepend-icon="mdi-lock"
                  type="password"
                  required
                ></v-text-field>
                <v-btn color="primary" type="submit" block>Entrar</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useAuthStore } from '../stores/auth';
  
  export default defineComponent({
    name: 'LoginView',
    setup() {
      const username = ref('');
      const password = ref('');
      const authStore = useAuthStore();
  
      const handleLogin = () => {
        try {
          authStore.login(username.value, password.value);
        } catch (error) {
          alert((error as Error).message);
        }
      };
  
      return {
        username,
        password,
        handleLogin,
      };
    },
  });
  </script>
  
  <style scoped>
  .fill-height {
    height: 100vh;
  }
  </style>