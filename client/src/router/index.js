import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log('global bro');
  const isLogin = localStorage.access_token;

  if (to.name == 'home' && !isLogin) {
    next({ name: 'login' })
  } else if (to.name == 'login' && isLogin) {
    next({ name: '/' })
  } else {
    next()
  }
})

export default router
