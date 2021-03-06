import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NowShowing from '../views/Now-Showing.vue'
import Browse from '../views/Browse.vue'
import Favorites from '../views/Favorites.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/showing',
    name: 'NowShowing',
    component: NowShowing
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
