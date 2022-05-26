import { createRouter, createWebHistory } from "vue-router"
import signin from "@/views/signin.vue"
import signup from "@/views/signup.vue"
import home from "@/views/home.vue"
import teams from "@/views/teams.vue"
import profile from "@/views/profile.vue"
import teamDetail from "@/views/teamDetail.vue"
import heroDetail from "@/views/heroDetail.vue"
import userMatches from "@/views/userMatches.vue"

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
      path: "/matches",
      name: "matches",
      component: userMatches,
    },
    {
      path: "/:page",
      name: "home",
      component: home,
    },
    {
      path: "/teams/detail/:team_id",
      name: "teamDetail",
      component: teamDetail,
    },
    {
      path: "/teams/:page",
      name: "teams",
      component: teams,
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: profile,
    },
    {
      path: "/heroes/:id",
      name: "heroDetail",
      component: heroDetail,
    },
  ],
})

router.beforeEach((to, from) => {
  if ((to.name === "signin" || to.name === "signup") && localStorage.getItem("access_token")) {
    return { name: "home" }
  } else if (
    (to.name === "home" ||
      to.name === "teams" ||
      to.name === "profile" ||
      to.name === "teamDetail" ||
      to.name === "heroDetail" ||
      to.name === "matches") &&
    !localStorage.getItem("access_token")
  ) {
    return { name: "signin" }
  }
})

export default router
