import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'; // Правильный импорт

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ // Теперь visualizer - это функция
      open: true, // Автоматически открыть отчет после сборки
      filename: 'dist/stats.html', // Файл, в который сохранится отчет
    }),
  ],
  build: {
    outDir: 'dist', // Папка для сборки (по умолчанию и так 'dist')
  }
})