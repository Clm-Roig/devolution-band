<script setup lang="ts">
import { Divider } from 'primevue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'
import type { Release } from './releases'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import ExternalLink from '@/components/ExternalLink.vue'

defineProps<{
  release: Release
}>()

const { width } = useWindowSize()

const useHorizontalDivider = computed(() => width.value <= 1000)

const getFlagClass = (lang: string) => {
  const map: Record<string, string> = {
    fr: 'fi fi-fr',
    en: 'fi fi-gb',
    es: 'fi fi-es',
    de: 'fi fi-de',
    it: 'fi fi-it',
    pt: 'fi fi-pt',
  }

  return map[lang] || 'fi fi-un'
}
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
          <AccordionHeader> {{ index + 1 }}. {{ track.title }} </AccordionHeader>
          <AccordionContent v-if="track.lyrics">
            <p class="lyrics">{{ track.lyrics }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <h3 v-if="!!release.reviews">Reviews</h3>

      <Accordion v-if="!!release.reviews">
        <AccordionPanel
          v-for="(review, index) in [...(release.reviews || [])].sort(
            (r1, r2) => r1.language.localeCompare(r2.language) + (r1.rating ? -1 : 1),
          )"
          :key="index"
          :value="String(index)"
        >
          <AccordionHeader>
            <span>
              <span :class="getFlagClass(review.language)" style="margin-right: 8px" />
              {{ review.webzineName }}
              {{ review.rating && ' - ' }}
              <span style="color: #eee; display: inline">
                {{ review.rating ?? '' }}
              </span>
            </span>
          </AccordionHeader>
          <AccordionContent>
            <p class="lyrics">{{ review.quote }}</p>
            <ExternalLink :href="review.link">Full Review</ExternalLink>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <div class="credits">
        <h3>Credits</h3>
        <p v-for="(credit, index) in release.credits" :key="index">
          <b>{{ credit.label }}</b
          >:
          <template v-if="credit.link && credit.linkLabel">
            {{ credit.content }} (<ExternalLink :href="credit.link">{{
              credit.linkLabel
            }}</ExternalLink
            >)
          </template>
          <template v-else-if="credit.link && !credit.linkLabel">
            <ExternalLink :href="credit.link">{{ credit.content }}</ExternalLink>
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
