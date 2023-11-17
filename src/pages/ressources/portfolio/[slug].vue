<script setup>
import { stringToSlug } from '@/utils/slugify.js'

const story = await useAsyncStoryblok('portfolio', { version: 'published' })

const route = useRoute()
const elementSlug = route.params.slug

const element = story.value.content.elements.find(e => stringToSlug(e.title) === elementSlug)

useHead(() => {
  return {
    title: element.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: element.description,
      },
    ],
  }
})
</script>
<template>
  <section class="portfolio-headline">
    <h1 class="titles">{{ element.title }}</h1>
    <p class="subtitles">{{ element.description }}</p>
  </section>
  <section class="portfolio-gallery">
    <div class="portfolio-gallery__img" v-for="image in element.gallery" :key="image">
      <img v-if="image.filename" :src="image.filename" :alt="image.alt" />
    </div>
    <a class="portfolio-gallery__button button-primary" :href="element.link.url">Voir le projet</a>
  </section>
</template>
<style scoped lang="scss">
.portfolio-headline {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 0 1rem;

  // & h1 {
  //   font-size: 1.5rem;
  //   font-weight: $overweight;

  //   @media (min-width: $big-tablet-screen) {
  //     font-size: 2rem;
  //   }
  // }

  & p {
    max-width: 1000px;
    text-align: center;
  }
}
.portfolio-gallery {
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -webkit-column-gap: 1rem;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  -webkit-column-width: 33.33333333333333%;
  -moz-column-width: 33.33333333333333%;
  column-width: 33.33333333333333%;
  justify-content: center;
  padding: 2rem 1rem 1rem 1rem;

  @media (min-width: $big-tablet-screen) {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }

  @media (min-width: $desktop-screen) {
    padding: 2rem 2rem 2rem 2rem;
  }

  &__img {
    display: flex;
    border-radius: $radius;
    overflow: hidden;
    height: fit-content;
    padding: 1rem 0 0 0;

    @media (min-width: $desktop-screen) {
      padding: 2rem 1rem 1rem 1rem;
    }

    & img {
      width: 100%;
      // max-width: 375px;
      object-fit: contain;
      border-radius: $radius;
    }
  }

  &__button {
    margin: 1rem 0;

    @media (min-width: $desktop-screen) {
      margin: 0 1rem;
    }
  }
}
</style>
