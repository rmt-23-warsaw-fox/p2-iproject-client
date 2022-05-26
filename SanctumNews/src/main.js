import 'sweetalert2/dist/sweetalert2.js'
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp , markRaw} from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import gAuthPlugin from 'vue3-google-oauth2';


const app = createApp(App)
const pinia = createPinia()
let gauthClientId = "728531124702-580i65icr0hbk2sp7u31l11o2tl3er8e.apps.googleusercontent.com";

pinia.use(({ store }) => {
    store.router = markRaw(router)
    })
    
app.use(pinia)
app.use(router)
app.use(gAuthPlugin, { clientId: gauthClientId, scope: 'email', prompt: 'consent', fetch_basic_profile: false })

app.mount('#app')

import 'sweetalert2/src/sweetalert2.scss'
import "bootstrap/dist/js/bootstrap.js"
