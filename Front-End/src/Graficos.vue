<!-- src/Views/DashboardView.vue -->
<script setup>
import { computed } from 'vue'
import { useUploadStore } from './stores/uploadStore'

const store = useUploadStore()

// Dados dinâmicos baseados no upload ou fallback com dados de exemplo se estiver vazio
const dadosSegmentos = computed(() => {
  if (!store.temDados) {
    return [
      { nome: 'Indústria', valor: 78, cor: 'from-blue-500 to-indigo-600' },
      { nome: 'Comércio', valor: 56, cor: 'from-emerald-500 to-teal-600' },
      { nome: 'Serviços', valor: 68, cor: 'from-amber-500 to-orange-600' }
    ]
  }

  // Conta os segmentos dinamicamente da planilha carregada
  const contagem = {}
  store.dadosTratados.forEach(c => {
    const seg = c.segmento || 'Outros'
    contagem[seg] = (contagem[seg] || 0) + 1
  })

  const cores = [
    'from-blue-500 to-indigo-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-purple-500 to-pink-600'
  ]

  return Object.keys(contagem).map((nome, index) => ({
    nome,
    valor: contagem[nome],
    cor: cores[index % cores.length]
  }))
})
</script>

<template>
  <div class="p-6 md:p-10 max-w-7xl mx-auto space-y-8 animate-fade-in">
    
    <!-- Cabeçalho -->
    <div class="text-center md:text-left">
      <span class="px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 bg-blue-950/60 border border-blue-800/50 rounded-full inline-block mb-3">
        Analytics & Insights
      </span>
      <h1 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        Visão dos Segmentos
      </h1>
      <p class="mt-2 text-sm text-gray-400 max-w-2xl">
        Distribuição estatística dos registros agrupados por setor de atuação.
      </p>
    </div>

    <!-- Card Principal do Gráfico -->
    <div class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 md:p-8 shadow-2xl space-y-6">
      
      <div class="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800/80 pb-4 gap-2">
        <div>
          <h2 class="text-base font-semibold text-zinc-200">Volume por Segmento</h2>
          <p class="text-xs text-zinc-500">
            {{ store.temDados ? 'Dados extraídos da planilha enviada' : 'Visualização de exemplo (envie uma planilha para dinamizar)' }}
          </p>
        </div>
        <span class="text-xs font-mono px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg w-fit">
          Total: {{ store.temDados ? store.totalClientes : '134' }} registros
        </span>
      </div>

      <!-- Barras de Progresso Customizadas e Estilosas -->
      <div class="space-y-6 pt-2">
        <div v-for="item in dadosSegmentos" :key="item.nome" class="space-y-2">
          
          <div class="flex justify-between items-center text-sm">
            <span class="font-medium text-zinc-300 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
              {{ item.nome }}
            </span>
            <span class="font-mono font-bold text-white bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800/60 text-xs">
              {{ item.valor }} un.
            </span>
          </div>

          <!-- Barra de Fundo -->
          <div class="h-4 overflow-hidden rounded-full bg-zinc-900 border border-zinc-800/50 p-0.5">
            <div
              class="h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out shadow-lg"
              :class="item.cor"
              :style="{ width: Math.min((item.valor / (store.totalClientes || 100)) * 100, 100) + '%' }"
            ></div>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>