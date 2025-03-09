import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import FavoriteView from "@/views/FavoriteView.vue";


const routes = [
  {
    path:'/',
    component: HomeView
  },
  {
    path: '/profile',
    component: ProfileView
  },
  {
    path: '/favorite',
    component: FavoriteView
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router