import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css'

import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
