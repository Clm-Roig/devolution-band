import DiscographyView from '@/views/discography/DiscographyView.vue'
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
        title: 'Discography',
      },
    },
  ],
})

export default router
