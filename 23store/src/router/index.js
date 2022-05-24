import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name === "login" || to.name === "register") {
//     if (localStorage.getItem("access_token")) {
//       next({ name: "home" });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
