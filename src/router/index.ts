import DiscographyView from '@/views/DiscographyView.vue'
import HomeView from '@/views/HomeView.vue'
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
        title: 'Discographie',
      },
    },
  ],
})

export default router
