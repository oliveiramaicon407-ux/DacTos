import { createRouter, createWebHistory } from 'vue-router'

// =========================
// PÁGINAS PÚBLICAS
// =========================

import Home from './Home.vue'
import Login from './Login.vue'
import Register from './Register.vue'

import SaasTemplate from './components/SaasTemplate.vue'

// =========================
// LAYOUT DO PAINEL
// =========================

import AppLayout from './layouts/AppLayout.vue'

// =========================
// PÁGINAS INTERNAS
// =========================

import UploadView from './Views/Upload.vue'
import RelatoriosView from './Relatorios.vue'
import GraficosView from './Graficos.vue'


const routes = [

  // =========================
  // HOME
  // =========================

  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // =========================
  // LOGIN
  // =========================

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  // =========================
  // CADASTRO
  // =========================

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  // =========================
  // SAAS
  // =========================

  {
    path: '/saas',
    name: 'SaasTemplate',
    component: SaasTemplate
  },

  // =========================
  // PAINEL PROTEGIDO
  // =========================

  {
    path: '/sidebar',

    component: AppLayout,

    meta: {
      requiresAuth: true
    },

    redirect: '/sidebar/upload',

    children: [

      // UPLOAD
      {
        path: 'upload',

        alias: '/upload',

        name: 'Upload',

        component: UploadView,

        meta: {
          requiresAuth: true
        }
      },

      // RELATÓRIOS
      {
        path: 'relatorios',

        name: 'Relatorios',

        component: RelatoriosView,

        meta: {
          requiresAuth: true
        }
      },

      // GRÁFICOS
      {
        path: 'graficos',

        name: 'Graficos',

        component: GraficosView,

        meta: {
          requiresAuth: true
        }
      }

    ]
  }

]


// =========================
// CRIAÇÃO DO ROUTER
// =========================

const router = createRouter({

  history: createWebHistory(),

  routes

})


// =========================
// PROTEÇÃO DAS ROTAS
// =========================

router.beforeEach((to) => {

  const token = localStorage.getItem('token')


  // Usuário NÃO autenticado
  // tentando acessar página protegida
  if (to.meta.requiresAuth && !token) {

    return {
      name: 'Login'
    }

  }


  // Usuário já autenticado
  // tentando voltar para Login/Cadastro
  if (
    (to.name === 'Login' || to.name === 'Register') &&
    token
  ) {

    return {
      name: 'Upload'
    }

  }


  return true

})


export default router