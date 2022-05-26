import { createApp,markRaw } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import gAuthPlugin from "vue3-google-oauth2";
let gAuthClientId = "473049766696-janch2m30tgkusvioiagoh2b6m5gajo7.apps.googleusercontent.com";

app.use(gAuthPlugin, {
  clientId: gAuthClientId,
  scope: "email",
  prompt: "consent",
});

const pinia = createPinia()
pinia.use(({store})=>{
  store.router = markRaw(router)
})

app.use(router)
app.use(pinia)

app.mount('#app')
