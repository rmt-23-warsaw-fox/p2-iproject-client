import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue';
import ProfileView from '../views/ProfileView.vue'
import EntityView from '../views/EntityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/music/:id',
      name: 'music',
      component: EntityView,
    },
  ]
})

router.beforeEach((to, from) => {
  if (to.name === 'profile' && !localStorage.getItem('access_token')) {
    return ({path: '/login'});
  }
})

export default router
