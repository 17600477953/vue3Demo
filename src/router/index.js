import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Mine from "../views/Mine.vue";

const routes = [
  {
    path: "/",
    // name: "Home",
    component: Home
    // component: ()=>import('@/views/Index.vue')
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/mine",
    name: "mine",
    component: Mine
  },
  {
    path:"/login",
    name:"login",
    component:()=>import('@/views/Login.vue')
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
