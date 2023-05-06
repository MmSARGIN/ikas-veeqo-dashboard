import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Forms from "../views/Forms.vue";
import Tables from "../views/Tables.vue";
import UIElements from "../views/UIElements.vue";
import Login from "../views/Login.vue";
import Modal from "../views/Modal.vue";
import Chart from "../views/ChartView.vue";
import Card from "../views/CardView.vue";
import Blank from "../views/BlankView.vue";
import NotFound from "../views/NotFound.vue";
import CardViewVue from "../views/CardView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false, layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/stocks",
    name: "Stocks",
    component: CardViewVue,
    meta: { requiresAuth: true },
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
    meta: { requiresAuth: true },
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    meta: { requiresAuth: true },
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
    meta: { requiresAuth: true },
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
    meta: { requiresAuth: true },
  },
  {
    path: "/charts",
    name: "Chart",
    component: Chart,
    meta: { requiresAuth: true },
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
    meta: { requiresAuth: true },
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isAuthenticated) {
//       next()
//       return
//     }
//     next('/login')
//   } else {
//     next()
//   }
// })

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token");
  console.log("isAuthenticated: ", isAuthenticated);
  if (to.meta.requiresAuth && (!isAuthenticated || isAuthenticated == null)) {
    next({ name: "Login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
