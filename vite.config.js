import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Ensure correct base path
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify output directory
    emptyOutDir: true, // Clear old files before building
  },
});
