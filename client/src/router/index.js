import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import MenuPage from "@/views/MenuPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import BookmarkPage from "@/views/BookmarkPage.vue";
import OrderPage from "@/views/OrderPage.vue";
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

export default router;
