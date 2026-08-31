// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import SaasTemplate from './components/SaasTemplate.vue'
import Login from './components/Login.vue'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
