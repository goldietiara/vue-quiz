import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home-view.vue";
import QuizView from "../views/quiz-view.vue";
import NotFoundView from "../views/404-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: "Home",
      component: HomeView,
    },
    {
      path: "/Home",
      redirect: "/",
    },
    {
      path: "/Quiz/:id",
      name: "Quiz",
      meta: "Home",
      component: QuizView,
    },
    {
      path: "/:catchall(.*)*",
      name: "Not Found",
      component: NotFoundView,
    },
  ],
});

export default router;
