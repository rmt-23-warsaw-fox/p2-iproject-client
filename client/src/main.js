import { createApp } from "vue";
import { createPinia } from "pinia";
import BootstrapVue3 from "bootstrap-vue-3";
import App from "./App.vue";
import router from "./router";
import fontAwesome from "https://cdn.skypack.dev/font-awesome@4.7.0"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";


const app = createApp(App);

app.use(fontAwesome)    
app.use(BootstrapVue3);
app.use(createPinia());
app.use(router);

app.mount("#app");
