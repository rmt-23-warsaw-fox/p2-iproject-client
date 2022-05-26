import { createApp } from "vue";
import { createPinia } from "pinia";
import BootstrapVue3 from "bootstrap-vue-3";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faBookBookmark, faBookmark , faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBookBookmark);
library.add(faUser);
library.add(faBookmark);


const app = createApp(App);

app.use(createPinia()).use(router).component("font-awesome-icon", FontAwesomeIcon).use(VueSweetalert2).use(BootstrapVue3).mount("#app");
