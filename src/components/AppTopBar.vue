<script setup lang="ts">
import Menubar from 'primevue/menubar'
import Image from 'primevue/image'
import type { MenuItem } from 'primevue/menuitem'

interface CustomMenuItem extends MenuItem {
  isExternal?: boolean
}

const items: CustomMenuItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Discography',
    to: '/discography',
  },
  {
    label: 'Shows',
    to: '/shows',
  },
  {
    label: 'Store',
    url: 'https://devolution-band.bandcamp.com/',
    isExternal: true,
  },
  {
    label: 'Gallery',
    to: '/gallery',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
]
</script>

<template>
  <div
    style="
      align-items: center;
      display: flex;
      height: 166px; /* 150 + 8px padding top & bottom */
      justify-content: center;
      width: 100%;
    "
  >
    <Image src="logo_devolution_white.png" alt="Devolution logo" height="150px" />
  </div>
  <Menubar
    :model="items"
    :pt="{
      rootList: {
        style: 'width: 100%; justify-content: center;',
      },
    }"
    style="border: none; text-transform: uppercase; font-size: 1.3rem; background: transparent"
  >
    <template #item="{ item, props }">
      <router-link
        v-if="!item.isExternal && item.to"
        v-slot="{ href, navigate }"
        :to="item.to"
        custom
      >
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span class="serif-font">{{ item.label }}</span>
        </a>
      </router-link>
      <a
        v-else
        v-ripple
        :href="item.url"
        :target="item.isExternal ? '_blank' : undefined"
        v-bind="props.action"
      >
        <span>{{ item.label }}</span>
      </a>
    </template>
  </Menubar>
</template>
