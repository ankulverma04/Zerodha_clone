import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite SPA refresh safe config
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    historyApiFallback: true, // Dev me refresh safe
  },
})