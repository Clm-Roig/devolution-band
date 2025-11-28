<style scoped></style>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppTopBar from './components/AppTopBar.vue'

const route = useRoute()
const pageTitle = computed(() => route.meta.title as string)
</script>

<template>
  <div class="layout-wrapper">
    <header>
      <AppTopBar />
    </header>
    <main
      style="
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 1000px;
        width: 100%;
      "
    >
      <div
        style="background: rgba(0, 0, 0, 0.7); border-radius: 0.25rem; padding: 2rem; width: 100%"
      >
        <h1 v-if="!!pageTitle" style="text-align: center; margin-top: 0">{{ pageTitle }}</h1>
        <RouterView />
      </div>
    </main>
    <footer class="sticky-footer">
      <p style="font-weight: bold">Devolution - French Death Black Metal</p>
    </footer>
  </div>
</template>

<style scoped>
/* Assure que le layout prend toute la hauteur de la fenêtre */
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 100% de la hauteur de la fenêtre */
}

/* Le main prend tout l'espace disponible */
main {
  flex: 1;
}

/* Style du footer */
.sticky-footer {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  background-color: var(--surface-ground); /* Fond sombre pour PrimeVue */
  color: var(--text-color);
  border-top: 1px solid var(--surface-border);
  margin-top: auto; /* Force le footer à rester en bas */
}
</style>
