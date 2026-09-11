import { createRouter, createWebHistory } from 'vue-router'

// Páginas Públicas / Isoladas (SEM layout)
import Home from './Home.vue'
import Login from './Login.vue'
import Register from './Register.vue'
import SaasTemplate from './components/SaasTemplate.vue'

// Layout do Painel e Páginas Internas
import AppLayout from './layouts/AppLayout.vue'
import UploadView from './Views/Upload.vue'
import RelatoriosView from './Relatorios.vue'
import GraficosView from './Graficos.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: Login 
  },
  { 
    path: '/register', 
    name: 'Register', 
    component: Register 
  },
  {
    path: '/saas',
    name: 'SaasTemplate',
    component: SaasTemplate
  },
  {
    path: '/sidebar',
    component: AppLayout,
    redirect: '/sidebar/upload',
    children: [
      { 
        path: 'upload', 
        alias: '/upload', // <--- Permite acessar diretamente via http://localhost:5173/upload
        name: 'Upload', 
        component: UploadView 
      },
      { 
        path: 'relatorios', 
        name: 'Relatorios', 
        component: RelatoriosView 
      },
      { 
        path: 'graficos', 
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