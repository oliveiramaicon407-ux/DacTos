<!-- src/components/SaasTemplate.vue -->
<template>
  <div class="min-h-screen bg-black text-white font-sans antialiased">
    
    <!-- Navegação (Menu Superior) -->
    <header class="fixed top-0 w-full z-50 border-b border-blue-800/50 bg-black/80 backdrop-blur-md">
      <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">       
        
        <!-- LINK ADICIONADO AQUI: Permite voltar para a página Home -->
        <router-link to="/" class="text-xl font-bold text-blue-500 hover:text-gray-300 transition-colors z-10">
          DacTos Home
        </router-link>

        <div class="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#getting-started" class="text-sm text-cyan-400 hover:text-white transition-colors">Começar</a>
          <a href="#documentation" class="text-sm text-cyan-400 hover:text-white transition-colors">Documentação</a>
        </div>

        <div class="hidden md:flex items-center gap-4">
          <button class="h-10 px-5 text-base font-medium bg-gradient-to-b from-white via-white/95 to-cyan-600 text-black hover:scale-85 active:scale-75 rounded-md transition-all shadow-lg">Entrar</button>
        </div>

        <!-- Botão Menu Mobile -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-white" aria-label="Toggle menu">
          <svg v-if="mobileMenuOpen" xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <svg v-else xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </nav>

      <!-- Menu Mobile Aberto -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-black/95 backdrop-blur-md border-t border-blue-800/50">
        <div class="px-6 py-4 flex flex-col gap-4">
          <a href="#getting-started" @click="mobileMenuOpen = false" class="text-sm text-cyan-400 hover:text-white transition-colors py-2">Começar</a>
          <a href="#documentation" @click="mobileMenuOpen = false" class="text-sm text-cyan-400 hover:text-white transition-colors py-2">Documentação</a>
          <div class="flex flex-col gap-2 pt-4 border-t border-gray-800/50">
            <button class="h-10 px-4 py-2 text-sm font-medium hover:bg-blue-800/50 text-white rounded-md text-left">Entrar</button>
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

    <!-- Seção de Upload -->
    <section class="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 border-y border-gray-100 w-full text-gray-900">
      <div class="max-w-3xl mx-auto text-center">
        <span class="text-xs font-semibold uppercase tracking-wider text-blue-600">Upload</span>
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mt-2 mb-6">
          Faça upload de suas planilhas e obtenha insights estratégicos instantaneamente.
        </h2>

        <!-- Input de arquivo escondido que é disparado pelo botão -->
        <input 
          type="file" 
          ref="fileInput" 
          @change="handleFileUpload" 
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
          class="hidden" 
        />

        <button 
          @click="triggerFileInput" 
          class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition cursor-pointer"
        >
          {{ selectedFileName ? 'Trocar Arquivo' : 'Selecionar Arquivo' }}
        </button>

        <!-- Exibe o nome do arquivo selecionado e botão de envio -->
        <div v-if="selectedFileName" class="mt-4 flex flex-col items-center gap-2">
          <p class="text-sm text-gray-700 font-medium">
            Arquivo selecionado: <span class="text-blue-600 font-bold">{{ selectedFileName }}</span>
          </p>
          <button 
            @click="uploadFile" 
            class="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-lg shadow transition"
          >
            Enviar para o Sistema
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
      mobileMenuOpen: false,
      selectedFile: null,
      selectedFileName: ''
    }
  },
  methods: {
    // Aciona o input de arquivo invisível
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    // Captura o arquivo escolhido pelo usuário
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        this.selectedFile = file
        this.selectedFileName = file.name
      }
    },
    // Função chamada ao clicar em enviar
    uploadFile() {
      if (!this.selectedFile) return
      
      // Aqui você integrará com o Supabase ou sua lógica de envio
      alert(`Arquivo "${this.selectedFileName}" pronto para ser processado!`)
      
      // Exemplo de reset após envio:
      // this.selectedFile = null
      // this.selectedFileName = ''
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