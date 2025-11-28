<script setup lang="ts">
import Image from 'primevue/image'
import type { ImageProps } from 'primevue/image'

export interface Props extends ImageProps {
  caption: string
}

const props = withDefaults(defineProps<Props>(), {
  imageStyle: () => ({ width: '100%', height: 'auto', display: 'block' }),
})

const { caption, imageStyle, ...imageProps } = props

// Fusionner les styles par défaut avec ceux fournis
const mergedImageStyle = {
  width: '100%',
  height: 'auto',
  display: 'block',
  ...imageStyle,
}
</script>

<template>
  <figure>
    <Image v-bind="imageProps" :image-style="mergedImageStyle" />
    <figcaption class="caption-style">
      {{ caption }}
    </figcaption>
  </figure>
</template>

const

<style scoped>
figure {
  margin: 0;
  max-width: 100%;
}
</style>
