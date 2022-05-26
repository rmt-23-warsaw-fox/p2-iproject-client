import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import GAuth from "vue3-google-oauth2";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { markRaw } from "vue";

const clientId =
  "840178472710-acoecr9t2aiprp3tf3u6l13l4sljg2u1.apps.googleusercontent.com";

const gAuthOptions = {
  clientId: clientId,
  scope: "email",
  prompt: "consent",
  fetch_basic_profile: true,
};
const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(GAuth, gAuthOptions);
app.use(VueSweetalert2);
app.use(pinia);
app.use(router);

app.mount("#app");
