import 'normalize.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'
import DevolutionPreset from '@/assets/styles/preset'

const app = createApp(App)

app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: DevolutionPreset,
    options: {}
  },
})

app.mount('#app')
