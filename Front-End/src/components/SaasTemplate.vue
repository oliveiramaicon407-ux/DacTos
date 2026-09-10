<!-- src/components/SaasTemplate.vue -->
<template>
  <div class="min-h-screen bg-black text-white font-sans antialiased">
    
    <!-- Navegação -->
    <header class="fixed top-0 w-full z-50 border-b border-blue-900/40 bg-black/80 backdrop-blur-md">
      <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"> 
        
        <router-link to="/" class="text-xl font-bold text-blue-500 hover:text-blue-400 transition-colors z-10">
          DacTos
        </router-link>

        <div class="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#upload-section" class="text-sm text-gray-300 hover:text-white transition-colors">Começar</a>
          <a href="#upload-section" class="text-sm text-gray-300 hover:text-white transition-colors">Documentação</a>
        </div>

        <div class="hidden md:flex items-center gap-4">
          <button @click="$router.push('/login')" class="h-10 px-5 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-all shadow-lg cursor-pointer">
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
          <a href="#upload-section" @click="mobileMenuOpen = false" class="text-sm text-gray-300 hover:text-white py-2">Começar</a>
          <a href="#upload-section" @click="mobileMenuOpen = false" class="text-sm text-gray-300 hover:text-white py-2">Documentação</a>
          <div class="flex flex-col gap-2 pt-4 border-t border-zinc-800">
            <button @click="$router.push('/login')" class="h-10 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md text-left">Entrar</button>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-32 pb-16 overflow-hidden animate-fade-in">
      <div class="flex flex-col items-center justify-center w-full max-w-4xl text-center">
        
        <span class="px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 bg-blue-950/60 border border-blue-800/50 rounded-full mb-6">
          Análise de Dados Inteligente
        </span>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent leading-tight">
          Transforme suas planilhas em insights estratégicos
        </h1>
        
        <p class="text-base md:text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
          Faça upload de arquivos CSV ou Excel e visualize métricas, gráficos e análises detalhadas de forma automatizada.
        </p>

        <div class="flex flex-row items-center gap-4">
          <a href="#upload-section" class="h-12 px-8 flex items-center justify-center text-base font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all shadow-lg hover:shadow-blue-500/25">
            Analisar Agora
          </a>
          <a href="#upload-section" class="h-12 px-8 flex items-center justify-center text-base font-medium bg-zinc-900 text-gray-300 hover:bg-zinc-800 hover:text-white rounded-lg transition-all border border-zinc-800">
            Ver Documentação
          </a>
        </div>
      </div>
    </section>

    <!-- Seção de Upload (Tema Dark Padronizado) -->
    <section id="upload-section" class="bg-zinc-950 py-16 px-4 sm:px-6 border-t border-zinc-800/80 w-full">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-bold mb-3 text-white">
          Upload de Dados
        </h2>
        <p class="text-sm text-gray-400 mb-8">
          Suporta formatos .csv, .xlsx e .xls
        </p>

        <input 
          type="file" 
          ref="fileInput" 
          @change="handleFileUpload" 
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
          class="hidden" 
        />

        <!-- Zona de Drop/Upload -->
        <div 
          @click="triggerFileInput"
          class="border-2 border-dashed border-zinc-700 hover:border-blue-500 bg-zinc-900/50 hover:bg-zinc-900 rounded-xl p-8 transition-all cursor-pointer flex flex-col items-center justify-center gap-4 group"
        >
          <div class="p-4 bg-zinc-800/80 rounded-full group-hover:bg-blue-600/10 transition-colors">
            <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
          </div>

          <div>
            <p class="text-base font-medium text-gray-200">
              {{ selectedFileName ? 'Clique para trocar o arquivo' : 'Clique para selecionar uma planilha' }}
            </p>
            <p v-if="selectedFileName" class="text-xs text-blue-400 font-semibold mt-1">
              Selecionado: {{ selectedFileName }}
            </p>
          </div>
        </div>

        <!-- Ação de Processamento -->
        <div v-if="selectedFileName" class="mt-6 flex justify-center">
          <button 
            @click="uploadFile" 
            class="bg-green-600 hover:bg-green-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg shadow-green-900/20 transition cursor-pointer flex items-center gap-2"
          >
            <span>Processar Dados</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
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
      mobileMenuOpen: false,
      selectedFile: null,
      selectedFileName: ''
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        this.selectedFile = file
        this.selectedFileName = file.name
      }
      event.target.value = ''
    },
    uploadFile() {
      if (!this.selectedFile) return
      
      alert(`Arquivo "${this.selectedFileName}" pronto para ser processado!`)
      // Integração com Supabase Storage / Edge Functions pode entrar aqui
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