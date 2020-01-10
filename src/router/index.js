import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateAccount from '../views/CreateAccount.vue'
import Login from '../views/Login.vue'
import Recover from '../views/Recover.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },  {
    path: '/createAccount',
    name: 'createAccount',
    component: CreateAccount
  },
  {
    path: '/recover',
    name: 'recover',
    component: Recover
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
