import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // GitHub Pages پروژه را داخل مسیر /Amirmohammad-Portfolio/ منتشر می‌کند.
  // در حالت توسعه محلی همچنان آدرس ساده localhost استفاده می‌شود.
  base: command === 'build' ? '/Amirmohammad-Portfolio/' : '/',
  plugins: [react(), tailwindcss()],
}))
