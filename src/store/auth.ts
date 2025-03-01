import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || null,
    role: null,
  }),
  actions: {
    login(token: string) {
      try {
        const decoded: any = jwtDecode(token);

        // Verifica se o token está expirado
        if (decoded.exp * 1000 < Date.now()) {
          console.warn("Token expirado!");
          this.logout();
          return;
        }

        this.token = token;
        localStorage.setItem("token", token);

        // Armazena os dados do usuário decodificados
        this.user = {
          id: decoded.id,
          name: decoded.name,
          email: decoded.email,
        };
        this.role = decoded.role;
      } catch (error) {
        console.error("Erro ao decodificar token JWT", error);
        this.logout();
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      this.role = null;
      localStorage.removeItem("token");
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    isUser: (state) => state.role === "user",
    isEmpresa: (state) => state.role === "empresa",
  },
});
