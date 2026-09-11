import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import * as XLSX from 'xlsx'

export const useUploadStore = defineStore('upload', () => {
  const arquivo = ref(null)
  const dadosTratados = ref([])
  const colunas = ref([])
  const erro = ref('')

  const totalLinhas = computed(() => dadosTratados.value.length)
  const totalColunas = computed(() => colunas.value.length)

  function lerArquivo(file) {
    if (!file) return

    arquivo.value = file
    erro.value = ''

    const reader = new FileReader()

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })

        // Pega a primeira aba do arquivo
        const firstSheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[firstSheetName]

        // Converte para JSON
        const json = XLSX.utils.sheet_to_json(worksheet, { defval: '' })

        if (json.length === 0) {
          erro.value = 'O arquivo selecionado está vazio.'
          return
        }

        dadosTratados.value = json
        colunas.value = Object.keys(json[0] || {})
      } catch (err) {
        console.error('Erro ao ler planilha:', err)
        erro.value = 'Falha ao processar o arquivo. Certifique-se de ser um arquivo CSV ou Excel válido.'
      }
    }

    reader.onerror = () => {
      erro.value = 'Erro de leitura do arquivo no navegador.'
    }

    reader.readAsArrayBuffer(file)
  }

  function limpar() {
    arquivo.value = null
    dadosTratados.value = []
    colunas.value = []
    erro.value = ''
  }

  return {
    arquivo,
    dadosTratados,
    colunas,
    erro,
    totalLinhas,
    totalColunas,
    lerArquivo,
    limpar
  }
})