import DiscographyView from '@/views/discography/DiscographyView.vue'
import HomeView from '@/views/HomeView.vue'
import ShowsView from '@/views/shows/ShowsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Devolution',
      },
    },
    {
      path: '/discography',
      name: 'Discography',
      component: DiscographyView,
      meta: {
        title: 'Discography',
      },
    },
    {
      path: '/shows',
      name: 'Shows',
      component: ShowsView,
      meta: {
        title: 'Shows',
      },
    },
  ],
})

export default router
