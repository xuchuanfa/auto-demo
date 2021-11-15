import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
