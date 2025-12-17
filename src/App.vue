<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppTopBar from './components/AppTopBar.vue'
import ResponsiveImage from './components/ResponsiveImage.vue'

const route = useRoute()
const pageTitle = computed(() => route.meta.title as string)

const socialIconSize = '1.5rem'

const socialLinks = [
  {
    name: 'Bandcamp',
    url: 'https://devolution-band.bandcamp.com',
    img: 'bandcamp-logo.png',
  },
  { name: 'Facebook', url: 'https://facebook.com/devolution.band.fr', icon: 'pi pi-facebook' },
  { name: 'Instagram', url: 'https://instagram.com/devolution_band', icon: 'pi pi-instagram' },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/artist/195404507',
    img: 'deezer-logo.png',
  },
  { name: 'YouTube', url: 'https://www.youtube.com/@devolution-band', icon: 'pi pi-youtube' },
]
</script>

<template>
  <div class="layout-wrapper">
    <header>
      <AppTopBar />
    </header>
    <main
      style="
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 1000px;
        width: 100%;
      "
    >
      <div class="content">
        <h1 v-if="!!pageTitle" style="text-align: center; margin-top: 0">{{ pageTitle }}</h1>
        <RouterView />
      </div>
    </main>
    <footer class="sticky-footer">
      <p style="font-weight: bold; margin: 0">Devolution - Death Black Metal</p>
      <div class="social-links">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          :aria-label="social.name"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <i v-if="!!social.icon" :class="social.icon"></i>
          <ResponsiveImage v-else :src="social.img" :width="socialIconSize" />
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.content {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0.25rem;
  padding: 2rem;
  width: 100%;
  @media (max-width: 800px) {
    padding: 1.5rem;
  }
  @media (max-width: 500px) {
    padding: 1rem;
  }
}

/* Assure que le layout prend toute la hauteur de la fenêtre */
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 100% de la hauteur de la fenêtre */
}
/* Le main prend tout l'espace disponible */
main {
  flex: 1;
}
.sticky-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  padding: 1rem;
  background-color: var(--surface-ground); /* Fond sombre pour PrimeVue */
  color: var(--text-color);
  border-top: 1px solid var(--surface-border);
  margin-top: auto; /* Force le footer à rester en bas */
}

.social-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.social-link {
  color: var(--text-color);
  font-size: 1rem;
  transition:
    color 0.3s ease,
    transform 0.2s ease;
  & > i {
    font-size: v-bind(socialIconSize);
  }
}

.social-link:hover {
  color: var(--primary-color);
  transform: scale(1.1);
}
</style>
