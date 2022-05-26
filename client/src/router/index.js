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
    path: "/register",
    name: "Register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/ProfileView.vue"),
  },{
    path:"/upload",
    name: "Upload",
    component: () => import("../views/UploadView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (localStorage.getItem("access_token") && to.name === "Login") {
    return { name: "Home" };
  } else if (!localStorage.getItem("access_token") && to.name === "Profile") {
    return { name: "Login" };
  } else if (!localStorage.getItem("access_token") && to.name === "Home") {
    return { name: "Login" };
  }
});

export default router;
