import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DiagnosePage from "../views/DiagnosePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/diagnose",
      name: "diagnose",
      component: DiagnosePage,
    },
  ],
});

export default router;
