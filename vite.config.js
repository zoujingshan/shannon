import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5030,
    proxy: {
      '/common': {
        target: 'http://zwfw.hubei.gov.cn/',//目标服务器地址
        changeOrigin: true,
      },
      '/web': {
        target: 'http://zwfw.hubei.gov.cn/',//目标服务器地址
        changeOrigin: true,
      },
      '/images': 'http://zwfw.hubei.gov.cn/'
    },
    cors: true,
  },
})
