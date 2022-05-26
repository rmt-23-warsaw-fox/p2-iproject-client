import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import MovieDetail from "../views/MovieDetail.vue";
import AddReview from "../views/AddReview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomeView,
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/movie-detail/:MovieId",
      name: "MovieDetail",
      component: MovieDetail,
    },
    {
      path: "/add-review/:MovieId",
      name: "AddReview",
      component: AddReview,
    },
  ],
});

export default router;
