import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages needs base: '/ucdavis-insight/'
// Vercel (and local dev) need base: '/'
// Set VITE_BASE_PATH env var to override — the deploy script sets it automatically.
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
