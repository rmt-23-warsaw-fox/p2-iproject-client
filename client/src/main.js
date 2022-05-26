import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import GAuth from "vue3-google-oauth2";
const app = createApp(App);
const pinia = createPinia();
const gAuthOptions = {
  clientId:
    "252692457948-m6968rm29j0bems92mpada94fa4b4ti8.apps.googleusercontent.com",
  scope: "email",
  prompt: "consent",
  fetch_basic_profile: false,
};
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(createPinia());
app.use(router);
app.use(VueSweetalert2);
app.use(GAuth, gAuthOptions);
app.mount("#app");
