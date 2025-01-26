import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        port: 5174,
        target: 'http://localhost:3001', // Your server port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  define: {
    'process.env': process.env
  },
  optimizeDeps: {
    include: [
      'react-beautiful-dnd',
      'redux',
      'react-redux',
      'use-memo-one',
      'css-box-model',
      'memoize-one',
      'raf-schd'
    ]
  }
})
