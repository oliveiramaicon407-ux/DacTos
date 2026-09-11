import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const usuario = ref(null)

  function login(user, pass) {
    if (user && pass) {
      usuario.value = user
      return true
    }
    return false
  }

  function logout() {
    usuario.value = null
  }

  return {
    usuario,
    login,
    logout
  }
})