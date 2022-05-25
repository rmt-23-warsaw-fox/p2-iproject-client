import { createApp } from "vue";
import { createPinia } from "pinia";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(VueToast);
app.use(createPinia());
app.use(router);

app.provide("toast", app.config.globalProperties.$toast);

app.mount("#app");
