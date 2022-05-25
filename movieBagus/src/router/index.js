import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/front/Home.vue"
import Movie from "../components/movies/Movie.vue"
import Actors from "../components/actors/Actors.vue"
import ActorDetail from "../components/actors/ActorDetail.vue"

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
  ]
})

export default router
