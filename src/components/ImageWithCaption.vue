<script setup lang="ts">
import type { ImageProps } from 'primevue/image'
import ExternalLink from './ExternalLink.vue'
import ResponsiveImage from './ResponsiveImage.vue'

export interface Props extends ImageProps {
  caption: string | { text: string; href?: string }
}

const props = withDefaults(defineProps<Props>(), {
  imageStyle: () => ({}),
})

const { caption, ...imageProps } = props
</script>

<template>
  <figure>
    <ResponsiveImage v-bind="imageProps" />
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
