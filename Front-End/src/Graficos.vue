
<!-- src/Views/DashboardView.vue -->

<script setup>
import { computed } from 'vue'
import { useUploadStore } from '../stores/uploadStore'

const store = useUploadStore()

// RESULTADO DA ANÁLISE PYTHON

const analise = computed(() => {
  return store.resultadoAnalise
})

const faturamentoTotal = computed(() => {
  return analise.value?.faturamento_total ?? 0
})

const faturamentoMedio = computed(() => {
  return analise.value?.faturamento_medio ?? 0
})

const totalAnalisado = computed(() => {
  return analise.value?.total_clientes ?? store.totalClientes
})

const segmentoPrincipal = computed(() => {
  return analise.value?.segmento_principal || 'Não definido'
})

const insights = computed(() => {
  return analise.value?.insights || []
})

// FORMATAR VALORES EM REAIS

function formatarMoeda(valor) {
  return Number(valor || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

// DADOS DOS SEGMENTOS

const dadosSegmentos = computed(() => {

  if (!store.temDados) {

    return [
      { nome: 'Indústria', valor: 78, cor: 'from-blue-500 to-indigo-600' },
      { nome: 'Comércio', valor: 56, cor: 'from-emerald-500 to-teal-600' },
      { nome: 'Serviços', valor: 68, cor: 'from-amber-500 to-orange-600' }
    ]
  }

  const contagem = {}

  store.dadosTratados.forEach(cliente => {

    const seg = cliente.segmento || 'Outros'

    contagem[seg] = (contagem[seg] || 0) + 1
  })

  const cores = [
    'from-blue-500 to-indigo-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-purple-500 to-pink-600',
    'from-rose-500 to-red-600',
    'from-cyan-500 to-blue-600'
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

    <!-- CABEÇALHO -->

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


    <!-- INDICADORES PYTHON -->

    <div
      v-if="analise"
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
    >

      <!-- TOTAL CLIENTES -->

      <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

        <p class="text-sm text-zinc-400">
          Clientes analisados
        </p>

        <h2 class="text-2xl font-bold text-white mt-2">
          {{ totalAnalisado }}
        </h2>

      </div>


      <!-- FATURAMENTO TOTAL -->

      <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

        <p class="text-sm text-zinc-400">
          Faturamento total
        </p>

        <h2 class="text-2xl font-bold text-emerald-400 mt-2">
          {{ formatarMoeda(faturamentoTotal) }}
        </h2>

      </div>


      <!-- FATURAMENTO MÉDIO -->

      <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

        <p class="text-sm text-zinc-400">
          Faturamento médio
        </p>

        <h2 class="text-2xl font-bold text-blue-400 mt-2">
          {{ formatarMoeda(faturamentoMedio) }}
        </h2>

      </div>


      <!-- SEGMENTO PRINCIPAL -->

      <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

        <p class="text-sm text-zinc-400">
          Segmento principal
        </p>

        <h2 class="text-2xl font-bold text-purple-400 mt-2">
          {{ segmentoPrincipal }}
        </h2>

      </div>

    </div>


    <!-- AVISO QUANDO AINDA NÃO EXISTE ANÁLISE -->

    <div
      v-else
      class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
    >

      <p class="text-sm text-zinc-400">
        Envie uma planilha para visualizar os indicadores da análise Python.
      </p>

    </div>


    <!-- GRÁFICO DE SEGMENTOS -->

    <div class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 md:p-8 shadow-2xl space-y-6">

      <div class="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800/80 pb-4 gap-2">

        <div>

          <h2 class="text-base font-semibold text-zinc-200">
            Volume por Segmento
          </h2>

          <p class="text-xs text-zinc-500">

            {{ store.temDados
              ? 'Dados extraídos da planilha enviada'
              : 'Visualização de exemplo (envie uma planilha para dinamizar)'
            }}

          </p>

        </div>

        <span class="text-xs font-mono px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg w-fit">

          Total:
          {{ store.temDados ? store.totalClientes : 134 }}
          registros

        </span>

      </div>


      <!-- BARRAS DOS SEGMENTOS -->

      <div class="space-y-6 pt-2">

        <div
          v-for="item in dadosSegmentos"
          :key="item.nome"
          class="space-y-2"
        >

          <div class="flex justify-between items-center text-sm">

            <span class="font-medium text-zinc-300 flex items-center gap-2">

              <span class="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>

              {{ item.nome }}

            </span>

            <span class="font-mono font-bold text-white bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800/60 text-xs">

              {{ item.valor }} un.

            </span>

          </div>


          <!-- BARRA -->

          <div class="h-4 overflow-hidden rounded-full bg-zinc-900 border border-zinc-800/50 p-0.5">

            <div
              class="h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out shadow-lg"
              :class="item.cor"
              :style="{
                width: Math.min(
                  (item.valor / (store.totalClientes || 100)) * 100,
                  100
                ) + '%'
              }"
            ></div>

          </div>

        </div>

      </div>

    </div>


    <!-- INSIGHTS PYTHON -->

    <div
      v-if="analise && insights.length"
      class="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 space-y-4"
    >

      <div>

        <h2 class="text-lg font-semibold text-zinc-200">
          Insights da análise Python
        </h2>

        <p class="text-xs text-zinc-500 mt-1">
          Informações geradas pelo serviço de análise.
        </p>

      </div>


      <div class="space-y-3">

        <div
          v-for="(insight, index) in insights"
          :key="index"
          class="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4"
        >

          <p class="text-sm text-zinc-300">

            {{ typeof insight === 'string'
              ? insight
              : JSON.stringify(insight)
            }}

          </p>

        </div>

      </div>

    </div>

  </div>

</template>
