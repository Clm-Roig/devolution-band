<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import MasonryGallery from './MasonryGallery.vue'
import { ProgressSpinner } from 'primevue'
import ExternalLink from '@/components/ExternalLink.vue'

const base = import.meta.env.BASE_URL // Needed here because used in onMounted

const shuffledImages: Ref<string[]> = ref([])
const isLoading: Ref<boolean> = ref(true)

const doesImageExist = (url: string) => {
  return new Promise<boolean>((resolve) => {
    const img = new Image()
    img.src = url
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
  })
}

/*
  On component mount, check for existing images and shuffle them.
  Images are named 1.jpg, 2.jpg, etc. in the gallery folder.
*/
onMounted(async () => {
  // TODO: update this number when there are more images
  const maxImagesToCheck = 20
  const imageCheckPromises: Promise<{ index: number; exists: boolean }>[] = []

  for (let i = 1; i <= maxImagesToCheck; i++) {
    imageCheckPromises.push(
      doesImageExist(`${base}/gallery/${i}.jpg`).then((exists) => ({ index: i, exists })),
    )
  }
  const results = await Promise.all(imageCheckPromises)
  const images: string[] = []
  for (const result of results) {
    if (result.exists) {
      images.push(`${base}/gallery/${result.index}.jpg`)
    } else {
      break
    }
  }
  shuffledImages.value = images.sort(() => Math.random() - 0.5)
  isLoading.value = false
})
</script>

<template>
  <Transition name="fade" mode="out-in">
    <ProgressSpinner v-if="isLoading === true" style="display: flex" />
    <div v-else-if="isLoading === false">
      <MasonryGallery :image-u-r-ls="shuffledImages" />
      <p style="text-align: center">
        All pictures by <ExternalLink href="https://melodymorana.fr">Melody Morana</ExternalLink>,
        thank you very much for your work!
      </p>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
