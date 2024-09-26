import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src', // '@'를 사용하면 src 폴더를 가리키도록 설정
    },
  },
  server: {
    port: 7090,
  },
});
