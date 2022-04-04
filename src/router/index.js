import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Beer from "../views/Beer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/beer/:id",
    name: "Beer",
    component: Beer,
  },
];

const router = new VueRouter({
  base: "https://darabosg.github.io/punk_beer/",
  mode: "history",
  routes,
});

export default router;
