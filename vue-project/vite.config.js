import { fileURLToPath, URL, } from 'node:url'
import { dirname, join } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __frontDist = join(__dirname, '..', 'frontDist');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: __frontDist
  }
})
