import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const Home = () => import('');
const Coins = () => import('');
const Plataforms = () => import('');
const Exchanges = () => import('');


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coins',
    name: 'Coins',
    component: Coins,
    meta:{
      hasAuth: true
    }
  },
  {
    path: '/plataforms',
    name: 'Plataforms',
    component: Plataforms,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/exchange',
    name: 'Exchange',
    componet: Exchanges,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {name: 'Home'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
