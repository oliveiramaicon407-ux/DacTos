<!-- src/Login.vue -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const senha = ref('')

function handleLogin() {
  router.push('/sidebar/upload')
}
</script>

<template>
  <div class="min-h-screen w-full bg-black text-white flex items-center justify-center p-4 relative overflow-hidden font-sans antialiased">
    
    <!-- EFEITOS DE BRILHO AZUL E ÍNDIGO ATRÁS DO CARD -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-blue-600/60 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-indigo-500/50 rounded-full blur-2xl pointer-events-none"></div>

    <!-- Botão Voltar para a Landing Page -->
    <router-link 
      to="/" 
      class="absolute top-6 left-6 text-xs text-zinc-400 hover:text-white flex items-center gap-2 transition-colors z-20"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
      </svg>
      Voltar para início
    </router-link>

    <!-- Card Principal de Login com borda neon suave e Glassmorphism -->
    <div class="relative z-10 w-full max-w-md p-8 rounded-2xl bg-zinc-950/90 border border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.25)] backdrop-blur-xl">
      
      <!-- Cabeçalho do Card -->
      <div class="text-center mb-8">
        <router-link to="/" class="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors inline-block mb-2">
          DacTos
        </router-link>
        <h2 class="text-xl font-bold text-white tracking-tight">Acesse sua conta</h2>
        <p class="text-xs text-zinc-400 mt-1">Entre com suas credenciais para acessar a plataforma</p>
      </div>

      <!-- Formulário de Login -->
      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label class="block text-xs font-semibold text-zinc-300 mb-1.5">E-mail</label>
          <input 
            v-model="email"
            type="email" 
            required
            placeholder="seu@email.com"
            class="w-full px-4 py-2.5 text-xs bg-black/80 border border-zinc-800 focus:border-blue-500 rounded-xl text-white placeholder-zinc-600 outline-none transition-all focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <div class="flex justify-between items-center mb-1.5">
            <label class="text-xs font-semibold text-zinc-300">Senha</label>
            <a href="#" class="text-[11px] text-blue-400 hover:text-blue-300 transition-colors">Esqueceu?</a>
          </div>
          <input 
            v-model="senha"
            type="password" 
            required
            placeholder="••••••••"
            class="w-full px-4 py-2.5 text-xs bg-black/80 border border-zinc-800 focus:border-blue-500 rounded-xl text-white placeholder-zinc-600 outline-none transition-all focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <button 
          type="submit" 
          class="w-full py-3 px-4 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transform hover:-translate-y-0.5 cursor-pointer mt-2"
        >
          Entrar na Plataforma
        </button>
      </form>

      <!-- Rodapé do Card -->
      <div class="mt-6 text-center text-xs text-zinc-500">
        Ainda não tem uma conta? 
        <router-link to="/register" class="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
          Cadastre-se
        </router-link>
      </div>

    </div>

  </div>
</template>