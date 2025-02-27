// src/plugins/vuetify.ts
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/util/colors';

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: colors.teal.base, // Usa teal como cor primária (#26A69A)
          secondary: colors.grey.darken3, // Exemplo: outra cor da paleta
          accent: colors.teal.accent3, // Um tom mais vibrante de teal
        },
      },
    },
  },
});