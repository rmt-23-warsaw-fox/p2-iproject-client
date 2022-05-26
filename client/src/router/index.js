import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import WishlistView from '../views/WishlistView.vue'
import SearchView from '../views/SearchView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import OrderRoomView from '../views/OrderRoomView.vue'
import TransactionsView from '../views/TransactionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/order/:id',
      name: 'order',
      component: OrderRoomView
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsView
    }
    
  ]
})

router.beforeEach((to, from, next) => {
  if ((to.name === "wishlist" || to.name === "order" || to.name === 'transactions') && !localStorage.getItem("access_token")) {
    Swal.fire({
      icon: 'warning',
      text: 'You need to login first',
      confirmButtonText: 'Oke',
    }).then((result) => {
      if (result.isConfirmed) {
        next({ name: 'login' });
      } 
    })
    
  } else {
    if (
      (to.name === "login" || to.name === "register") &&
      localStorage.getItem("access_token")
    ) {
      next({ name: from.name });
    } else {
      next();
    }
  }
});


export default router
