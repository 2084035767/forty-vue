import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import router from './router/index'
// 组件库
import ElementPlus from 'element-plus'
//  css样式
import 'virtual:uno.css'
import './style/style.css'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(pinia).use(ElementPlus).use(router).mount('#app')
