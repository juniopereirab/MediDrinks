import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productInfo/:productId',
    name: 'ProductInfo',
    component: () => import('../views/ProductInfo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
