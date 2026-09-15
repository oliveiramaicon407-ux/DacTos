<!-- src/Views/Register.vue -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nome = ref('')
const email = ref('')
const senha = ref('')
const confirmarSenha = ref('')
const erro = ref('')
const sucesso = ref('')
const carregando = ref(false)

// Estados para controlar a visibilidade das senhas
const mostrarSenha = ref(false)
const mostrarConfirmarSenha = ref(false)

const handleRegister = async () => {
  erro.value = ''
  sucesso.value = ''

  if (!nome.value || !email.value || !senha.value || !confirmarSenha.value) {
    erro.value = 'Por favor, preencha todos os campos.'
    return
  }

  if (senha.value !== confirmarSenha.value) {
    erro.value = 'As senhas não coincidem.'
    return
  }

  if (senha.value.length < 6) {
    erro.value = 'A senha precisa ter pelo menos 6 caracteres.'
    return
  }

  carregando.value = true

  try {
    // Simula requisição de cadastro ao backend / Supabase
    await new Promise(resolve => setTimeout(resolve, 1000))

    sucesso.value = 'Conta criada com sucesso! Entrando no sistema...'
    
    // Salva um token simulado ou dados do usuário se necessário (opcional)
    localStorage.setItem('dactos_user', JSON.stringify({ name: nome.value, email: email.value }))

    // Redireciona direto para o painel interno (ex: pipeline/upload ou dashboard)
    setTimeout(() => {
      router.push('/sidebar/upload') 
    }, 1200)

  } catch (err) {
    erro.value = 'Ocorreu um erro ao criar a conta. Tente novamente.'
  } finally {
    carregando.value = false
  }
}
</script>

<template>
  <div class="min-h-screen w-full bg-black text-white flex items-center justify-center p-6 relative overflow-hidden font-sans antialiased">
    
    <!-- Efeitos de luz de fundo -->
    <div class="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
    <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- Botão Voltar para Início -->
    <router-link 
      to="/" 
      class="absolute top-6 left-6 text-xs text-zinc-400 hover:text-white flex items-center gap-2 transition-colors z-20"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
      </svg>
      Voltar
    </router-link>

    <!-- Cartão Principal -->
    <div class="relative z-10 w-full max-w-5xl bg-zinc-950/90 border border-blue-500/30 shadow-[0_0_60px_rgba(37,99,235,0.2)] rounded-3xl p-6 md:p-12 grid md:grid-cols-5 gap-10 backdrop-blur-xl">
      
      <!-- Lado Esquerdo: Mensagem/Branding -->
      <div class="md:col-span-2 hidden md:flex flex-col justify-center space-y-6 text-left border-r border-zinc-800/80 pr-10">
        <div class="flex items-center gap-2">
           <span class="flex size-8 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-lg shadow-lg shadow-blue-600/40">D</span>
           <span class="text-2xl font-bold text-white tracking-tighter">DacTos<span class="text-blue-500">.</span></span>
        </div>
        <h1 class="text-3xl font-extrabold text-white tracking-tight leading-tight">
          Comece sua jornada de análise.
        </h1>
        <p class="text-zinc-400 text-xs leading-relaxed">
          Crie sua conta gratuitamente e tenha acesso imediato às ferramentas mais poderosas de insights e gestão de dados do mercado.
        </p>
      </div>

      <!-- Lado Direito: Formulário -->
      <div class="md:col-span-3 space-y-4 flex flex-col justify-center">
        
        <!-- Cabeçalho (Mobile) -->
        <div class="text-center md:hidden space-y-1">
          <h1 class="text-xl font-extrabold text-white tracking-tight">Criar sua conta</h1>
          <p class="text-xs text-zinc-400">Preencha os dados abaixo.</p>
        </div>

        <!-- Alertas -->
        <div v-if="erro" class="p-3 text-xs text-red-400 bg-red-950/50 border border-red-800/60 rounded-xl text-center font-medium">
          {{ erro }}
        </div>
        <div v-if="sucesso" class="p-3 text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 rounded-xl text-center font-medium">
          {{ sucesso }}
        </div>

        <!-- Formulário -->
        <form @submit.prevent="handleRegister" class="space-y-3.5">
          
          <!-- Nome -->
          <div>
            <label class="block text-xs font-semibold text-zinc-300 mb-1">Nome Completo</label>
            <input 
              v-model="nome"
              type="text" 
              required
              placeholder="Seu Nome"
              class="w-full px-4 py-2.5 text-xs bg-black/80 border border-zinc-800 focus:border-blue-500 rounded-xl text-white placeholder-zinc-600 outline-none transition-all focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-xs font-semibold text-zinc-300 mb-1">E-mail</label>
            <input 
              v-model="email"
              type="email" 
              required
              placeholder="seu@email.com"
              class="w-full px-4 py-2.5 text-xs bg-black/80 border border-zinc-800 focus:border-blue-500 rounded-xl text-white placeholder-zinc-600 outline-none transition-all focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <!-- Senha -->
          <div>
            <label class="block text-xs font-semibold text-zinc-300 mb-1">Senha</label>
            <div class="relative">
              <input 
                v-model="senha"
                :type="mostrarSenha ? 'text' : 'password'" 
                required
                placeholder="••••••••"
                class="w-full pl-4 pr-10 py-2.5 text-xs bg-black/80 border border-zinc-800 focus:border-blue-500 rounded-xl text-white placeholder-zinc-600 outline-none transition-all focus:ring-1 focus:ring-blue-500"
              />
              <!-- Botão Mostrar/Ocultar Senha -->
              <button 
                type="button" 
                @click="mostrarSenha = !mostrarSenha" 
                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
                tabindex="-1"
              >
                <!-- Ícone Olho Fechado / Olho Aberto -->
                <svg v-if="!mostrarSenha" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.07 10.07 0 014.242-5.132M9.88 9.88l-3.53-3.53m6.01 6.01l3.53 3.53M3 3l18 18" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Confirmar Senha -->
          <div>
            <label class="block text-xs font-semibold text-zinc-300 mb-1">Confirmar Senha</label>
            <div class="relative">
              <input 
                v-model="confirmarSenha"
                :type="mostrarConfirmarSenha ? 'text' : 'password'" 
                required
                placeholder="••••••••"
                class="w-full pl-4 pr-10 py-2.5 text-xs bg-black/80 border border-zinc-800 focus:border-blue-500 rounded-xl text-white placeholder-zinc-600 outline-none transition-all focus:ring-1 focus:ring-blue-500"
              />
              <!-- Botão Mostrar/Ocultar Confirmação -->
              <button 
                type="button" 
                @click="mostrarConfirmarSenha = !mostrarConfirmarSenha" 
                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
                tabindex="-1"
              >
                <svg v-if="!mostrarConfirmarSenha" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.07 10.07 0 014.242-5.132M9.88 9.88l-3.53-3.53m6.01 6.01l3.53 3.53M3 3l18 18" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Botão de Envio -->
          <button 
            type="submit"
            :disabled="carregando"
            class="w-full mt-3 py-3 px-4 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
          >
            {{ carregando ? 'Criando conta e entrando...' : 'Criar minha conta' }}
          </button>

        </form>

        <!-- Rodapé -->
        <div class="text-center text-xs text-zinc-500 pt-2 border-t border-zinc-800/80">
          Já possui uma conta? 
          <router-link to="/login" class="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
            Faça login
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>