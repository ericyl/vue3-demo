import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "Home" },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        redirect: { name: "Normal" },
      },
      {
        path: "normal",
        name: "Normal",
        component: () => import("../views/Normal.vue"),
      },
      {
        path: "composition",
        component: () => import("../views/Composition.vue"),
      },
    ],
  },
  {
    path: "/refs",
    name: "Refs",
    component: () => import("../views/CustomRefs.vue"),
  },
  {
    path: "/router/:id",
    name: "Router",
    props: true,
    component: () => import("../views/CustomRouter.vue"),
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: () => import("../views/CustomVuex.vue"),
  },
  {
    path: "/lifecycle",
    name: "Lifecycle",
    component: () => import("../views/CustomLifecycle.vue"),
  },
  {
    path: "/watch",
    name: "Watch",
    component: () => import("../views/CustomWatch.vue"),
  },
  {
    path: "/input",
    name: "Input",
    component: () =>
      import(/* webpackChunkName: "input" */ "../views/CustomInput.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
