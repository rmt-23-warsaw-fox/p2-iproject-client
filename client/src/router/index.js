import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Order from "../views/Order.vue";
import Register from "../views/Register.vue";
import Menu from "../views/Menu.vue";
import Payment from "../views/Payment.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/products",
      name: "menu",
      component: Menu,
    },
    {
      path: "/users/login",
      name: "login",
      component: Login,
    },
    {
      path: "/users/register",
      name: "register",
      component: Register,
    },
    {
      path: "/orders/myorder",
      name: "order",
      component: Order,
    },
    {
      path: "/payment/:orderCode",
      name: "payment",
      component: Payment,
    },
  ],
});

router.beforeEach((to, from) => {
  if (!localStorage.getItem("access_token") && to.name === "order") {
    return { name: "login" };
  } else if (localStorage.getItem("access_token") && to.name === "login") {
    return { name: "home" };
  } else if (localStorage.getItem("access_token") && to.name === "register") {
    return { name: "home" };
  }
});

export default router;
