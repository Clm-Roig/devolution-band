<script setup lang="ts">
import ResponsiveImage from '@/components/ResponsiveImage.vue'

defineProps<{
  imageURLs: string[]
}>()
</script>

<template>
  <div class="masonry-container">
    <div v-for="(image, index) in imageURLs" :key="index" class="masonry-item">
      <ResponsiveImage :src="`${image}`" :alt="`Image ${index + 1}`" preview loading="lazy" />
    </div>
  </div>
</template>

<style scoped>
.masonry-container {
  column-count: 3;
  column-gap: 1rem;
  padding: 1rem;
  @media (max-width: 960px) {
    .masonry-container {
      column-count: 2;
    }
  }

  @media (max-width: 600px) {
    .masonry-container {
      column-count: 1;
    }
  }
}

.masonry-item {
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
}
</style>
