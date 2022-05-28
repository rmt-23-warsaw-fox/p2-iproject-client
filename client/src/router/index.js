import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ChatPage from '../views/ChatPage.vue'
import LoginPage from '../views/LoginPage.vue'
import PostPage from '../views/PostPage.vue'
import RegisterPage from '../views/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/chat/:id',
      name: 'chat',
      component: ChatPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/post',
      name: 'post',
      component: PostPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    }
  ]
})

router.beforeEach((to, from) => {
  if (localStorage.getItem('access_token') !== null && (to.name === 'login' || to.name === 'register')) {
    console.log('to name', to.name);
    return {name: 'home'}
  } else if (localStorage.getItem('access_token') === null && (to.name === 'post' || to.name === 'chat')) {
    return {name: 'login'}
  } 
})

export default router
