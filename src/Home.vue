<!-- src/Home.vue -->
<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans w-full overflow-x-hidden">
    
    <!-- Navbar / Cabeçalho -->
    <header class="border-b border-gray-100 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
      <div class="text-xl font-bold tracking-tight text-blue-600">DacTos</div>
      <nav class="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        <router-link to="/saas" class="text-blue-600 font-semibold hover:underline transition">
          Acessar Plataforma
        </router-link>
        <a href="#" class="hover:text-blue-600 transition">Sobre</a>
        <router-link to="/register" class="hover:text-blue-600 transition">Registre-se</router-link>
      </nav>
    </header>

    <!-- Hero Section (Preenche 100% da largura sem bordas laterais) -->
    <section class="relative w-full min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      <!-- Background cobrindo toda a extensão sem lacunas -->
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full" 
        style="background-image: url('./assets/banco-de-dados-nosql.jpg');">
        <img src='./assets/banco-de-dados-nosql.jpg' alt='Hero Image' class="w-full h-full object-cover">
      </div>

      <!-- Overlay escuro para leitura do texto -->
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- Conteúdo principal do Hero -->
      <div class="relative max-w-5xl mx-auto text-center z-10 px-6 py-20">
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-blue-500 drop-shadow-lg">
          Experencie a transformação de dados digitais
        </h1>
        <p class="mt-6 text-blue-200 text-base md:text-lg max-w-3xl mx-auto font-medium drop-shadow">
          Nossa plataforma oferece insights estratégicos em tempo real, permitindo que você tome decisões informadas e impulsione o crescimento do seu negócio.
        </p>
      </div>
    </section>

    <!-- Seção de Recursos / Grade de Imagens -->
    <section class="py-16 px-6 max-w-7xl mx-auto w-full">
      <div class="text-center mb-12">
        <span class="text-xs font-semibold uppercase tracking-wider text-blue-600">Nosso Recurso</span>
        <h2 class="text-2xl md:text-4xl font-bold text-black-900 mt-2">
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
    <section class="bg-gray-50 py-16 px-6 border-y border-gray-100 w-full">
      <div class="max-w-3xl mx-auto text-center">
        <span class="text-xs font-semibold uppercase tracking-wider text-blue-600">Upload</span>
        <h2 class="text-2xl md:text-3xl font-bold text-black mt-2 mb-6">
          Faça upload de suas planilhas e obtenha insights estratégicos instantaneamente.
        </h2>
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition">
          Selecionar Arquivo
        </button>
      </div>
    </section>

    <!-- Banner Inferior -->
    <section class="relative bg-slate-800 text-white py-20 px-6 overflow-hidden w-full">
      <div 
        class="absolute inset-0 opacity-20 bg-cover bg-center w-full h-full"
        style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80');">
      </div>
      <div class="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        <p class="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-2">Lançamento</p>
        <h2 class="text-4xl md:text-6xl font-black tracking-tight mb-4">DacTos 2026</h2>
        <p class="text-gray-300 max-w-md text-sm md:text-base">
          A nova era do processamento inteligente de dados. Uma interface fluida construída para escalar sua operação.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-950 text-gray-400 py-12 px-6 text-xs border-t border-gray-900 w-full">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p class="font-semibold text-gray-300 text-sm mb-1">DacTos</p>
          <p>© 2026 Todos os direitos reservados.</p>
        </div>
        <div class="flex space-x-6 text-gray-500">
          <p>suporte@dactos.com</p>
          <p>(00) 1234-5678</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>