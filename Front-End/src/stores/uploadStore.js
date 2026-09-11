import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import * as XLSX from 'xlsx'

export const useUploadStore = defineStore('upload', () => {
  // --- STATE (Dados guardados) ---
  const arquivo = ref(null)
  const dadosTratados = ref([])
  const colunas = ref([])
  const erro = ref('')
  const carregando = ref(false)

  // --- GETTERS (Cálculos automáticos baseados nos slides) ---
  const totalClientes = computed(() => dadosTratados.value.length)
  const totalErros = computed(() => erro.value ? 1 : 0)
  
  // Clientes que estão no nível 'A' (conforme regra do slide)
  const clientesNivelA = computed(() => {
    return dadosTratados.value.filter(c => c.nivel_cliente === 'A').length
  })

  // Libera a tabela e os cards quando houver planilha carregada
  const temDados = computed(() => dadosTratados.value.length > 0)

  const totalLinhas = computed(() => dadosTratados.value.length)
  const totalColunas = computed(() => colunas.value.length)

  // --- ACTIONS (Ações do sistema) ---
  function selecionarArquivo(file) {
    if (!file) return

    arquivo.value = file
    erro.value = ''

    if (!validarArquivo(file)) {
      return
    }

    carregando.value = true
    const reader = new FileReader()

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })

        // Pega a primeira aba do arquivo
        const firstSheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[firstSheetName]

        // Converte para JSON bruto
        const jsonBruto = XLSX.utils.sheet_to_json(worksheet, { defval: '' })

        if (jsonBruto.length === 0) {
          erro.value = 'O arquivo selecionado está vazio.'
          carregando.value = false
          return
        }

        // Aplica a função de tratamento de linha vista em aula
        dadosTratados.value = jsonBruto.map(linha => tratarLinha(linha))
        colunas.value = Object.keys(dadosTratados.value[0] || {})
      } catch (err) {
        console.error('Erro ao ler planilha:', err)
        erro.value = 'Falha ao processar o arquivo. Certifique-se de ser um arquivo CSV ou Excel válido.'
      } finally {
        carregando.value = false
      }
    }

    reader.onerror = () => {
      erro.value = 'Erro de leitura do arquivo no navegador.'
      carregando.value = false
    }

    reader.readAsArrayBuffer(file)
  }

  function validarArquivo(file) {
    const nome = file.name.toLowerCase()
    const ehXlsx = nome.endsWith('.xlsx')
    const ehCsv = nome.endsWith('.csv')

    if (!ehXlsx && !ehCsv) {
      erro.value = 'Formato inválido. Utilize arquivos .xlsx ou .csv'
      return false
    }
    return true
  }

  // Função de tratamento de linha exigida pela professora (mapeia segmentos e normaliza maiúsculas)
  function tratarLinha(linha) {
    const segmentoBruto = String(linha.segmento || '').trim().toUpperCase()

    // Mapeamento de variações de texto conforme o slide
    const mapaSegmentos = {
      'IND': 'Indústria',
      'INDÚSTRIA': 'Indústria',
      'COMERCIO': 'Comércio',
      'COMÉRCIO': 'Comércio',
      'SERVICOS': 'Serviços',
      'SERVIÇOS': 'Serviços'
    }

    return {
      ...linha,
      segmento: mapaSegmentos[segmentoBruto] || segmentoBruto,
      nivel_cliente: String(linha.nivel_cliente || '').trim().toUpperCase()
    }
  }

  function limpar() {
    arquivo.value = null
    dadosTratados.value = []
    colunas.value = []
    erro.value = ''
    carregando.value = false
  }

  return {
    arquivo,
    dadosTratados,
    colunas,
    erro,
    carregando,
    totalClientes,
    totalErros,
    clientesNivelA,
    temDados,
    totalLinhas,
    totalColunas,
    selecionarArquivo,
    limpar
  }
})