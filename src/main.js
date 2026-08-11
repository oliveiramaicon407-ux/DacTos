import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router) // Ativa o sistema de rotas no Vue
app.mount('#app')