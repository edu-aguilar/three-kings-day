import Vue from "vue";
import VueRouter from "vue-router";
import Intro from "../views/Intro.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "intro",
    component: Intro,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/present1",
    name: "Present1",
    component: () =>
      import(/* webpackChunkName: "present1" */ "../views/Present1.vue"),
  },
  {
    path: "/present2",
    name: "Present2",
    component: () =>
      import(/* webpackChunkName: "present2" */ "../views/Present2.vue"),
  },
  {
    path: "/present3",
    name: "Present3",
    component: () =>
      import(/* webpackChunkName: "present3" */ "../views/Present3.vue"),
  },
  {
    path: "/present1/yes",
    name: "present1-yes",
    component: () =>
      import(/* webpackChunkName: "present1yes" */ "../views/Present1yes.vue"),
  },
  {
    path: "/present1/no",
    name: "present1-no",
    component: () =>
      import(/* webpackChunkName: "present1no" */ "../views/Present1no.vue"),
  },
  {
    path: "/finish",
    name: "Finish",
    component: () =>
      import(/* webpackChunkName: "finish" */ "../views/Finish.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
