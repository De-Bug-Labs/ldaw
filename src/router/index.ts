import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import token from "@/util/jwtToken";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Somos.vue"),
  },
  {
    path: "/somos",
    name: "Somos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/help",
    name: "Help",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Help.vue"),
  },
  {
    path: "/donaciones",
    name: "Donaciones",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Donaciones.vue"),
    beforeEnter: (to, from, next) => {
      let view = { status: true };
      try {
        const data = fetch("/api/view", { credentials: "include" })
          .then((res) => res.json())
          .then((data) => {
            view = data;
            if (!view.status) {
              return next({
                name: "Home",
              });
            }
            next();
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  {
    path: "/admin/login",
    name: "AdminLogin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin.vue"),
    beforeEnter: (to, from, next) => {
      if (token.hasRole("adminPortal:access"))
        return next({ name: "AdminMain" });
      else if (token.hasRole("login")) next();
      else return next({ name: "Home" });
    },
  },
  {
    path: "/salon",
    name: "Salon",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Salon.vue"),
  },
  {
    path: "/material",
    name: "Material",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Material.vue"),
  },
  {
    path: "/calendar",
    name: "Calendar",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Calendar.vue"),
  },
  {
    path: "/admin",
    name: "AdminMain",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Principal.vue"),
    beforeEnter: (to, from, next) => {
      if (token.hasRole("adminPortal:access")) next();
      else return next({ name: "AdminLogin" });
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
