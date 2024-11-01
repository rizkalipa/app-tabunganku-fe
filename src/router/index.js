import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsightView from "@/views/InsightView.vue";
import TransactionView from "@/views/TransactionView.vue";
import ProfileView from "@/views/ProfileView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/insight',
    name: 'insight',
    component: InsightView
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: TransactionView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
