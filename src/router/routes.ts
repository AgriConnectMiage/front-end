import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import InventoryPage from "@/pages/InventoryPage.vue";
import DashboardPage from "@/pages/DashboardPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: InventoryPage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
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
