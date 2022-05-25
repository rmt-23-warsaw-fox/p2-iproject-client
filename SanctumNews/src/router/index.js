import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/homepage.vue'
import login from '../views/loginpage.vue'
import register from '../views/registerpage.vue'
import detailpage from '../views/detailpage.vue'

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
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  
})
export default router
