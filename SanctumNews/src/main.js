import 'sweetalert2/dist/sweetalert2.js'
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp , markRaw} from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
    })
    
app.use(pinia)
app.use(router)

app.mount('#app')

import 'sweetalert2/src/sweetalert2.scss'
import "bootstrap/dist/js/bootstrap.js"
