```vue
<!-- src/Views/RelatoriosView.vue -->

<script setup>
import { computed } from 'vue'
import { useUploadStore } from './stores/uploadStore'

const store = useUploadStore()

// ------------------------------------
// FATURAMENTO TOTAL
// ------------------------------------

const faturamentoTotal = computed(() => {
  if (!store.temDados) return 'R$ 0,00'

  const total = store.dadosTratados.reduce((acc, cliente) => {
    const valor = Number(cliente.faturamento_anual || 0)
    return acc + valor
  }, 0)

  return total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
})

// ------------------------------------
// FATURAMENTO MÉDIO
// ------------------------------------

const faturamentoMedio = computed(() => {
  if (!store.temDados) return 'R$ 0,00'

  const total = store.dadosTratados.reduce((acc, cliente) => {
    return acc + Number(cliente.faturamento_anual || 0)
  }, 0)

  const media = total / store.dadosTratados.length

  return media.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
})

// ------------------------------------
// CLIENTES NÍVEL A
// ------------------------------------

const clientesNivelA = computed(() => {
  if (!store.temDados) return 0

  return store.dadosTratados.filter(
    cliente => String(cliente.nivel_cliente).toUpperCase() === 'A'
  ).length
})

// ------------------------------------
// PERCENTUAL NÍVEL A
// ------------------------------------

const percentualNivelA = computed(() => {
  if (!store.temDados) return '0%'

  const percentual =
    (clientesNivelA.value / store.dadosTratados.length) * 100

  return percentual.toFixed(1) + '%'
})

// ------------------------------------
// SEGMENTO PRINCIPAL
// ------------------------------------

const segmentoPrincipal = computed(() => {
  if (!store.temDados) return 'Nenhum'

  const contagem = {}

  store.dadosTratados.forEach(cliente => {
    const segmento = cliente.segmento || 'Não Definido'

    contagem[segmento] = (contagem[segmento] || 0) + 1
  })

  const resultado = Object.entries(contagem)
    .sort((a, b) => b[1] - a[1])

  return resultado.length ? resultado[0][0] : 'Nenhum'
})

// ------------------------------------
// DISTRIBUIÇÃO DOS NÍVEIS
// ------------------------------------

const distribuicaoNiveis = computed(() => {
  if (!store.temDados) return []

  const niveis = {}

  store.dadosTratados.forEach(cliente => {
    const nivel = cliente.nivel_cliente || 'Não Definido'

    niveis[nivel] = (niveis[nivel] || 0) + 1
  })

  return Object.entries(niveis)
    .sort((a, b) => a[0].localeCompare(b[0]))
})

// ------------------------------------
// DISTRIBUIÇÃO DOS SEGMENTOS
// ------------------------------------

const distribuicaoSegmentos = computed(() => {
  if (!store.temDados) return []

  const segmentos = {}

  store.dadosTratados.forEach(cliente => {
    const segmento = cliente.segmento || 'Não Definido'

    segmentos[segmento] = (segmentos[segmento] || 0) + 1
  })

  return Object.entries(segmentos)
    .sort((a, b) => b[1] - a[1])
})
</script>

<template>
  <div
    class="fixed inset-0 z-50 min-h-screen w-screen bg-black text-white font-sans antialiased overflow-y-auto flex flex-col"
  >

    <!-- Navbar -->
    <header
      class="w-full border-b border-zinc-800/80 bg-black/90 backdrop-blur-md sticky top-0 z-10"
    >
      <div
        class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
      >

        <router-link
          to="/"
          class="text-xl font-bold tracking-tight text-blue-500 hover:text-blue-400 transition-colors"
        >
          DacTos
        </router-link>

        <router-link
          to="/sidebar/upload"
          class="h-9 px-4 text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-gray-300 hover:text-white rounded-md border border-zinc-800 transition-all flex items-center gap-2"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>

          Ir para Upload

        </router-link>

      </div>
    </header>

    <!-- Conteúdo -->
    <main
      class="flex-1 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 w-full space-y-8"
    >

      <!-- Cabeçalho -->
      <div class="mb-8">

        <span
          class="px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-blue-400 bg-blue-950/60 border border-blue-800/50 rounded-full"
        >
          Relatório Executivo
        </span>

        <h1
          class="mt-3 text-3xl font-extrabold text-white tracking-tight sm:text-4xl"
        >
          Resumo da Planilha
        </h1>

        <p class="mt-2 text-xs text-gray-400">
          Indicadores calculados a partir dos dados reais da base de clientes.
        </p>

      </div>

      <!-- Cards principais -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <!-- Total Clientes -->
        <div
          class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl"
        >

          <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Total de Clientes
          </p>

          <p class="mt-3 text-4xl font-extrabold text-blue-500 font-mono">
            {{ store.totalClientes }}
          </p>

        </div>

        <!-- Faturamento Médio -->
        <div
          class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl"
        >

          <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Faturamento Médio
          </p>

          <p class="mt-3 text-2xl font-extrabold text-emerald-400 font-mono">
            {{ faturamentoMedio }}
          </p>

        </div>

        <!-- Clientes Nível A -->
        <div
          class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl"
        >

          <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Clientes Nível A
          </p>

          <p class="mt-3 text-4xl font-extrabold text-amber-500 font-mono">
            {{ clientesNivelA }}
          </p>

          <p class="mt-1 text-xs text-gray-500">
            {{ percentualNivelA }} da base
          </p>

        </div>

        <!-- Segmento Principal -->
        <div
          class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl"
        >

          <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Segmento Principal
          </p>

          <p class="mt-3 text-2xl font-extrabold text-purple-400">
            {{ segmentoPrincipal }}
          </p>

        </div>

      </div>

      <!-- Faturamento Total -->
      <div
        class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl"
      >

        <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Faturamento Anual Total
        </p>

        <p class="mt-3 text-3xl font-extrabold text-emerald-400 font-mono">
          {{ faturamentoTotal }}
        </p>

      </div>

      <!-- Análises -->
      <div class="grid gap-6 lg:grid-cols-2">

        <!-- Níveis -->
        <div
          class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6"
        >

          <h3 class="text-sm font-semibold text-zinc-300 mb-5">
            Distribuição por Nível
          </h3>

          <div class="space-y-4">

            <div
              v-for="[nivel, quantidade] in distribuicaoNiveis"
              :key="nivel"
              class="flex items-center justify-between"
            >

              <div class="flex items-center gap-3">

                <span
                  class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-bold text-blue-400"
                >
                  {{ nivel }}
                </span>

                <span class="text-sm text-zinc-300">
                  Nível {{ nivel }}
                </span>

              </div>

              <span class="text-sm font-mono text-zinc-400">
                {{ quantidade }} cliente(s)
              </span>

            </div>

          </div>

        </div>

        <!-- Segmentos -->
        <div
          class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6"
        >

          <h3 class="text-sm font-semibold text-zinc-300 mb-5">
            Distribuição por Segmento
          </h3>

          <div class="space-y-4">

            <div
              v-for="[segmento, quantidade] in distribuicaoSegmentos"
              :key="segmento"
              class="flex items-center justify-between"
            >

              <span class="text-sm text-zinc-300">
                {{ segmento }}
              </span>

              <span class="text-sm font-mono text-zinc-400">
                {{ quantidade }} cliente(s)
              </span>

            </div>

          </div>

        </div>

      </div>

      <!-- Colunas -->
      <div
        v-if="store.temDados"
        class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 space-y-4"
      >

        <h3 class="text-sm font-semibold text-zinc-300">
          Colunas Identificadas na Base
        </h3>

        <div class="flex flex-wrap gap-2">

          <span
            v-for="coluna in store.colunas"
            :key="coluna"
            class="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg text-xs font-mono"
          >
            {{ coluna }}
          </span>

        </div>

      </div>

    </main>

    <!-- Rodapé -->
    <footer
      class="py-6 text-center text-xs text-gray-600 border-t border-zinc-900"
    >
      <p>
        © 2026 DacTos. Todos os direitos reservados.
      </p>
    </footer>

  </div>
</template>
```
