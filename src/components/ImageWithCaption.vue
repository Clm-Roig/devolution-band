<script setup lang="ts">
import Image from 'primevue/image'
import type { ImageProps } from 'primevue/image'
import ExternalLink from './ExternalLink.vue'

export interface Props extends ImageProps {
  caption: string | { text: string; href?: string }
}

const props = withDefaults(defineProps<Props>(), {
  imageStyle: () => ({}),
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
      <template v-if="typeof caption === 'string'">
        {{ caption }}
      </template>
      <template v-else>
        <ExternalLink v-if="caption.href" :href="caption.href">
          {{ caption.text }}
        </ExternalLink>
        <span v-else>
          {{ caption.text }}
        </span>
      </template>
    </figcaption>
  </figure>
</template>

<style scoped>
figure {
  margin: 0;
  max-width: 100%;
}
</style>
