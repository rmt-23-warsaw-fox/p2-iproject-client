import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import DetailPage from '@/views/DetailPage.vue';
import SearchPage from '@/views/SearchPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import LoginPage from '@/views/LoginPage.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
