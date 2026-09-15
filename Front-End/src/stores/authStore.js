// src/stores/authStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // Inicializa recuperando do localStorage se já houver um usuário salvo
  const usuario = ref(localStorage.getItem('dac_usuario') || null)

  function login(user, pass) {
    if (user && pass) {
      usuario.value = user
      localStorage.setItem('dac_usuario', user) // Salva no navegador
      return true
    }
    return false
  }

  function logout() {
    usuario.value = null
    localStorage.removeItem('dac_usuario') // Remove do navegador
  }

  return {
    usuario,
    login,
    logout
  }
})