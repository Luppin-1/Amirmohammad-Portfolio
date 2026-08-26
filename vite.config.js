import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // GitHub Pages پروژه را داخل مسیر /Resume-React/ منتشر می‌کند.
  // در حالت توسعه محلی همچنان آدرس ساده localhost استفاده می‌شود.
  base: command === 'build' ? '/Resume-React/' : '/',
  plugins: [react(), tailwindcss()],
}))
