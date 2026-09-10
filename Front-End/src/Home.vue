<!-- src/Home.vue -->
<template>
  <div class="min-h-screen bg-black text-white font-sans antialiased w-full overflow-x-hidden selection:bg-blue-600 selection:text-white">
    
    <!-- Navbar / Cabeçalho -->
    <header class="fixed top-0 w-full z-50 border-b border-zinc-800/80 bg-black/80 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative">
        <router-link to="/" class="text-xl font-bold tracking-tight text-blue-500 hover:text-blue-400 transition-colors">
          DacTos
        </router-link>
        
        <!-- Menu Desktop -->
        <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#sobre" class="hover:text-white transition-colors">Sobre</a>
          <a href="#recursos" class="hover:text-white transition-colors">Recursos</a>
          <router-link to="/register" class="hover:text-white transition-colors">Registre-se</router-link>
          <router-link to="/saas" class="h-9 px-4 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-all flex items-center shadow-lg shadow-blue-600/20">
            Acessar Plataforma
          </router-link>
        </nav>

        <!-- Botão Menu Mobile -->
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="md:hidden text-gray-400 hover:text-white focus:outline-none p-2 rounded-lg"
          aria-label="Abrir menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Menu Mobile Dropdown -->
        <transition 
          enter-active-class="transition duration-150 ease-out" 
          enter-from-class="opacity-0 scale-95" 
          enter-to-class="opacity-100 scale-100" 
          leave-active-class="transition duration-100 ease-in" 
          leave-from-class="opacity-100 scale-100" 
          leave-to-class="opacity-0 scale-95"
        >
          <div v-if="isMenuOpen" class="absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-2xl md:hidden z-50 flex flex-col p-6 space-y-4 text-sm font-medium text-gray-300">
            <a href="#sobre" class="hover:text-white py-1" @click="isMenuOpen = false">Sobre</a>
            <a href="#recursos" class="hover:text-white py-1" @click="isMenuOpen = false">Recursos</a>
            <router-link to="/register" class="hover:text-white py-1" @click="isMenuOpen = false">Registre-se</router-link>
            <router-link to="/saas" class="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-md" @click="isMenuOpen = false">
              Acessar Plataforma
            </router-link>
          </div>
        </transition>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden">
      
      <!-- Canvas Animado de Partículas -->
      <canvas ref="particleCanvas" class="absolute inset-0 z-0 pointer-events-none opacity-40"></canvas>

      <!-- Glow de Fundo e Grid -->
      <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/20 blur-[130px] rounded-full"></div>
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div class="relative max-w-4xl mx-auto text-center z-10">
        <span class="px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 bg-blue-950/60 border border-blue-800/50 rounded-full mb-6 inline-block">
          Plataforma de Inteligência de Dados
        </span>

        <h1 class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent">
          Experencie a transformação de dados digitais
        </h1>
        
        <p class="mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Nossa plataforma oferece insights estratégicos em tempo real, permitindo que você tome decisões informadas e impulsione o crescimento do seu negócio.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <router-link to="/saas" class="w-full sm:w-auto h-12 px-8 flex items-center justify-center text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all shadow-lg shadow-blue-600/25">
            Testar Plataforma
          </router-link>
          <a href="#sobre" class="w-full sm:w-auto h-12 px-8 flex items-center justify-center text-sm font-medium bg-zinc-900 text-gray-300 hover:bg-zinc-800 hover:text-white rounded-lg transition-all border border-zinc-800">
            Saiba Mais
          </a>
        </div>
      </div>
    </section>

    <!-- Seção Sobre Nós -->
    <section id="sobre" class="py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full border-t border-zinc-900">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-xs font-semibold uppercase tracking-wider text-blue-500">Sobre a DacTos</span>
          <h2 class="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4 leading-snug">
            Transformando dados brutos em decisões inteligentes
          </h2>
          <p class="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
            A DacTos nasceu para simplificar a análise de dados e tornar a inteligência de negócios acessível para empresas de todos os tamanhos.
          </p>
          <p class="text-gray-400 leading-relaxed text-sm sm:text-base">
            Nossa missão é eliminar a complexidade no tratamento de planilhas e bancos de dados NoSQL, entregando dashboards claros e insights estratégicos em tempo real.
          </p>
        </div>

        <!-- Componente Visual Tech (Substitui foto genérica) -->
        <div class="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm relative overflow-hidden shadow-2xl">
          <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span class="text-xs text-gray-500 font-mono">DacTos Engine v2.0</span>
          </div>
          
          <div class="space-y-4 font-mono text-xs">
            <div class="p-3 bg-zinc-950/80 rounded-lg border border-zinc-800/80 flex justify-between items-center">
              <span class="text-gray-400">> Planilha_Vendas.xlsx</span>
              <span class="text-emerald-400 font-semibold">Processado ✓</span>
            </div>
            <div class="p-3 bg-zinc-950/80 rounded-lg border border-zinc-800/80 flex justify-between items-center">
              <span class="text-gray-400">> Query_NoSQL_Database</span>
              <span class="text-blue-400 font-semibold">2ms latency</span>
            </div>
            <div class="p-4 bg-blue-950/30 border border-blue-800/40 rounded-lg">
              <p class="text-blue-300 font-sans font-medium text-xs mb-1">Insight Automático Gerado:</p>
              <p class="text-gray-300 font-sans text-xs">Crescimento de 34% identificado nos dados processados para o último trimestre.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Recursos -->
    <section id="recursos" class="py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full border-t border-zinc-900">
      <div class="text-center mb-16">
        <span class="text-xs font-semibold uppercase tracking-wider text-blue-500">Recursos Principais</span>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
          A PLATAFORMA DEFINITIVA PARA ANÁLISE DE DADOS
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Card 1 -->
        <div class="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-blue-500/50 transition duration-300 group">
          <div class="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 class="text-base font-semibold text-white mb-2">Processamento Real-Time</h3>
          <p class="text-xs text-gray-400 leading-relaxed">Análise em tempo real de dados avançados com respostas instantâneas.</p>
        </div>

        <!-- Card 2 -->
        <div class="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-blue-500/50 transition duration-300 group">
          <div class="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
          <h3 class="text-base font-semibold text-white mb-2">Conectividade Global</h3>
          <p class="text-xs text-gray-400 leading-relaxed">Integração simplificada entre times e compartilhamento de relatórios.</p>
        </div>

        <!-- Card 3 -->
        <div class="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-blue-500/50 transition duration-300 group">
          <div class="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
          <h3 class="text-base font-semibold text-white mb-2">Insights Inteligentes</h3>
          <p class="text-xs text-gray-400 leading-relaxed">Dashboards customizáveis voltados para tomadas de decisão rápidas.</p>
        </div>

        <!-- Card 4 -->
        <div class="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-blue-500/50 transition duration-300 group">
          <div class="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <h3 class="text-base font-semibold text-white mb-2">Alta Performance</h3>
          <p class="text-xs text-gray-400 leading-relaxed">Aceleração no tratamento de dados de ponta a ponta sem travamentos.</p>
        </div>
      </div>
    </section>

    <!-- Banner CTA Inferior -->
    <section class="relative py-20 px-4 sm:px-6 overflow-hidden w-full border-t border-zinc-900 bg-zinc-950">
      <div class="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        <span class="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">Lançamento</span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">DacTos 2026</h2>
        <p class="text-gray-400 max-w-md text-sm mb-8 leading-relaxed">
          A nova era do processamento inteligente de dados. Uma interface fluida construída para escalar sua operação.
        </p>
        <router-link to="/saas" class="h-11 px-8 flex items-center justify-center text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all shadow-lg shadow-blue-600/20">
          Acessar a Aplicação Agora
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-gray-500 py-10 px-4 sm:px-6 text-xs border-t border-zinc-900 w-full">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <p class="font-bold text-gray-300 text-sm mb-1">DacTos</p>
          <p>© 2026 Todos os direitos reservados.</p>
        </div>
        <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-gray-400">
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
      isMenuOpen: false,
      animationFrameId: null
    }
  },
  mounted() {
    this.initParticles()
  },
  beforeUnmount() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId)
    }
  },
  methods: {
    initParticles() {
      const canvas = this.$refs.particleCanvas
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      let width = (canvas.width = canvas.parentElement.offsetWidth)
      let height = (canvas.height = canvas.parentElement.offsetHeight)

      const handleResize = () => {
        if (!canvas.parentElement) return
        width = canvas.width = canvas.parentElement.offsetWidth
        height = canvas.height = canvas.parentElement.offsetHeight
      }
      window.addEventListener('resize', handleResize)

      const particlesCount = Math.floor((width * height) / 15000)
      const particles = []

      for (let i = 0; i < particlesCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.5 + 1
        })
      }

      const animate = () => {
        ctx.clearRect(0, 0, width, height)

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          p.x += p.vx
          p.y += p.vy

          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1

          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fillStyle = '#3b82f6'
          ctx.fill()

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j]
            const dx = p.x - p2.x
            const dy = p.y - p2.y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < 120) {
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist / 120})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        }

        this.animationFrameId = requestAnimationFrame(animate)
      }

      animate()
    }
  }
}
</script>