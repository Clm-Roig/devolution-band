import 'normalize.css'
import './assets/styles/main.css'
import './assets/styles/caption.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      dark: true,
    },
  },
})

app.mount('#app')
