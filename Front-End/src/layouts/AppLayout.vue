<!-- src/layouts/AppLayout.vue -->
<template>
  <div class="min-h-screen bg-black text-white flex font-sans antialiased">
    
    <!-- Sidebar Lateral Fixa -->
    <aside class="w-64 border-r border-zinc-800/80 bg-zinc-950 flex flex-col justify-between shrink-0 min-h-screen">
      <div>
        <!-- Brand / Header da Sidebar -->
        <div class="p-6 border-b border-zinc-800/80 flex items-center justify-between">
          <router-link to="/" class="text-xl font-bold text-blue-500 hover:text-blue-400 transition-colors">
            DacTos
          </router-link>
          <span class="px-2 py-0.5 text-[10px] font-mono font-semibold text-blue-400 bg-blue-950/60 border border-blue-800/50 rounded-full">
            v1.0
          </span>
        </div>

        <!-- Menu de Navegação -->
        <nav class="p-4 space-y-1.5">
          <span class="px-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 block mb-2">
            Mapeamento & Ingestão
          </span>

          <router-link 
            to="/sidebar/upload" 
            class="flex items-center gap-3 px-3.5 py-2.5 text-xs font-semibold rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all group"
            active-class="bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-lg shadow-blue-500/5"
          >
            <svg class="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            Pipeline / Upload
          </router-link>

          <span class="px-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 block mt-6 mb-2">
            Visualização
          </span>

          <router-link 
            to="/sidebar/graficos" 
            class="flex items-center gap-3 px-3.5 py-2.5 text-xs font-semibold rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all group"
            active-class="bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-lg shadow-blue-500/5"
          >
            <svg class="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            Dashboard & Gráficos
          </router-link>

          <router-link 
            to="/sidebar/relatorios" 
            class="flex items-center gap-3 px-3.5 py-2.5 text-xs font-semibold rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all group"
            active-class="bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-lg shadow-blue-500/5"
          >
            <svg class="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Relatórios
          </router-link>
        </nav>
      </div>

      <!-- Rodapé do Menu (Informações do Usuário & Sair) -->
      <div class="p-4 border-t border-zinc-800/80 space-y-3">
        
        <!-- Bloco de Identificação do Usuário Logado -->
        <div v-if="authStore.usuario" class="flex items-center gap-3 px-2 py-1.5 bg-zinc-900/60 rounded-xl border border-zinc-800/60">
          <div class="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-xs shrink-0">
            {{ authStore.usuario.charAt(0).toUpperCase() }}
          </div>
          <div class="overflow-hidden">
            <p class="text-[10px] text-zinc-400">Conectado como</p>
            <p class="text-xs font-mono text-zinc-200 truncate" :title="authStore.usuario">
              {{ authStore.usuario }}
            </p>
          </div>
        </div>

        <!-- Botão de Sair / Logout -->
        <button 
          @click="fazerLogout"
          class="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all border border-transparent hover:border-red-500/20"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          Encerrar Sessão
        </button>

        <!-- Voltar para a Landing Page -->
        <router-link 
          to="/" 
          class="flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Voltar para Home
        </router-link>

      </div>
    </aside>

    <!-- Área Principal que Renderiza as Views (Upload, Graficos, Relatorios) -->
    <main class="flex-1 overflow-y-auto min-h-screen bg-black">
      <router-view />
    </main>

  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

function fazerLogout() {
  authStore.logout()
  router.push('/login') // Ou para a rota de login configurada no projeto
}
</script>

