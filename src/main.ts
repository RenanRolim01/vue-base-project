// src/main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Importa o Pinia
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

const app = createApp(App);
const pinia = createPinia(); // Cria a instância do Pinia

app.use(pinia); // Usa o Pinia
app.use(vuetify);
app.use(router);
app.mount('#app');