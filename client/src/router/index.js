import { createRouter, createWebHistory } from "vue-router"
import signin from "@/views/signin.vue"
import signup from "@/views/signup.vue"
import home from "@/views/home.vue"
import teams from "@/views/teams.vue"
import profile from "@/views/profile.vue"

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
    {
      path: "/teams/:page",
      name: "teams",
      component: teams,
    },
    {
      path: "/profile",
      name: "profile",
      component: profile,
    },
  ],
})

router.beforeEach((to, from) => {
  if ((to.name === "signin" || to.name === "signup") && localStorage.getItem("access_token")) {
    return { name: "home" }
  } else if (
    (to.name === "home" || to.name === "teams" || to.name === "profile") &&
    !localStorage.getItem("access_token")
  ) {
    return { name: "signin" }
  }
})

export default router
