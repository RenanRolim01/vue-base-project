<template>
  <DefaultLayout>
    <v-container>
      <v-card class="pa-6">
        <v-card-title>Bem-vindo, {{ authStore.user?.name }}!</v-card-title>
        <v-card-subtitle
          >Você está logado como <strong>Empresa</strong></v-card-subtitle
        >
      </v-card>
    </v-container>
  </DefaultLayout>
</template>

<script setup>
import { useAuthStore } from "@/store/auth";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const authStore = useAuthStore();
</script>
