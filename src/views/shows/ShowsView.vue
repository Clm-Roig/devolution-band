<!-- ShowsView.vue -->
<script setup lang="ts">
import YearSection from './YearSection.vue'
import { showsByYear, type Show } from './shows'
</script>

<template>
  <div class="shows-view">
    <YearSection
      v-for="year in Object.keys(showsByYear).sort().reverse()"
      :key="year"
      :year="year"
      :shows="showsByYear[year as keyof typeof showsByYear] as Show[]"
    />
  </div>
</template>

<style scoped></style>
