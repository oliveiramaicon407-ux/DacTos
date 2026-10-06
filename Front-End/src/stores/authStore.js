// src/stores/authStore.js

import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '../Services/api'

export const useAuthStore = defineStore('auth', () => {

  // Recupera o token salvo anteriormente
  const token = ref(localStorage.getItem('token') || null)

  // Recupera o usuário salvo anteriormente
  const usuario = ref(localStorage.getItem('dac_usuario') || null)

  // Verifica se existe um token
  const autenticado = ref(!!token.value)

  // Login usando o backend Spring Boot
  async function login(email, senha) {

    try {

      const response = await api.post('/auth/login', {
        email: email,
        senha: senha
      })

      // O backend retorna o JWT diretamente
      const novoToken = response.data

      // Salva o token
      token.value = novoToken
      localStorage.setItem('token', novoToken)

      // Salva o email do usuário
      usuario.value = email
      localStorage.setItem('dac_usuario', email)

      autenticado.value = true

      return {
        sucesso: true
      }

    } catch (error) {

      console.error('Erro no login:', error)

      autenticado.value = false

      return {
        sucesso: false,
        mensagem: error.response?.data || 'Email ou senha inválidos.'
      }
    }
  }

  // Logout
  function logout() {

    token.value = null
    usuario.value = null
    autenticado.value = false

    localStorage.removeItem('token')
    localStorage.removeItem('dac_usuario')
  }

  return {
    token,
    usuario,
    autenticado,
    login,
    logout
  }

})