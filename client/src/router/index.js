import { createRouter, createWebHistory } from "vue-router"
import signin from "@/views/signin.vue"
import signup from "@/views/signup.vue"
import home from "@/views/home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signin",
      name: "signin",
      component: signin,
    },
    {
      path: "/signup",
      name: "signup",
      component: signup,
    },
    {
      path: "/",
      name: "home",
      component: home,
    },
  ],
})

export default router
