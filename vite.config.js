import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS({ configFile: './uno.config.js' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 相对路径别名配置，使用 @ 代替 src
    },
  },
  server: {
    port: 8080, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
  },
})
