// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Importa o Vuetify configurado
import router from './router'; // Se você escolheu Vue Router

const app = createApp(App);
app.use(vuetify); // Usa o Vuetify
app.use(router); // Usa o router (se aplicável)
app.mount('#app');