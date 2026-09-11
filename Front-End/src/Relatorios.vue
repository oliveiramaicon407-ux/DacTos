<script setup>
import { useUploadStore } from './stores/uploadStore'

const store = useUploadStore()
</script>

<template>
  <div class="fixed inset-0 z-50 min-h-screen w-screen bg-black text-white font-sans antialiased overflow-y-auto flex flex-col justify-between selection:bg-blue-600 selection:text-white">
    
    <!-- Navbar Superior -->
    <header class="w-full border-b border-zinc-800/80 bg-black/90 backdrop-blur-md sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold tracking-tight text-blue-500 hover:text-blue-400 transition-colors">
          DacTos
        </router-link>

        <router-link 
          to="/sidebar/upload" 
          class="h-9 px-4 text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-gray-300 hover:text-white rounded-md border border-zinc-800 transition-all flex items-center gap-2 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Ir para Upload
        </router-link>
      </div>
    </header>

    <!-- Conteúdo Principal do Relatório -->
    <main class="flex-1 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 w-full">
      
      <!-- Cabeçalho da Seção -->
      <div class="mb-8">
        <span class="px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-blue-400 bg-blue-950/60 border border-blue-800/50 rounded-full">
          Relatório
        </span>
        <h1 class="mt-3 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
          Resumo da Planilha
        </h1>
        <p class="mt-2 text-xs text-gray-400">
          Métricas consolidadas e estado dos dados processados na aplicação.
        </p>
      </div>

      <!-- Grid de Cards em Estilo Dark -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        <!-- Card 1: Linhas Carregadas -->
        <div class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl relative overflow-hidden">
          <div class="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>
          <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">Linhas carregadas</p>
          <p class="mt-3 text-4xl font-extrabold text-blue-500 font-mono">
            {{ store.totalLinhas }}
          </p>
        </div>

        <!-- Card 2: Colunas Identificadas -->
        <div class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl relative overflow-hidden">
          <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">Colunas</p>
          <p class="mt-3 text-4xl font-extrabold text-white font-mono">
            {{ store.totalColunas }}
          </p>
        </div>

        <!-- Card 3: Situação / Status Pinia -->
        <div class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">Situação</p>
            <div class="mt-3 flex items-center gap-2">
              <span 
                class="w-2.5 h-2.5 rounded-full"
                :class="store.totalLinhas ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'"
              ></span>
              <p class="text-sm font-semibold text-gray-200">
                {{ store.totalLinhas ? 'Dados disponíveis no Pinia' : 'Nenhuma planilha carregada' }}
              </p>
            </div>
          </div>
          
          <div v-if="store.totalLinhas" class="mt-4 pt-3 border-t border-zinc-900 text-[11px] text-emerald-400 font-mono">
            Pronto para gerar relatórios
          </div>
        </div>

      </div>
    </main>

    <!-- Rodapé -->
    <footer class="py-6 text-center text-xs text-gray-600 border-t border-zinc-900">
      <p>© 2026 DacTos. Todos os direitos reservados.</p>
    </footer>

  </div>
</template>