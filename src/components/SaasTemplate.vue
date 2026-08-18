<!-- src/components/SaasTemplate.vue -->
<template>
  <div class="min-h-screen bg-black text-white font-sans antialiased">
    
    <!-- Navegação (Menu Superior) -->
    <header class="fixed top-0 w-full z-50 border-b border-gray-800/50 bg-black/80 backdrop-blur-md">
      <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">       
         
        
        <!-- LINK ADICIONADO AQUI: Permite voltar para a página Home -->
        <router-link to="/" class="text-xl font-bold text-white hover:text-gray-300 transition-colors z-10">
          DacTos Home
        </router-link>

        <div class="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#getting-started" class="text-sm text-white/60 hover:text-white transition-colors">Getting started</a>
          <a href="#components" class="text-sm text-white/60 hover:text-white transition-colors">Components</a>
          <a href="#documentation" class="text-sm text-white/60 hover:text-white transition-colors">Documentation</a>
        </div>

        <div class="hidden md:flex items-center gap-4">
          <button class="h-10 px-4 py-2 text-sm font-medium hover:bg-gray-800/50 text-white rounded-md transition-all">Entrar</button>
        </div>

        <!-- Botão Menu Mobile -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-white" aria-label="Toggle menu">
          <svg v-if="mobileMenuOpen" xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <svg v-else xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </nav>

      <!-- Menu Mobile Aberto -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50">
        <div class="px-6 py-4 flex flex-col gap-4">
          <a href="#getting-started" @click="mobileMenuOpen = false" class="text-sm text-white/60 hover:text-white transition-colors py-2">Getting started</a>
          <a href="#components" @click="mobileMenuOpen = false" class="text-sm text-white/60 hover:text-white transition-colors py-2">Components</a>
          <a href="#documentation" @click="mobileMenuOpen = false" class="text-sm text-white/60 hover:text-white transition-colors py-2">Documentation</a>
          <div class="flex flex-col gap-2 pt-4 border-t border-gray-800/50">
            <button class="h-10 px-4 py-2 text-sm font-medium hover:bg-gray-800/50 text-white rounded-md text-left">Entrar</button>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden animate-fade-in">
      <div class="flex flex-col items-center justify-center w-full max-w-7xl text-center">
        

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
          Desenvolva a interface do seu SaaS de forma fluida
        </h1>
        
        <p class="text-sm md:text-base text-gray-400 max-w-xl mb-8 leading-relaxed">
          Acelere o desenvolvimento do seu software usando parâmetros visuais otimizados criados para tecnologia moderna.
        </p>

        <div class="flex flex-row items-center gap-4">
          <button class="h-12 px-8 text-base font-medium bg-gradient-to-b from-white via-white/95 to-white/60 text-black hover:scale-105 active:scale-95 rounded-md transition-all shadow-lg">
            Começar Agora
          </button>
          <button class="h-12 px-8 text-base font-medium bg-gray-800 text-white hover:bg-gray-700 rounded-md transition-all border border-gray-700">
            Ver Docs
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'DacTosTemplate',
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
  animation: fadeIn 0.6s ease-out forwards;
}
</style>
