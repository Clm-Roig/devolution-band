<script setup lang="ts">
import { Divider } from 'primevue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'
import ExternalLink from '@/components/ExternalLink.vue'
import type { Release } from './releases'
import ResponsiveImage from '@/components/ResponsiveImage.vue'

defineProps<{
  release: Release
}>()

const { width } = useWindowSize()
const useHorizontalDivider = computed(() => width.value <= 1000)
</script>

<template>
  <div class="release-item">
    <div class="release-picture">
      <ResponsiveImage :src="release.coverImage" :alt="`${release.title} artwork`" preview />
    </div>

    <Divider
      :layout="useHorizontalDivider ? 'horizontal' : 'vertical'"
      style="align-self: stretch"
    />

    <div class="release-info">
      <h2>{{ release.year }} - {{ release.title }}</h2>
      <p>{{ release.releaseInfo }}</p>

      <h3>Tracklist</h3>
      <Accordion>
        <AccordionPanel
          v-for="(track, index) in release.tracks"
          :key="index"
          :value="String(index)"
        >
          <AccordionHeader style="font-size: 1.2rem">
            {{ index + 1 }}. {{ track.title }}
          </AccordionHeader>
          <AccordionContent v-if="track.lyrics">
            <p class="lyrics">{{ track.lyrics }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <div class="credits">
        <h3>Credits</h3>
        <p v-for="(credit, index) in release.credits" :key="index">
          <b>{{ credit.label }}</b
          >:
          <template v-if="credit.link">
            {{ credit.content }} (<ExternalLink :href="credit.link">{{
              credit.linkLabel
            }}</ExternalLink
            >)
          </template>
          <template v-else>{{ credit.content }}</template>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.release-item {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  & > .release-picture {
    width: 33.333%;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  & > .release-info {
    flex: 1;

    & > h2,
    & > p {
      margin-top: 0;
    }

    & .lyrics {
      margin-top: 0;
      white-space: pre-line;
    }

    & > .credits {
      & > p {
        margin-bottom: 0.25rem;
        margin-top: 0;
      }
    }
  }
}
</style>
