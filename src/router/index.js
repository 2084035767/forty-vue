import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import Layout from '@/layouts/Layout.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/resign',
    name: 'resign',
    component: () => import('@/pages/ResignPage.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/web/HomePage.vue'),
  },
  {
    path: '/commodity',
    name: 'commodity',
    component: () => import('@/pages/web/CommodityPage.vue'),
  },
  {
    path: '/story',
    name: 'story',
    component: () => import('@/pages/web/StoryPage.vue'),
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('@/pages/web/PersonPage.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
