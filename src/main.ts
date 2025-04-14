import { createApp } from 'vue'
import { createPinia } from 'pinia'

import GoogleLoginPlugin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

import './styles/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(GoogleLoginPlugin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
})

app.mount('#app')
