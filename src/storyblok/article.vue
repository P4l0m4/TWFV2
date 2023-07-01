<script setup>
import { stringToSlug } from '@/utils/slugify.js'
const props = defineProps({ blok: Object, tagSelected: String })
import * as dayjs from 'dayjs'
import 'dayjs/locale/fr'
const date = dayjs(props.blok.date.toString()).locale('fr').format('DD MMMM YYYY')
</script>
<template>
  <NuxtLink
    class="slide"
    :to="stringToSlug(props.blok.title)"
    v-if="props.blok.tag === props.tagSelected || !props.tagSelected"
  >
    <img class="slide__img" :src="blok.headerimage[0].filename" :alt="blok.headerimage.alt" />
    <h1 class="slide__title">{{ props.blok.title }}</h1>
    <p class="slide__description">{{ props.blok.description }}</p>
    <div class="slide__date">
      <span>{{ props.blok.tag }}</span>
      {{ date }}
    </div>

    <StoryblokComponent v-for="blok in blok.parties" :key="blok._uid" :blok="blok" />
  </NuxtLink>
</template>
<style scoped lang="scss">
.slide {
  display: flex;
  flex-direction: column;
  width: 320px;
  min-width: 320px;
  height: 420px;
  cursor: pointer;
  overflow: hidden;
  gap: 1rem;
  border-radius: $radius;

  @media (min-width: $big-tablet-screen) {
    width: 343px;
    min-width: 343px;
  }

  &__img {
    border-radius: $radius;
    width: 100%;
    min-width: 320px;
    height: 200px;
    min-height: 200px;
    object-fit: cover;

    @media (min-width: $big-tablet-screen) {
      width: 100%;
      min-width: 343px;
      height: 240px;
      min-height: 240px;
    }
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    color: $text-color;
    width: 343px;
  }

  &__description {
    font-weight: 400;
    color: $text-color;
    width: 320px;

    @media (min-width: $tablet-screen) {
      width: 343px;
      min-width: 343px;
      height: 240px;
    }
  }

  &__date {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
  }
}
</style>
