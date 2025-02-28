<template>
  <v-app>
    <!-- Header -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Meu Sistema</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Avatar com Menu -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-avatar class="mr-2" color="grey-lighten-1" size="36" v-bind="props">
            <span class="white--text">US</span> <!-- Inicial do usuário -->
          </v-avatar>
        </template>
        <v-list>
          <v-list-item @click="dialog = true">
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item to="/" prepend-icon="mdi-home" title="Início"></v-list-item>
        <v-list-item to="/sobre" prepend-icon="mdi-information" title="Sobre"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="Configurações"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Conteúdo Principal -->
    <v-main>
      <v-container fluid>
        <slot />  <!-- IMPORTANTE: Carrega páginas internas aqui -->
      </v-container>
    </v-main>

    <!-- Popup de Confirmação de Logout -->
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Sair do Sistema</v-card-title>
        <v-card-text>Tem certeza que deseja sair?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="dialog = false">Cancelar</v-btn>
          <v-btn color="red" text @click="logout">Sair</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "vue-router";

const drawer = ref(false);
const dialog = ref(false);

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push("/");
};
</script>
