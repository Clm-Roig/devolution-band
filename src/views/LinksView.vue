<script setup lang="ts">
import ExternalLink from '@/components/ExternalLink.vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'

interface Platform {
  imgName: string
  href: string
  name: string
}

const platforms: Platform[] = [
  {
    imgName: 'bandcamp.webp',
    href: 'https://devolution-band.bandcamp.com',
    name: 'Bandcamp',
  },
  {
    imgName: 'facebook.webp',
    href: 'https://www.facebook.com/devolution.band.fr',
    name: 'Facebook',
  },
  {
    imgName: 'instagram.webp',
    href: 'https://www.instagram.com/devolution_band',
    name: 'Instagram',
  },
  {
    imgName: 'deezer.webp',
    href: 'https://www.deezer.com/artist/195404507',
    name: 'Deezer',
  },
  {
    imgName: 'youtube.webp',
    href: 'https://www.youtube.com/@devolution-band',
    name: 'Youtube',
  },
]
</script>

<template>
  <ul class="platforms">
    <li v-for="platform in platforms" :key="platform.href" class="platform">
      <ExternalLink :href="platform.href">
        <ResponsiveImage
          class="platform-logo"
          :src="`platform-logos/${platform.imgName}`"
          :alt="`${platform.name} logo`"
        />
      </ExternalLink>
    </li>
  </ul>
</template>

<style scoped>
.platforms {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.platform {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
  width: 150px;
  border-bottom: 4px solid;
  border-color: transparent;
  transition: 0.2s all;
  &:hover {
    border-color: var(--p-primary-500);
    transform: scale(1.05);
  }
}
</style>
