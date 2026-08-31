import { createRouter, createWebHistory } from 'vue-router'

// Páginas Públicas / Isoladas (SEM layout)
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// Altere esta linha no seu Router.js:
import SaasTemplate from '../components/SaasTemplate.vue'

// Layout do Painel e Páginas Internas
import AppLayout from '../layouts/AppLayout.vue'
import UploadView from '../views/Upload.vue'
import RelatoriosView from '../views/Relatorios.vue'
import GraficosView from '../views/Graficos.vue'
import RegisterView from '../views/Register.vue'

const routes = [
  // 1. Tela Home totalmente isolada (não é filha do AppLayout)
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },

  // 2. Tela de Login também isolada
  { 
    path: '/Login', 
    name: 'Login', 
    component: Login 
  },

  {
    path: '/saas',
    name: 'SaasTemplate',
    component: SaasTemplate
  },

  // 3. Estrutura com Sidebar / AppLayout no caminho /sidebar
  {
    path: '/sidebar',
    component: AppLayout,
    redirect: '/sidebar/upload', // Redireciona automaticamente ao acessar /sidebar
    children: [
      { 
        path: 'Upload', 
        name: 'Upload', 
        component: UploadView 
      },
      { 
        path: 'Relatorios', 
        name: 'Relatorios', 
        component: RelatoriosView 
      },
      {
        path: 'Register',
        name: 'Register',
        component: RegisterView
      },
      { 
        path: 'Graficos', 
        name: 'Graficos', 
        component: GraficosView 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router