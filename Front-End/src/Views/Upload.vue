<script setup>
import { useUploadStore } from '../stores/uploadStore'

const store = useUploadStore()

function handleFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    store.selecionarArquivo(file)
  }
}
</script>

<template>
  <div class="p-6 md:p-10 max-w-7xl mx-auto space-y-8 animate-fade-in">
    
    <div class="text-center md:text-left">
      <span class="px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 bg-blue-950/60 border border-blue-800/50 rounded-full inline-block mb-3">
        Pipeline de Ingestão
      </span>
      <h1 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        Enviar e Processar Planilha
      </h1>
      <p class="mt-2 text-sm text-gray-400 max-w-2xl">
        Faça o upload do seu arquivo para extração instantânea das colunas e contagem de registros.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      
      <div class="lg:col-span-2 rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl">
        <h2 class="text-sm font-semibold text-zinc-300 mb-4">Selecione o arquivo de dados</h2>
        
        <label class="relative flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 hover:border-blue-500/50 rounded-xl p-10 cursor-pointer transition-all bg-black/40 group">
          <input type="file" accept=".csv, .xlsx" class="hidden" @change="handleFileChange" />
          
          <div class="w-14 h-14 rounded-full bg-blue-950/40 border border-blue-800/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform mb-4">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
          </div>

          <p class="text-sm font-semibold text-zinc-200 group-hover:text-blue-400 transition-colors">
            {{ store.arquivo ? store.arquivo.name : 'Clique para selecionar uma planilha (.xlsx, .csv)' }}
          </p>
          <p class="text-xs text-zinc-500 mt-1">Formatos suportados: .csv, .xlsx</p>
        </label>

        <p v-if="store.carregando" class="mt-4 text-xs text-amber-400 animate-pulse font-semibold">
          Lendo arquivo... Por favor, aguarde.
        </p>

        <div v-if="store.erro" class="mt-4 p-3 bg-red-950/50 border border-red-800/50 rounded-lg text-xs text-red-400">
          {{ store.erro }}
        </div>
      </div>

      <div class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl space-y-5">
        <h2 class="text-xs font-semibold uppercase tracking-wider text-blue-400 border-b border-zinc-800/80 pb-3">
          Resumo da Ingestão
        </h2>

        <div>
          <span class="text-2xl font-black font-mono text-blue-500 block">
            {{ store.totalClientes }}
          </span>
          <span class="text-xs text-zinc-400">Total de clientes (linhas válidas)</span>
        </div>

        <div>
          <span class="text-2xl font-black font-mono text-emerald-400 block">
            {{ store.clientesNivelA }}
          </span>
          <span class="text-xs text-zinc-400">Clientes Nível A</span>
        </div>

        <div>
          <span class="text-2xl font-black font-mono text-red-400 block">
            {{ store.totalErros }}
          </span>
          <span class="text-xs text-zinc-400">Erros encontrados</span>
        </div>

        <button 
          v-if="store.arquivo"
          @click="store.limpar" 
          class="w-full py-2 px-4 text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 transition-colors"
        >
          Limpar Arquivo
        </button>
      </div>

    </div>

    <div v-if="store.temDados" class="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl overflow-hidden animate-fade-in">
      <h2 class="text-sm font-semibold text-zinc-300 mb-4">Prévia dos Dados Tratados</h2>
      
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs text-zinc-400">
          <thead class="bg-zinc-900 text-zinc-200 font-semibold border-b border-zinc-800">
            <tr>
              <th v-for="coluna in store.colunas" :key="coluna" class="p-3">
                {{ coluna }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-zinc-800/50">
            <tr v-for="(cliente, index) in store.dadosTratados.slice(0, 10)" :key="index" class="hover:bg-zinc-900/50 transition-colors">
              <td v-for="coluna in store.colunas" :key="coluna" class="p-3 text-zinc-300">
                {{ cliente[coluna] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-[10px] text-zinc-500 mt-3 text-right">Exibindo os primeiros registros de {{ store.totalClientes }} processados.</p>
    </div>

  </div>
</template>