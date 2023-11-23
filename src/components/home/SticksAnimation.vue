<script setup lang="ts">
import { ref } from 'vue'
import { stringToSlug } from '@/utils/slugify.js'
const story = await useAsyncStoryblok('portfolio', { version: 'published' })

const elements = story.value.content.elements

let slidable = ref<HTMLDivElement>()

function scroll(coordinates: number) {
  if (slidable.value?.scrollLeft) {
    slidable.value.scrollLeft += coordinates
  }
}
</script>

<template>
  <section class="x">
    <h2 class="x__title titles">Portfolio</h2>
    <h3 class="x__subtitle subtitles">Des projets, des sites internet, du design Web</h3>
    <div class="x__slider">
      <div class="x__slider__slidable" ref="slidable">
        <NuxtLink
          :to="'/ressources/portfolio/' + stringToSlug(element.title)"
          class="x__slider__slidable__space"
          v-for="element in elements"
          :key="element"
        >
          <span
            loading="lazy"
            class="x__slider__slidable__space__img"
            :style="'background-image: url(' + element.headerimage[0].filename + ')'"
          ></span>
          <h3 class="x__slider__slidable__space__title">{{ element.title }}</h3>
          <p class="x__slider__slidable__space__description">{{ element.subtitle }}</p>
        </NuxtLink>
      </div>
      <span class="x__slider__slidable__left-arrow not-selectable" @click="scroll(-300)">
        <img src="@/assets/icons/next.svg" alt="arrow-left" />
      </span>
      <span class="x__slider__slidable__right-arrow not-selectable" @click="scroll(300)">
        <img src="@/assets/icons/next.svg" alt="arrow-left" />
      </span>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.x {
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-direction: column;
  padding: 1rem 0 1rem 1rem;
  align-items: center;
  max-width: 2000px;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem 0 1rem 2rem;
  }

  &__title {
    // font-size: 2rem;
    // font-weight: $overweight;

    // @media (min-width: $big-tablet-screen) {
    //   font-size: 3rem;
    // }
  }

  &__subtitle {
    // font-weight: $skinny;
    margin-top: -1rem;
    text-align: center;
    // font-size: 1.25rem;
  }
  &__slider {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;

    &:hover {
      .x__slider__slidable__left-arrow,
      .x__slider__slidable__right-arrow {
        opacity: 1;
        box-shadow: $shadow;
      }
    }
    &__slidable {
      display: flex;
      padding: 1rem 0 1rem 1rem;
      width: 100%;
      overflow-x: scroll;
      gap: 1rem;
      scroll-behavior: smooth;

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
        }
      }

      &__left-arrow,
      &__right-arrow {
        display: none;
        @media (min-width: $laptop-screen) {
          display: flex;
          justify-content: center;
          background-color: $primary-color;
          padding: 1rem;
          border-radius: 50%;
          position: absolute;
          height: fit-content;
          transition: padding 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
          opacity: 0.4;
          margin: auto;
          top: 0;
          bottom: 0;

          &:hover {
            cursor: pointer;
            padding: 1.2rem;
          }

          img {
            width: 20px;
            height: 20px;
          }
        }
      }
      &__left-arrow {
        left: 0;
      }
      &__right-arrow {
        transform: rotate(180deg);
        right: 2rem;

        @media (min-width: $super-big-screen) {
          right: 0;
        }
      }
    }
  }
}
</style>
