import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import compileSCSS from './compile-scss';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [tsconfigPaths(), react(), compileSCSS()],
  build: {
    rollupOptions: {
      external: ['perf_hooks'],
      onwarn(warning, warn) {
        if (warning.code === 'EVAL') return;
        warn(warning);
      }
    }
  },
  server: {
    open: true,
    port: 3000
  }
});
