import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import DetailPage from '@/views/DetailPage.vue';
import SearchPage from '@/views/SearchPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import FavoritePage from '@/views/FavoritePage.vue'
import HomeAnime from '@/views/HomeAnime.vue'
import DetailAnime from '@/views/DetailAnime.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: DetailPage,
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage,
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: FavoritePage,
  },
  {
    path: '/anime',
    name: 'HomeAnime',
    component: HomeAnime
  },
  {
    path: '/anime/detail/:id',
    name: 'DetailAnime',
    component: DetailAnime
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
