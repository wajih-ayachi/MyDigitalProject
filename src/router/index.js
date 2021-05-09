import Vue from 'vue'
import VueRouter from 'vue-router'

import Contact from "../views/Contact";
import Actualites from "../views/actualites"
import Login from "../components/login/container"
import Apropos from "../views/Apropos"

import Home from "../views/Home"
import Register from '../views/Auth/Register'

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
    component: Register
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
