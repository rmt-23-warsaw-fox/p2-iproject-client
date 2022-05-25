import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/homepage.vue'
import login from '../views/loginpage.vue'
 const routes= [
    {
      path: '/',
      name: 'home',
      component: homepage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
]
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

export default router
