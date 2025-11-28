<script setup lang="ts">
import ImageWithCaption from '@/components/ImageWithCaption.vue'
import { Card, Divider, Image } from 'primevue'
</script>

<template>
  <p
    class="serif-font"
    style="text-align: center; font-size: 1.5rem; font-weight: bold; text-transform: uppercase"
  >
    French Death Black Metal
  </p>
  <Card
    :pt="{
      body: {
        style: 'padding: 12px',
      },
    }"
    style="background: var(--p-zinc-900)"
  >
    <template #header>
      <ImageWithCaption
        alt="Devolution on stage"
        src="line-up2.jpg"
        preview
        caption="Picture by Melody Morana"
      />
    </template>
    <template #content>
      <p style="font-size: 1.4rem; margin: 0; text-align: center">
        Devolution is deeply committed to revealing the darkest abominations that humans inflict on
        their own brothers and sisters and on the natural world that shelters them. There’s no need
        to invent stories or fables, just open your eyes and contemplate the raw truth of the world
        that surrounds us. The band combines the violence and intensity of death metal with the
        overwhelming epicness of melodic black metal to create a dynamic, fiery and impetuous sound.
      </p>
    </template>
  </Card>

  <Divider />

  <div class="video-wrapper">
    <iframe
      src="https://www.youtube.com/embed/WgLXYDjUs6U?si=0-X5PQ7kzxy0rBxa"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>

  <Divider />

  <p>
    The project was born in 2015 when Clément (ex-Antropofago, ex-Opprobre, ex-Sunnudagr) decided to
    release a first old school demo, The Perpetual Motion. He then surrounded himself with Maelstrom
    (Sunnudagr, ex-Opprobre) on bass and Steeve on vocals.
  </p>
  <p>
    In 2020, Clément revived the project and decided to produce a first album, Consumer. The album
    is released in 2021 and marks an evolution in the style of the band which becomes more epic,
    melodic and modern. Death, Amon Amarth, Windir, Dissection or Behemoth are clearly influences
    you can find in it. “Consumer” deals with the suffering humanity inflicts to its own individuals
    as well as the destruction that it causes on the planet. Conformism, impact of the others’ look
    on our actions and words, the collapse of our modern societies or the thirst of control of
    humanity on its environment are the main lyrical themes addressed. The one-mand-band becomes a
    full band thanks to the addition of Antoine (Sunnudagr) on guitar, MAD (Just call me MAD) on
    drums and Lunel (Bøl) on bass. The band then performs live alongside groups such as The Great
    Old Ones, Noctem, ANZV, Ad Patres or Ondfødt.
  </p>
  <p>In 2024, a double single, “L’Absolution”, is released on streaming platforms.</p>

  <Divider />

  <Image alt="Devolution on stage" src="on_stage.jpg" width="100%" preview />
  <ul class="line-up">
    <li class="line-up-item">
      <ImageWithCaption alt="Clément" src="Clément.jpg" width="100%" preview caption="Clément" />
    </li>
    <li class="line-up-item">
      <ImageWithCaption alt="Antoine" src="Antoine.jpg" width="100%" preview caption="Antoine" />
    </li>
    <li class="line-up-item">
      <ImageWithCaption alt="Lunel" src="Lunel.jpg" width="100%" preview caption="Lunel" />
    </li>
    <li class="line-up-item">
      <ImageWithCaption alt="MAD" src="MAD.jpg" width="100%" preview caption="MAD" />
    </li>
  </ul>
  <p class="caption-style">All pictures by Melody Morana</p>
  <Divider />

  <p style="font-style: italic; text-align: center">Fuck fascists, fuck NSBM.</p>
</template>

<style scoped>
.video-wrapper {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.video-wrapper iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.line-up {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
  row-gap: 8px;
  & > li {
    flex-basis: 50%;
    @media (max-width: 500px) {
      flex-basis: 100%;
    }
  }
}
</style>
