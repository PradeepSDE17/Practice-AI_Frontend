import { createRouter, createWebHistory } from "vue-router";
import Signup from "../views/signup.vue";

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
