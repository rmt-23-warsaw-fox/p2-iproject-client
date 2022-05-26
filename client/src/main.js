//bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "./assets/style.css";
//vue-toast
import VueToastify from "vue-toastify";
//audio-player
// import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
//fontawsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
//maps
import VueGoogleMaps from '@fawmi/vue-google-maps'

import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

const app = createApp(App);
app.use(VueGoogleMaps, {
  load: {
      key: 'AIzaSyBNiFyEf2zwam45WwAbdMjcsZkWcWnFqz8',
  },
})
app.use(pinia);
app.use(router);
app.component('fa', FontAwesomeIcon)
app.mount("#app"); 

//bootsrap js
import "bootstrap/dist/js/bootstrap.js" 