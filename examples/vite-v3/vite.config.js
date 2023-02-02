import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExpand from 'vite-plugin-vue-setup-expand'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExpand()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
