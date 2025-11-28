<script setup lang="ts">
import ReleaseItem from './ReleaseItem.vue'
import { releases } from './releases'
</script>

<template>
  <ReleaseItem v-for="release in releases" :key="release.id" :release="release" />
</template>

<style scoped></style>
