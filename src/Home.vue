<!-- src/Home.vue -->
<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans w-full overflow-x-hidden">
    
    <!-- Navbar / Cabeçalho -->
    <header class="border-b border-gray-100 py-4 px-4 sm:px-6 max-w-7xl mx-auto w-full flex justify-between items-center relative">
      <div class="text-xl font-bold tracking-tight text-blue-600">DacTos</div>
      
      <!-- Menu Desktop -->
      <nav class="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        <router-link to="/saas" class="text-blue-600 font-semibold hover:underline transition">
          Acessar Plataforma
        </router-link>
        <a href="#sobre" class="hover:text-blue-600 transition">Sobre</a>
        <router-link to="/register" class="hover:text-blue-600 transition">Registre-se</router-link>
      </nav>

      <!-- Botão Menu Mobile -->
      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="md:hidden text-gray-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition"
        aria-label="Abrir menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Dropdown Mobile -->
      <transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <div v-if="isMenuOpen" class="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden z-50 flex flex-col p-4 space-y-3 font-medium text-sm text-gray-700">
          <router-link to="/saas" class="text-blue-600 font-semibold py-1 hover:bg-gray-50 rounded px-2" @click="isMenuOpen = false">
            Acessar Plataforma
          </router-link>
          <a href="#sobre" class="hover:text-blue-600 py-1 hover:bg-gray-50 rounded px-2" @click="isMenuOpen = false">Sobre</a>
          <router-link to="/register" class="hover:text-blue-600 py-1 hover:bg-gray-50 rounded px-2" @click="isMenuOpen = false">Registre-se</router-link>
        </div>
      </transition>
    </header>

    <!-- Hero Section -->
    <section class="relative w-full min-h-[450px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      <!-- Image Background -->
      <img src="./assets/banco-de-dados-nosql.jpg" alt="Hero Image" class="absolute inset-0 w-full h-full object-cover">

      <!-- Overlay escuro -->
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- Conteúdo do Hero -->
      <div class="relative max-w-5xl mx-auto text-center z-10 px-4 sm:px-6 py-16 sm:py-20">
        <h1 class="text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
          Experencie a transformação de dados digitais
        </h1>
        <p class="mt-4 sm:mt-6 text-blue-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-medium drop-shadow">
          Nossa plataforma oferece insights estratégicos em tempo real, permitindo que você tome decisões informadas e impulsione o crescimento do seu negócio.
        </p>
      </div>
    </section>

    <!-- Seção Sobre Nós -->
    <section id="sobre" class="py-16 px-4 sm:px-6 max-w-7xl mx-auto w-full border-b border-gray-100">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span class="text-xs font-semibold uppercase tracking-wider text-blue-600">Sobre A DacTos</span>
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">
            Transformando dados brutos em decisões inteligentes
          </h2>
          <p class="text-gray-600 mb-4 leading-relaxed">
            A DacTos nasceu para simplificar a análise de dados e tornar a inteligência de negócios acessível para empresas de todos os tamanhos.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Nossa missão é eliminar a complexidade no tratamento de planilhas e bancos de dados NoSQL, entregando dashboards claros e insights em tempo real.
          </p>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-lg bg-gray-100">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Nossa Equipe" class="w-full h-full object-cover">
        </div>
      </div>
    </section>

    <!-- Seção de Recursos / Grade de Imagens -->
    <section class="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      <div class="text-center mb-8 sm:mb-12">
        <span class="text-xs font-semibold uppercase tracking-wider text-blue-600">Nosso Recurso</span>
        <h2 class="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mt-2">
          A PLATAFORMA DEFINITIVA PARA ANÁLISE DE CLIENTES
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Card 1 -->
        <div class="group cursor-pointer">
          <div class="overflow-hidden rounded-lg aspect-video bg-gray-100 mb-3">
            <img src="./assets/analise.png" alt="Análise" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
          </div>
          <p class="text-sm text-gray-600 font-medium">Análise em tempo real de dados avançados.</p>
        </div>

        <!-- Card 2 -->
        <div class="group cursor-pointer">
          <div class="overflow-hidden rounded-lg aspect-video bg-gray-100 mb-3">
            <img src="./assets/lgpd-768x410.jpg" alt="Equipe" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
          </div>
          <p class="text-sm text-gray-600 font-medium">Conectividade global entre equipes externas.</p>
        </div>

        <!-- Card 3 -->
        <div class="group cursor-pointer">
          <div class="overflow-hidden rounded-lg aspect-video bg-gray-100 mb-3">
            <img src="./assets/tomada de decisao.jpg" alt="Métricas" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
          </div>
          <p class="text-sm text-gray-600 font-medium">Insights integrados para tomadas de decisão.</p>
        </div>

        <!-- Card 4 -->
        <div class="group cursor-pointer">
          <div class="overflow-hidden rounded-lg aspect-video bg-gray-100 mb-3">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Resultados" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
          </div>
          <p class="text-sm text-gray-600 font-medium">Aceleração de performance de ponta a ponta.</p>
        </div>
      </div>
    </section>

    <!-- Seção de Call to Action (Upload) -->
    <section class="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 border-y border-gray-100 w-full">
      <div class="max-w-3xl mx-auto text-center">
        <span class="text-xs font-semibold uppercase tracking-wider text-blue-600">Upload</span>
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-6">
          Faça upload de suas planilhas e obtenha insights estratégicos instantaneamente.
        </h2>
        <button class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition">
          Selecionar Arquivo
        </button>
      </div>
    </section>

    <!-- Banner Inferior -->
    <section class="relative bg-slate-800 text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden w-full">
      <div 
        class="absolute inset-0 opacity-20 bg-cover bg-center w-full h-full"
        style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80');">
      </div>
      <div class="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        <p class="text-xs sm:text-sm uppercase tracking-widest text-blue-400 font-semibold mb-2">Lançamento</p>
        <h2 class="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-4">DacTos 2026</h2>
        <p class="text-gray-300 max-w-md text-xs sm:text-sm md:text-base">
          A nova era do processamento inteligente de dados. Uma interface fluida construída para escalar sua operação.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-950 text-gray-400 py-8 sm:py-12 px-4 sm:px-6 text-xs border-t border-gray-900 w-full">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left">
        <div>
          <p class="font-semibold text-gray-300 text-sm mb-1">DacTos</p>
          <p>© 2026 Todos os direitos reservados.</p>
        </div>
        <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-gray-500">
          <p>suporte@dactos.com</p>
          <p>(00) 1234-5678</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      isMenuOpen: false
    }
  }
}
</script>