import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/front/Home.vue"
import Movie from "../components/movies/Movie.vue"
import Actors from "../components/actors/Actors.vue"
import ActorDetail from "../components/actors/ActorDetail.vue"
import LoginForm from "../views/LoginForm.vue"
import RegisterForm from "../views/RegisterForm.vue"
import ProfileForm from "../views/ProfileForm.vue"
import NotFound from "../views/NotFound.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: Movie,
    },
    {
      path: "/actors",
      name: "actors",
      component: Actors,
    },
    {
      path: "/actor/:id",
      name: "actor",
      component: ActorDetail,
    },
    {
      path: "/login",
      name: "LoginForm",
      component: LoginForm,
    },
    {
      path: "/register",
      name: "RegisterForm",
      component: RegisterForm,
    },
    {
      path: "/profile/:id",
      name: "ProfileForm",
      component: ProfileForm,
    },
    {
      path: "/:catchAll(.*)", 
      name: "NotFound",
      component: NotFound,
    },
  ]
})

export default router
