import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import OrderView from '../views/OrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination/:id',
      name: 'detailDestination',
      component: DetailView
    },
    {
      path: '/orderform/:id',
      name: 'orderForm',
      component: OrderView
    }
  ]
})

export default router
