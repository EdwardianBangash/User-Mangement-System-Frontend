import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import User from '../components/User.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/',
    component: Home,
    name: "Home"
   },
   {
    path: '/user',
    component: User,
    name: "User"
   }
  ]
})

export default router
