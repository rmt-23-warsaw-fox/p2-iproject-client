import { createApp } from "vue";
import { createPinia } from "pinia";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(BootstrapVue3);
app.use(VueToast);
app.use(createPinia());
app.use(router);

app.mount("#app");
