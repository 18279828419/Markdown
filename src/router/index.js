import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../views/mine/Mine.vue")
  },
  // {
  //   path: "/Err404",
  //   name: "Err404",
  //   component: () => import("../views/404/Err404.vue")
  // },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
