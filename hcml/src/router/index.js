import { createRouter, createWebHistory } from "vue-router";
import ShopHome from "../views/ShopHome.vue";

const routes = [
  {
    path: "/",
    name: "shop",
    component: ShopHome,
  } /*
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },*/,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
