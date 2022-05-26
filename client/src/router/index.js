import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import MenuPage from "@/views/MenuPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import BookmarkPage from "@/views/BookmarkPage.vue";
import OrderPage from "@/views/OrderPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: HomePage,
    },
    {
      path: "/menu",
      name: "menuPage",
      component: MenuPage,
    },
    {
      path: "/login",
      name: "loginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "registerPage",
      component: RegisterPage,
    },
    {
      path: "/bookmarks",
      name: "bookmarkPage",
      component: BookmarkPage,
    },
    {
      path: "/order",
      name: "orderPage",
      component: OrderPage,
    },
  ],
});

router.beforeEach((to, from) => {
  if (
    !localStorage.getItem("access_token") &&
    (to.name === "bookmarkPage" || to.name === "orderPage")
  ) {
    return { name: "loginPage" };
  } else if (
    localStorage.getItem("access_token") &&
    (to.name === "loginPage" || to.name === "registerPage")
  ) {
    return { name: "homePage" };
  }
  return true;
});

export default router;
