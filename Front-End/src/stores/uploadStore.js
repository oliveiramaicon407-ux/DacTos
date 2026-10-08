import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import * as XLSX from 'xlsx'
import api from '../Services/api'

export const useUploadStore = defineStore('upload', () => {

  const arquivo = ref(null)
  const dadosTratados = ref([])
  const colunas = ref([])
  const erro = ref('')
  const carregando = ref(false)

  // GETTERS

  const totalClientes = computed(() => {
    return dadosTratados.value.length
  })

  const totalErros = computed(() => {
    return erro.value ? 1 : 0
  })

  const clientesNivelA = computed(() => {
    return dadosTratados.value.filter(
      cliente => cliente.nivel_cliente === 'A'
    ).length
  })

  const temDados = computed(() => {
    return dadosTratados.value.length > 0
  })

  const totalLinhas = computed(() => {
    return dadosTratados.value.length
  })

  const totalColunas = computed(() => {
    return colunas.value.length
  })


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

        const workbook = XLSX.read(data, {
          type: 'array'
        })

        const firstSheetName = workbook.SheetNames[0]

        const worksheet = workbook.Sheets[firstSheetName]

        const jsonBruto = XLSX.utils.sheet_to_json(
          worksheet,
          {
            defval: ''
          }
        )

        if (jsonBruto.length === 0) {

          erro.value = 'O arquivo selecionado está vazio.'

          carregando.value = false

          return
        }

        dadosTratados.value = jsonBruto.map(
          linha => tratarLinha(linha)
        )

        colunas.value = Object.keys(
          dadosTratados.value[0] || {}
        )

      } catch (err) {

        console.error(
          'Erro ao ler planilha:',
          err
        )

        erro.value =
          'Falha ao processar o arquivo. Certifique-se de que é um arquivo CSV ou Excel válido.'

      } finally {

        carregando.value = false
      }
    }

    reader.onerror = () => {

      erro.value =
        'Erro de leitura do arquivo no navegador.'

      carregando.value = false
    }

    reader.readAsArrayBuffer(file)
  }


  function validarArquivo(file) {

    const nome = file.name.toLowerCase()

    const ehXlsx = nome.endsWith('.xlsx')
    const ehCsv = nome.endsWith('.csv')

    if (!ehXlsx && !ehCsv) {

      erro.value =
        'Formato inválido. Utilize arquivos .xlsx ou .csv'

      return false
    }

    return true
  }


  function tratarLinha(linha) {

    // SEGMENTO

    const valorSegmento =
      linha.Segmento !== undefined
        ? linha.Segmento
        : linha.segmento

    const segmentoBruto = String(
      valorSegmento || ''
    )
      .trim()
      .toUpperCase()

    const mapaSegmentos = {

      'IND': 'Indústria',
      'IND.': 'Indústria',
      'INDUSTRIA': 'Indústria',
      'INDÚSTRIA': 'Indústria',

      'COMERCIO': 'Comércio',
      'COMÉRCIO': 'Comércio',

      'SERVICOS': 'Serviços',
      'SERVIÇOS': 'Serviços',

      'SAUDE': 'Saúde',
      'SAÚDE': 'Saúde',

      'TECNOLOGIA': 'Tecnologia',

      'EDUCACAO': 'Educação',
      'EDUCAÇÃO': 'Educação'
    }

    const segmentoFinal =
      mapaSegmentos[segmentoBruto] ||
      'Não Definido'

    // NÍVEL DO CLIENTE

    const nivelFinal = String(
      linha.nivel_cliente ||
      linha.Nivel_Cliente ||
      ''
    )
      .trim()
      .toUpperCase()

    // RETORNO

    return {
      ...linha,
      segmento: segmentoFinal,
      nivel_cliente: nivelFinal || 'Não Definido'
    }
  }


  async function enviarParaBackend() {

    if (!temDados.value) {

      alert('Não há dados para enviar.')

      return
    }

    carregando.value = true

    try {

      const resposta = await api.post(
        '/api/planilha/importar',
        {
          nomeArquivo: arquivo.value
            ? arquivo.value.name
            : 'planilha.xlsx',

          dados: dadosTratados.value
        }
      )

      console.log(
        'Dados salvos no servidor:',
        resposta.data
      )

      alert(
        'Planilha enviada e processada com sucesso no Back-End!'
      )

    } catch (err) {

      console.error(
        'Erro ao enviar para o back-end:',
        err
      )

      alert(
        'Erro ao comunicar com o servidor Spring Boot.'
      )

    } finally {

      carregando.value = false
    }
  }



  function limpar() {

    arquivo.value = null
    dadosTratados.value = []
    colunas.value = []
    erro.value = ''
    carregando.value = false
  }

  // RETORNO

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
    enviarParaBackend,
    limpar
  }
})