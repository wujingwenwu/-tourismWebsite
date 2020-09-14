import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Commons from '../views/commons/Commons.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    component: Commons,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/user/login',
        name: 'Login',
        component: () => import('../views/login/Login.vue')
      },
      ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
