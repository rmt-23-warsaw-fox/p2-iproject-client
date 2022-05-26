import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import GadgetsView from "../views/GadgetsView.vue";
import DetailView from "../views/DetailView.vue";
import ProfileView from "../views/ProfileView.vue";
import TransactionHistoryView from "../views/TransactionHistoryView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/transaction-history",
    name: "transaction-history",
    component: TransactionHistoryView,
  },
  {
    path: "/gadgets",
    name: "gadgets",
    component: GadgetsView,
  },
  {
    path: "/detail/:detail",
    name: "detail",
    component: DetailView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "login" || to.name === "register") {
    if (localStorage.getItem("access_token")) {
      next({ name: "home" });
    } else {
      next();
    }
  } else if (to.name === "profile" || to.name === "transaction-history") {
    if (localStorage.getItem("access_token")) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
