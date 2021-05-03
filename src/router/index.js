import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/container'
import Contact from "../components/contact/container";
import Actualites from "../components/actualites/container"
import Login from "../components/login/container"
import Apropos from "../components/apropos/container"
import Inscription from "../components/inscription/container"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/actu',
    name: 'Actualites',
    component: Actualites
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/apropos',
    name: 'Apropos',
    component: Apropos
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: Inscription
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
