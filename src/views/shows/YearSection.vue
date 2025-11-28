<script setup lang="ts">
import type { Show } from './shows'
import ShowItem from './ShowItem.vue'

defineProps<{
  year: string
  shows: Show[]
}>()
</script>

<template>
  <h2>{{ year }}</h2>
  <div class="shows-list">
    <ShowItem v-for="show in shows" :key="show.id" :show="show" />
  </div>
</template>

<style scoped>
.shows-list {
  display: flex;
  flex-direction: column;
}
</style>
