import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import LiveChatView from '../views/LiveChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path : '/register',
      name : 'register',
      component : RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component : LoginView
    },
    {
      path : '/myprofile',
      name: 'myprofile',
      component : ProfileView
    },
    {
      path : '/livechat',
      name : 'livechat',
      component : LiveChatView
    }
  ]
})

export default router
