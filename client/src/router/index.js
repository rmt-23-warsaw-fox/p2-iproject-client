import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Detail from '../views/detail.vue'
import NotFound from '../views/notFound.vue'
import Un from '../views/unResult.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Buy from '../views/buy.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/un',
      name: 'un',
      component: Un
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/login/listFavourite',
      name: 'buy',
      component: Buy
    },
    { path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound 
    }
  ]
})

export default router
