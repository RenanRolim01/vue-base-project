<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="pa-8" width="400">
      <v-card-title class="text-center">Login</v-card-title>
      <v-card-subtitle class="text-center">Entre com suas credenciais</v-card-subtitle>

      <v-form @submit.prevent="handleLogin">
        <v-text-field label="E-mail" v-model="email" type="email" required outlined prepend-inner-icon="mdi-email" />
        <v-text-field label="Senha" v-model="password" type="password" required outlined prepend-inner-icon="mdi-lock" />

        <v-btn block color="primary" :loading="loading" type="submit">Entrar</v-btn>

        <v-alert v-if="errorMessage" type="error" class="mt-4">{{ errorMessage }}</v-alert>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth";
import { login } from "@/api/auth";

const email = ref("");
const password = ref("");
const loading = ref(false);
const errorMessage = ref("");
const router = useRouter();
const authStore = useAuthStore();

const handleLogin = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const response = await login({ email: email.value, password: password.value });

    authStore.login(response.token);

    if (authStore.isUser) {
      router.push("/dashboard");
    } else if (authStore.isEmpresa) {
      router.push("/empresa");
    }
  } catch (error) {
    errorMessage.value = "Credenciais inválidas. Tente novamente.";
  } finally {
    loading.value = false;
  }
};
</script>
