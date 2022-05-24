/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path:"/register",
    name:"register",
    component: () => import("../views/RegisterView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (localStorage.getItem("access_token") && to.name === "Login") {
    return { name: "Home" };
  }

  return true;
});

export default router;
