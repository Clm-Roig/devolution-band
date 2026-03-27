<script setup lang="ts">
import DownloadPicture from './DownloadPicture.vue'
import ExternalLink from '@/components/ExternalLink.vue'

const GOOGLE_DOC_RIDER_TO_PDF_LINK =
  'https://docs.google.com/document/d/1IjzMELSeSEVKwSYcCWvjypNvwqeUzuPFShca5rvZv5Q/export?format=pdf'

const GOOGLE_DOC_PRESS_KIT_LINK =
  'https://docs.google.com/document/d/1DdNS4v_M5R2eMsa3oqCScOmdau1ohmdY'
</script>

<template>
  <h2>Documents</h2>
  <a :href="GOOGLE_DOC_RIDER_TO_PDF_LINK">
    <p>Rider et fiche technique (FR)</p>
  </a>
  <a :href="GOOGLE_DOC_PRESS_KIT_LINK">
    <p>Press Kit (FR)</p>
  </a>

  <h2>Logo and pictures</h2>

  <div class="images">
    <DownloadPicture
      style="flex-basis: 50%"
      href="/download/logo_devolution_white.png"
      caption="Logo"
    />
    <DownloadPicture href="/download/line-up.jpg" caption="Line-up" />
    <DownloadPicture href="/download/band1.jpg" caption="Picture 1" />
    <DownloadPicture href="/download/band2.jpg" caption="Picture 2" />
    <DownloadPicture href="/download/band3.jpg" caption="Picture 3" />
  </div>
  <p>
    Line-up picture by <ExternalLink href="https://melodymorana.fr">Melody Morana</ExternalLink>.
    Picture 1, 2 & 3 by Laura Kaczmarek.
  </p>
  <p>
    Do not hesitate to ask us for other photos according to your needs (landscape, portrait, light,
    dark…)
  </p>
</template>

<style scoped>
.images {
  --gap: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: var(--gap);
  & > div {
    flex-basis: calc(33.3333% - var(--gap));
    flex-grow: 1;
  }
}
</style>
