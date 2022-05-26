import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import GAuth from 'vue3-google-oauth2'

const gAuthOptions = { 
    clientId: '253873718831-kuoncgnf3vq9r3ohmcusngoij173qbv1.apps.googleusercontent.com', 
    scope: 'email profile', 
    prompt: 'consent', 
    fetch_basic_profile: false 
}

import App from './App.vue'
import router from './router'

const app = createApp(App);
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(GAuth, gAuthOptions)
app.use(router)
app.use(pinia)

app.mount('#app')
