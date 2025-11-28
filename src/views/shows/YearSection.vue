<!-- YearSection.vue -->
<script setup lang="ts">
import type { Show } from './shows'
import ShowItem from './ShowItem.vue'

defineProps<{
  year: string
  shows: Show[]
}>()
</script>

<template>
  <div class="year-section">
    <h2 class="year-title text-4xl font-bold mb-4">{{ year }}</h2>
    <div class="shows-list">
      <ShowItem v-for="show in shows" :key="show.id" :show="show" />
    </div>
  </div>
</template>

<style scoped>
.shows-list {
  display: flex;
  flex-direction: column;
}
</style>
