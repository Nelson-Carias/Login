import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './routes/index.routes'
import { createPinia } from 'pinia';

const app = createApp(App)
const pinia = createPinia()

// createApp(App)
app.use(pinia)
.use(routes)
.mount('#app')
