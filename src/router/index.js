import Vue from 'vue'
import VueRouter from 'vue-router'

import Contact from "../views/Contact";
import Actualites from "../views/actualites"
import Login from "../components/login/container"
import Apropos from "../views/Apropos"
import Loisir from "../views/Activities/Loisir.vue"
import Home from "../views/Home"
import Register from '../views/Auth/Register'
import Manuelle from  '../views/Activities/Manuelle.vue'
import Parent from '../components/Parent'
import Sportive from '../views/Activities/Sportive.vue'
import Culturelle from '../views/Activities/Culturelle'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loisir',
    name: 'Loisir',
    component: Loisir
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
    component: Login,
  },
  {
    path: '/apropos',
    name: 'Apropos',
    component: Apropos,
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: Register
  },
  {
    path: '/manuelle',
    name: 'Manuelle',
    component: Manuelle
  },
  {
    path: '/culturelle',
    name: 'Culturelle',
    component: Culturelle
  },
  {
    path: '/sportive',
    name: 'Sportive',
    component: Sportive
  },
  {
    path: '/parent',
    name: 'Parent',
    component: Parent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
