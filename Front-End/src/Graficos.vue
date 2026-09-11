<script setup>
const dados = [
  { nome: 'Indústria', valor: 78 },
  { nome: 'Comércio', valor: 56 },
  { nome: 'Serviços', valor: 68 }
]
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <p class="text-sm font-semibold uppercase text-red-600">Dashboard</p>
    <h1 class="text-3xl font-bold text-slate-900">Visão dos segmentos</h1>

    <div class="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p class="mb-6 text-sm text-slate-500">
        Gráfico visual simples para a aula de Front-end. Depois poderá ser substituído por Chart.js.
      </p>

      <div class="space-y-5">
        <div v-for="item in dados" :key="item.nome">
          <div class="mb-1 flex justify-between text-sm">
            <span class="font-medium">{{ item.nome }}</span>
            <span>{{ item.valor }}</span>
          </div>

          <div class="h-3 overflow-hidden rounded-full bg-slate-200">
            <div
              class="h-full rounded-full bg-red-600"
              :style="{ width: item.valor + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
