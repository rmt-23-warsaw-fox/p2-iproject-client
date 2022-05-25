import { createApp, markRaw } from "vue";
import App from "./App.vue";
import BootstrapVue3 from 'bootstrap-vue-3'
import GAuth from 'vue3-google-oauth2'
import router from './router'
import { createPinia } from 'pinia'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

// require("dotenv").config()

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
const gAuthOptions = { clientId: '575472646971-0jucdsahbrqotd667svh3j77d064boug.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: false }

app.use(GAuth, gAuthOptions)
app.use(BootstrapVue3)
const pinia = createPinia()
pinia.use(({store}) => {
  store.router = markRaw(router)
})
app.use(router)
app.use(pinia)
app.use(VueToast);
app.mount('#app')