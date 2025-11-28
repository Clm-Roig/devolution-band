<script setup lang="ts">
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import type { Show } from './shows'

defineProps<{
  show: Show
}>()
</script>

<template>
  <div class="show-item">
    <div class="show-poster">
      <ResponsiveImage
        v-if="show.posterUrl"
        :src="show.posterUrl"
        alt="Poster"
        width="350"
        preview
      />
    </div>
    <div class="show-info">
      <p class="show-day">{{ show.day }} {{ show.year }}</p>
      <p class="show-venue">{{ show.venue }} - {{ show.city }}</p>
      <p class="show-with-bands">
        w/
        <span v-for="(band, index) in show.withBands" :key="band">
          {{ band }}<span v-if="index < show.withBands.length - 1"> + </span>
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.show-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--surface-border);
  & .show-day {
    font-weight: bold;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.75rem 0;

    & p {
      margin: 0.5rem;
    }
  }
}
</style>
