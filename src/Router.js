// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import SaasTemplate from './components/SaasTemplate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/saas',
    name: 'SaasTemplate',
    component: SaasTemplate
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
