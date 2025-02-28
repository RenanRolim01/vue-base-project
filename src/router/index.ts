import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/store/auth";
import Login from "@/modules/auth/Login.vue";
import UserDashboard from "@/modules/dashboard/UserDashboard.vue";
import EmpresaDashboard from "@/modules/dashboard/EmpresaDashboard.vue";

const routes = [
  { path: "/", component: Login },
  {
    path: "/dashboard",
    component: UserDashboard,
    meta: { requiresAuth: false, role: "user" }, // depois colocar TRUE
  },
  {
    path: "/empresa",
    component: EmpresaDashboard,
    meta: { requiresAuth: false, role: "empresa" },  // depois colocar TRUE
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();

//   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//     return next("/");
//   }

//   if (to.meta.role && to.meta.role !== authStore.role) {
//     return next("/");
//   }

//   next();
// });

export default router;
