import { defineStore } from 'pinia'

export const usePlanilhaStore = defineStore('planilha', {
  state: () => ({
    nomeArquivo: '',
    dadosBrutos: [],
    erros: [], // Ex: { linha: 2, campo: 'email', mensagem: 'E-mail inválido' }
    dadosValidados: []
  }),

  getters: {
    totalRegistros: (state) => state.dadosBrutos.length,
    registrosComErro: (state) => state.erros.length,
    registrosValidos: (state) => state.dadosBrutos.length - state.erros.length,
    
    quantidadePorTipoErro: (state) => {
      const contagem = {}
      state.erros.forEach(erro => {
        contagem[erro.tipo] = (contagem[erro.tipo] || 0) + 1
      })
      return contagem
    }
  },

  actions: {
    carregarPlanilha(nome, dados) {
      this.nomeArquivo = nome
      this.dadosBrutos = dados
      this.executarValidacoes()
    },

    executarValidacoes() {
      this.erros = []
      
      this.dadosBrutos.forEach((linha, index) => {
        const numeroLinha = index + 1

        // Validação 1: Campos obrigatórios vazios
        if (!linha.nome || !linha.email) {
          this.erros.push({
            linha: numeroLinha,
            campo: 'Campos Obrigatórios',
            tipo: 'Campos Vazios',
            mensagem: 'O campo nome ou e-mail está vazio.'
          })
        }

        // Validação 2: E-mails inválidos (simples verificação de formato)
        if (linha.email && !linha.email.includes('@')) {
          this.erros.push({
            linha: numeroLinha,
            campo: 'email',
            tipo: 'E-mails Inválidos',
            mensagem: 'O e-mail fornecido não contém "@".'
          })
        }

        // Outras validações conforme necessário...
      })
    }
  }
})