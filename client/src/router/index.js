import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Player from '../components/Player.vue'
import Radios from '../components/Radios.vue'
import MapView from '../views/MapView.vue'
import Music from '../views/Music.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/player/:stationId",
      name: "player",
      component: Player,
    },
    {
      path: "/radios",
      name: "radios",
      component: Radios,
    },
    {
      path: "/map",
      name: "map",
      component: MapView,
    },
    {
      path: "/music",
      name: "music",
      component: Music,
    },
    {
      path: "/music/:id",
      name: "detailMusic",
      component: Player,
    }
  ],
});

export default router;
