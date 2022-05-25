import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue";
import LoginRegisterView from "../views/LoginRegisterView.vue";
import BookingView from "../views/BookingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/ticket",
      name: "booking",
      component: BookingView,
    },
    {
      path: "/movie/:id",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginRegisterView,
    },
    {
      path: "/register",
      name: "register",
      component: LoginRegisterView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    localStorage.getItem("access_token") &&
    (to.name === "login" || to.name === "register")
  ) {
    next({ name: "home" });
  } else if (
    !localStorage.getItem("access_token") &&
    to.name !== "login" &&
    to.name !== "register"
  ) {
    next({ name: "login" });
  } else if (
    !localStorage.getItem("access_token") &&
    to.name !== "register" &&
    to.name !== "login"
  ) {
    next({ name: "register" });
  } else {
    next();
  }
});

export default router;
