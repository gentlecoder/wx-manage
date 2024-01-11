import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    // 后端请求转发，此配置仅开发环境有效，生产环境请参考生产环境部署文档配置nginx转发
    proxy: {
      '/wx': {
        target: 'http://localhost:8088/'
      }
    },
    port: 8001
  }
})
