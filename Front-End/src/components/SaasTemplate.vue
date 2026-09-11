<!-- src/components/SaasTemplate.vue -->
<template>
  <div class="min-h-screen bg-black text-white font-sans antialiased selection:bg-blue-600 selection:text-white">
    
    <!-- Navegação -->
    <header class="fixed top-0 w-full z-50 border-b border-blue-900/40 bg-black/80 backdrop-blur-md">
      <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"> 
        
        <router-link to="/" class="text-xl font-bold text-blue-500 hover:text-blue-400 transition-colors z-10">
          DacTos
        </router-link>

        <div class="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#recursos" class="text-sm text-gray-300 hover:text-white transition-colors">Recursos</a>
          <router-link to="/login" class="text-sm text-gray-300 hover:text-white transition-colors">Pipeline</router-link>
        </div>

        <div class="hidden md:flex items-center gap-4">
          <button 
            @click="$router.push('/login')" 
            class="h-10 px-5 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-blue-500/50 cursor-pointer"
          >
            Entrar
          </button>
        </div>

        <!-- Botão Menu Mobile -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-300 hover:text-white" aria-label="Toggle menu">
          <svg v-if="mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </nav>

      <!-- Menu Mobile -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-zinc-950 border-t border-zinc-800">
        <div class="px-6 py-4 flex flex-col gap-4">
          <a href="#recursos" @click="mobileMenuOpen = false" class="text-sm text-gray-300 hover:text-white py-2">Recursos</a>
          <router-link to="/login" @click="mobileMenuOpen = false" class="text-sm text-gray-300 hover:text-white py-2">Pipeline</router-link>
          <div class="flex flex-col gap-2 pt-4 border-t border-zinc-800">
            <button 
              @click="$router.push('/login')" 
              class="h-10 px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-md text-left transition-all duration-300"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-32 pb-16 overflow-hidden animate-fade-in">
      <div class="flex flex-col items-center justify-center w-full max-w-4xl text-center">
        
        <span class="px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 bg-blue-950/60 border border-blue-800/50 rounded-full mb-6">
          Análise de Dados Inteligente
        </span>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent leading-tight">
          Transforme suas planilhas em insights estratégicos
        </h1>
        
        <p class="text-base md:text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
          Faça a ingestão de arquivos CSV ou Excel e visualize métricas, relatórios e pipelines detalhados de forma automatizada.
        </p>

        <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <!-- Botão redirecionando para a rota interna da Sidebar -->
          <router-link 
            to="/login" 
            class="w-full sm:w-auto h-12 px-8 flex items-center justify-center text-base font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-blue-500/50"
          >
            Analisar Agora
          </router-link>

          <a 
            href="#recursos" 
            class="w-full sm:w-auto h-12 px-8 flex items-center justify-center text-base font-medium bg-zinc-900 text-gray-300 hover:bg-zinc-800 hover:text-white rounded-lg transition-all duration-300 border border-zinc-800 hover:border-zinc-700 transform hover:scale-105"
          >
            Conhecer Recursos
          </a>
        </div>
      </div>
    </section>

    <!-- Seção de Recursos -->
    <section id="recursos" class="bg-zinc-950 py-20 px-4 sm:px-6 border-t border-zinc-800/80 w-full">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4">
            Por que usar o DacTos Engine?
          </h2>
          <p class="text-sm text-gray-400 max-w-xl mx-auto">
            Uma plataforma de ingestão construída para performance, clareza e alta reatividade de dados.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 rounded-2xl bg-black border border-zinc-800/80 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1">
            <div class="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Processamento Rápido</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              Análise e leitura de colunas instantânea diretamente na memória do navegador.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black border border-zinc-800/80 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1">
            <div class="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Prévia em Tempo Real</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              Visualize dados estruturados, contagem de registros e colunas em uma tabela limpa.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-black border border-zinc-800/80 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1">
            <div class="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s-8-1.79-8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Estado Reativo (Pinia)</h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              Persistência de dados consistente para transições fluidas entre relatórios.
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'SaasTemplate',
  data() {
    return {
      mobileMenuOpen: false
    }
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>