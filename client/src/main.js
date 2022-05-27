import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import gAuthPlugin from 'vue3-google-oauth2'

library.add(fas)
const app = createApp(App)
// let CLIENT_ID = '615017297175-d63dp529ab0f023jbd5kikb47lnb3ie3.apps.googleusercontent.com'
let CLIENT_ID = '615017297175-62l33iba9pefbs8qqakjvivfampadskq.apps.googleusercontent.com'


app.use(createPinia())
app.use(router)
app.use(gAuthPlugin, {
    clientId: CLIENT_ID,
    score: 'email',
    prompt: 'consent'
})
app.component('fa', FontAwesomeIcon)
app.mount('#app')
