import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080', // Ajuste para a URL do seu backend (Spring Boot ou Python)
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api