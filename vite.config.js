import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        ws: true,
      },
      '/health': 'http://localhost:5000',
    },
  },
  build: {
    sourcemap: 'hidden',
    chunkSizeWarningLimit: 1000,
  },
})
