import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Garanta que o caminho aponta corretamente para o seu router
import './style.css' // Importa o Tailwind CSS

const app = createApp(App)

app.use(router)
app.mount('#app')