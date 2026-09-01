import { createRouter, createWebHistory } from 'vue-router'

// Páginas Públicas / Isoladas (SEM layout)
import Home from './Home.vue'
import SaasTemplate from './components/SaasTemplate.vue'

// Layout do Painel e Páginas Internas
import UploadView from './Upload.vue'
import RelatoriosView from './Relatorios.vue'
import GraficosView from './Graficos.vue'
import RegisterView from './Register.vue' // <-- Adicionado aqui para corrigir o erro que ia estourar logo em seguida
import Login from './Login.vue'
import AppLayout from './layouts/AppLayout.vue'

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
        name: 'Upload', 
        component: UploadView 
      },
      { 
        path: 'relatorios', 
        name: 'Relatorios', 
        component: RelatoriosView 
      },
      {
        path: 'register',
        name: 'Register',
        component: RegisterView
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