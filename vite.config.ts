import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteJsconfigLog from 'vite-jsconfig-log';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), viteJsconfigLog()],
  // plugins: [react()],
  // optimizeDeps: {
  //   exclude: ['lucide-react'],
  // },
  // Add public directory configuration to serve MediaPipe files
  publicDir: 'public',
  
  server: {
    // Configure server to handle MediaPipe WASM files
    host: '127.0.0.1',
    port: '3000',
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    }
  },
  base: './'
});