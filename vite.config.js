import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-star-wars',
  resolve: {
    alias: {
      ui: '/src/components/UI', 
      components: '/src/components', 
      constants: '/src/constants', 
      containers: '/src/containers', 
      hocHelpers: '/src/hoc-helpers', 
      layouts: '/src/layouts',
      routes: '/src/routes',
      services: '/src/services', 
      static: '/src/static', 
      utils: '/src/utils',
      hooks: '/src/hooks',
      store: '/src/store',
      context: '/src/context',
    },
  },
  plugins: [react()],
})
