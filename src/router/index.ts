import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/Create"
  },
  {
    path: "/Create",
    name: "Create",
    component: () => import("../views/Create.vue")
  },
  {
    path: "/Skill",
    name: "Skill",
    component: () => import("../views/Skill.vue")
  },
  {
    path: "/Art",
    name: "Art",
    component: () => import("../views/Art.vue")
  },
  {
    path: "/Lift",
    name: "Lift",
    component: () => import("../views/Lift.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;