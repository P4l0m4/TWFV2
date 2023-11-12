<script setup>
const story = await useAsyncStoryblok('portfolio', { version: 'published' })
import { stringToSlug } from '@/utils/slugify.js'
const elements = story.value.content.elements
</script>

<template>
  <section class="x">
    <h2 class="x__title">Notre portfolio</h2>
    <h3 class="x__subtitle">Des projets, des sites internet, du design Web</h3>

    <div class="x__slidable">
      <NuxtLink
        :to="'/ressources/portfolio/' + stringToSlug(element.title)"
        class="x__slidable__space"
        v-for="element in elements"
        :key="element"
      >
        <span
          class="x__slidable__space__img"
          :style="'background-image: url(' + element.headerimage[0].filename + ')'"
        ></span>
        <h3 class="x__slidable__space__title">{{ element.title }}</h3>
        <p class="x__slidable__space__description">{{ element.subtitle }}</p>
      </NuxtLink>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.x {
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-direction: column;
  // background-color: $primary-color;
  padding: 1rem 0 1rem 1rem;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem 0 1rem 2rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: $overweight;

    @media (min-width: $big-tablet-screen) {
      font-size: 3rem;
    }
  }

  &__subtitle {
    font-weight: $skinny;
    margin-top: -1rem;
    text-align: center;
    font-size: 1.25rem;
  }
  &__slidable {
    display: flex;
    padding: 1rem 0 1rem 1rem;
    width: 100%;
    overflow-x: scroll;
    gap: 1rem;

    @media (min-width: $big-tablet-screen) {
      padding: 1rem;
    }

    &__space {
      display: flex;
      flex-direction: column;
      transition: transform 0.4s ease;
      gap: 0.5rem;

      &:hover {
        transform: scale(1.04);
      }
      &__img {
        margin-left: -2rem;
        gap: 1rem;
        display: flex;
        height: 350px;
        width: 320px;
        min-width: 320px;
        mask-image: url('@/assets/images/sticks.svg');
        background-size: cover;
        background-position: right;
        transition: background-size 0.4s ease, background-position 0.4s ease;

        &:hover {
          background-size: 140%;
          background-position: center;
          mask-image: url('@/assets/images/sticks3.svg');
        }

        @media (min-width: $big-tablet-screen) {
          width: 360px;
          min-width: 360px;
        }
      }

      &__title {
        @media (min-width: $big-tablet-screen) {
          font-size: 1.25rem;
          font-weight: $thick;
        }
      }
      &__description {
        font-weight: $skinny;
        width: 100%;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
