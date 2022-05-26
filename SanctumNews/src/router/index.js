import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/homepage.vue'
import login from '../views/loginpage.vue'
import register from '../views/registerpage.vue'
import detailpage from '../views/detailpage.vue'
import favorites from '../views/favoritepage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homepage
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/categories/detail',
    name: 'detail',
    component: detailpage
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: favorites
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
    if(localStorage.getItem("access_token")&& to.name=='login'){
      return {name : 'home'}
    }
    if(!localStorage.getItem("access_token")&& to.name=='favorite'){
      return {name : 'home'}
    }
})
export default router
