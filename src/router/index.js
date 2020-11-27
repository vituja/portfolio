import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
// import NotFound from "@/views/NotFound.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Jan Vítů | Developer"
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/NotFound.vue"),
    meta: {
      title: "404 | Stránka nenalezena"
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
