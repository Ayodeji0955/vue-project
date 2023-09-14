import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './helpers/axios.js'
// import MoshaVueToastify from './'

const app = createApp(App)

// app.use(MoshaVueToastify.default);
app.use(createPinia())
app.use(router)

app.mount('#app')
