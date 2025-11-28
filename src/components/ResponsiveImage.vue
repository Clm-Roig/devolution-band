<!-- Custom Image wrapper for responsive Image -->
<script setup lang="ts">
import Image from 'primevue/image'
import type { ImageProps } from 'primevue/image'
import { computed } from 'vue'

interface ResponsiveImageProps extends ImageProps {
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  height?: string
  width?: string
}

const props = withDefaults(defineProps<ResponsiveImageProps>(), {
  objectFit: 'cover',
})

const imageStyle = computed(() => ({
  width: props.width || '100%',
  height: props.height || 'auto',
  display: 'block',
  objectFit: props.objectFit,
  ...(typeof props.imageStyle === 'object' ? props.imageStyle : {}),
}))
</script>

<template>
  <Image v-bind="props" :image-style="imageStyle" class="responsive-image-wrapper" />
</template>

<style scoped>
.responsive-image-wrapper {
  width: 100%;
  display: block;
}

:deep(.p-image-preview-container) {
  width: 100%;
}
</style>
