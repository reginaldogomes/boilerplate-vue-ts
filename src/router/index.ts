import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/countries',
      name: 'countries',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/CountriesPage.vue'),
    },
    {
      path: '/country/:name',
      name: 'CountryDetail',
      component: () => import('../pages/CountryDetailPage.vue'),
    },
  ],
})

export default router
