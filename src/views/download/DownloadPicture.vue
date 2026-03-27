<script setup lang="ts">
import ImageWithCaption from '@/components/ImageWithCaption.vue'

defineProps<{ href: string; caption: string }>()
</script>

<template>
  <div>
    <!-- text-decoration: none to prevent double underlining on caption -->
    <a :href="href" download style="text-decoration: none">
      <ImageWithCaption :src="href" :caption="{ text: caption, href: href }" />
    </a>
  </div>
</template>

<style scoped>
figure {
  & :deep(img:hover) {
    transform: scale(1.05);
  }
  & :deep(img) {
    transition: transform 0.2s ease;
  }
}

:deep(figcaption) {
  position: relative; /* when the image is scaled, the caption stays above */
}
</style>
