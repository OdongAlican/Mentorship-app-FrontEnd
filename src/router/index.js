import Vue from "vue";
import VueRouter from "vue-router";
import CreateAccount from "../views/CreateAccount.vue";
import Login from "../views/Login.vue";
import Recover from "../views/Recover.vue";
import Home from "../views/Home";
import SignUp from "../views/SignUp";
import Mentors from "../views/mentors";
import Session from "../views/session";
import About from "../views/About";
import Settings from "../views/Settings";
import Dashboard from "../views/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      { path: "/mentors", name: "mentors  ", component: Mentors },
      { path: "/about", name: "about  ", component: About },
      { path: "/settings", name: "settings  ", component: Settings },
      { path: "/home", name: "dashboard  ", component: Dashboard },
      {
        path: "/sessions",
        name: "sessions",
        component: Session
      }
    ]
  },
  {
    path: "/",
    name: "/signUp",
    component: SignUp,
    children: [
      {
        path: "/",
        name: "login",
        component: Login
      },
      {
        path: "/createAccount",
        name: "createAccount",
        component: CreateAccount
      },
      {
        path: "/recover",
        name: "recover",
        component: Recover
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
