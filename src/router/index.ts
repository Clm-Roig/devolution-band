import ContactView from '@/views/ContactView.vue'
import DiscographyView from '@/views/discography/DiscographyView.vue'
import GalleryView from '@/views/gallery/GalleryView.vue'
import HomeView from '@/views/HomeView.vue'
import LinksView from '@/views/LinksView.vue'
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
    {
      path: '/gallery',
      name: 'Gallery',
      component: GalleryView,
      meta: {
        title: 'Gallery',
      },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
      meta: {
        title: 'Contact',
      },
    },
    {
      path: '/links',
      name: 'Links',
      component: LinksView,
      meta: {
        title: 'Links',
      },
    },
  ],
})

export default router
