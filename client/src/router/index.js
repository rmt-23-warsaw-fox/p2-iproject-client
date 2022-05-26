import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import WatchlistView from '../views/WatchlistView.vue'
import CompareView from '../views/CompareView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: HomeView
    },
    {
      path: '/coins/:id',
      name: 'Coin Detail',
      component: DetailView
    },
    {
      path: '/login',
      name: 'Login Page',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'Signup Page',
      component: SignupView
    },
    {
      path: '/watchlist',
      name: 'Watchlist Page',
      component: WatchlistView
    },
    {
      path: '/compare',
      name: 'Compare Page',
      component: CompareView
    }
  ]
})
router.beforeEach((to, from) => {
  if (localStorage.getItem("access_token") && to.name === "Login Page") {
    return {name: "Home Page"}
  } 
})
export default router
