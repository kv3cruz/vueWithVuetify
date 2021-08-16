import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path: '/about',
      name: 'About',
      component: () =>
         import(/* webpackChunkName: "about" */ '../views/About.vue')
   },
   {
      path: '/login',
      name: 'login',
      component: () =>
         import(/* webpackChunkName: "Login" */ '../views/Login.vue')
   },
   {
      path: '/dashboard',
      name: 'dashboard',
      component: () =>
         import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue')
   },
   {
      path: '/signup',
      name: 'signup',
      component: () =>
         import(/* webpackChunkName: "Signup" */ '../views/Signup.vue')
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router
