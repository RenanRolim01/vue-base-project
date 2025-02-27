import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true, // Importa automaticamente os componentes do Vuetify
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Definindo '@' para o diretório 'src'
    },
  },
});
