import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsightView from "@/views/InsightView.vue";
import TransactionView from "@/views/TransactionView.vue";
import ProfileView from "@/views/ProfileView.vue";
import CreateTransactionView from "@/views/CreateTransactionView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      enterClass: 'animate__animated animate__fadeIn animate__faster',
      leaveClass: 'animate__animated animate__fadeOut animate__faster'
    }
  },
  {
    path: '/insight',
    name: 'insight',
    component: InsightView,
    meta: {
      enterClass: 'animate__animated animate__fadeIn animate__faster',
      leaveClass: 'animate__animated animate__fadeOut animate__faster'
    }
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: TransactionView,
    meta: {
      enterClass: 'animate__animated animate__fadeIn animate__faster',
      leaveClass: 'animate__animated animate__fadeOut animate__faster'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      enterClass: 'animate__animated animate__fadeIn animate__faster',
      leaveClass: 'animate__animated animate__fadeOut animate__faster'
    }
  },
  {
    path: '/create-transaction',
    name: 'create-transaction',
    component: CreateTransactionView,
    meta: {
      enterClass: 'animate__animated animate__fadeInUp animate__fast',
      leaveClass: 'animate__animated animate__fadeOutDown animate__fast'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
