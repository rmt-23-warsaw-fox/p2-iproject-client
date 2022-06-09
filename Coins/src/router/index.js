import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginView.vue";
import RegisterPage from "../views/RegisterView.vue"
import Activation from "../views/Activation.vue"
import Bookmark from "../views/Bookmark.vue"

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
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name : "register",
      component: RegisterPage
    },
    {
      path: "/activate",
      name: "activate",
      component: Activation
    },
    {
      path: "/bookmark",
      name: "bookmark",
      component: Bookmark
    },
  ],
});

router.beforeEach((to, from, next) => {
  let isLogin = localStorage.access_token

  if(to.name == "login" && isLogin){
    next({ name: "home" })
  } else if(to.name == "home" && !isLogin) {
    next({name: "login"})
  } else if(to.name == "bookmark" && !isLogin) {
    next({name: "login"})
  } else if(to.name == "compare" && !isLogin) {
    next({name: "login"})
  } else {
    next()
  }
})


export default router;
