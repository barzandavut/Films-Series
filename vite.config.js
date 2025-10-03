import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  css: {
    postcss: {
      plugins: [
        tailwindcss({
          // eslint-disable-next-line no-undef
          config: path.join(__dirname, 'tailwind.config.js'),
        }),
        autoprefixer(),
      ],
    },
  },
});
