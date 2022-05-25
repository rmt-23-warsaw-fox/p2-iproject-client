import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../views/HomePageCustomer.vue";
import RegisterPage from "../views/RegisterPage.vue";
import LoginPage from "../views/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomePage,
    // },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.name === "login" || to.name === "register") {
//     if (localStorage.getItem("access_token")) {
//       next({ name: "home" });
//     } else {
//       next();
//     }
//   } else if (to.name === "bookmarks") {
//     if (!localStorage.getItem("access_token")) {
//       next({ name: "login" });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
