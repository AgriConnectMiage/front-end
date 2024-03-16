import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },

  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory("/wasabi-dataviz"),
  routes: routes,
});

export default router;
