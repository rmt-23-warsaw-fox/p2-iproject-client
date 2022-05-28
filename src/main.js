import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

pinia.use(({store}) => {
    store.router = markRaw(router);
})

app.mount('#app')
