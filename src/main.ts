import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useAuthStore } from "@/store/auth";
import vuetify from "@/plugins/vuetify"; // Importando o Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(vuetify); // Aplicando Vuetify

// Recupera a sessão ao iniciar o app
const authStore = useAuthStore();
if (authStore.token) {
  authStore.login(authStore.token);
}

app.mount("#app");
