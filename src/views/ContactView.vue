<script setup lang="ts">
import ExternalLink from '@/components/ExternalLink.vue'

const getEmail = () => {
  const parts = ['devolutioncontact', 'gmail', 'com']
  return `${parts[0]}@${parts[1]}.${parts[2]}`
}
</script>

<template>
  <p>
    Send an email to
    <a :href="`mailto:${getEmail()}`">{{ getEmail() }}</a>
    or message us on
    <ExternalLink href="https://facebook.com/devolution.band.fr">Facebook</ExternalLink> or
    <ExternalLink href="https://instagram.com/devolution_band">Instagram</ExternalLink>.
  </p>
</template>

<style scoped>
p {
  font-size: 1.4rem;
  text-align: center;
}
</style>
