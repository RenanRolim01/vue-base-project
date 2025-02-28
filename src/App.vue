<!-- src/App.vue -->
<template>
  <v-app>
    <div v-if="authStore.authenticated">
      <v-app-bar app :color="teal.base" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Meu Sistema</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-avatar class="mr-2" color="grey-lighten-1" size="36" v-bind="props">
              <span class="white--text">US</span>
            </v-avatar>
          </template>
          <v-list>
            <v-list-item @click="dialog = true">
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app>
        <v-list>
          <v-list-item to="/" prepend-icon="mdi-home" title="Início"></v-list-item>
          <v-list-item to="/sobre" prepend-icon="mdi-information" title="Sobre"></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Configurações"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title class="headline">Sair do Sistema</v-card-title>
          <v-card-text>Tem certeza que deseja sair?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey" text @click="dialog = false">Cancelar</v-btn>
            <v-btn color="red" text @click="authStore.logout">Sair</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <div v-else>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import colors from 'vuetify/util/colors';
import { useAuthStore } from './stores/auth';

export default defineComponent({
  name: 'App',
  setup() {
    const drawer = ref(true);
    const dialog = ref(false);
    const teal = colors.teal;
    const authStore = useAuthStore();

    onMounted(() => {
      authStore.checkAuth(); // Verifica autenticação ao carregar
    });

    return {
      drawer,
      dialog,
      teal,
      authStore,
    };
  },
});
</script>

<style scoped>
/* Estilos adicionais, se necessário */
</style>