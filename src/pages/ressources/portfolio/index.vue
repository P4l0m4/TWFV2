<script setup>
import { stringToSlug } from '@/utils/slugify.js'
const story = await useAsyncStoryblok('portfolio', { version: 'published' })

const elements = story.value.content.elements

useHead(() => {
  return {
    title: 'Notre portfolio | Tekila Web Factory',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Découvrez notre portfolio de projets, de sites internet et de design Web.',
      },
    ],
  }
})

//JSONLD
const breadcrumbs = [
  {
    name: 'Accueil',
    url: window.location.origin,
  },
  {
    name: 'Ressources',
    url: window.location.origin + '/ressources',
  },
  {
    name: 'Portfolio',
    url: window.location.href,
  },
]
</script>
<template>
  <section class="portfolio">
    <div class="portfolio__titles">
      <h1>Notre portfolio</h1>
      <h2>Des projets, des sites internet, du design Web</h2>
    </div>
    <div class="portfolio__elements">
      <NuxtLink
        :to="'/ressources/portfolio/' + stringToSlug(element.title)"
        class="portfolio__elements__element"
        v-for="element in elements"
        :key="element"
        :style="'background-image: url(' + element.headerimage[0].filename + ')'"
      >
        <span class="portfolio__elements__element__title">{{ element.title }}</span>
        <p class="portfolio__elements__element__subtitle">{{ element.subtitle }}</p>
        <div class="portfolio__elements__element__share">
          <button class="portfolio__elements__element__share__go">
            <img class="portfolio__elements__element__share__go__icon" src="@/assets/icons/arrow.svg" alt="icon" />
          </button>
          <div class="portfolio__elements__element__share__corner-left"></div>
          <div class="portfolio__elements__element__share__corner-right"></div></div
      ></NuxtLink>
    </div>
    <JsonldBreadcrumb :links="breadcrumbs" />
  </section>
</template>
<style scoped lang="scss">
.portfolio {
  display: flex;
  width: 100%;
  padding: 1rem;
  gap: 2rem;
  align-items: center;
  flex-direction: column;

  &__titles {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    & h1 {
      font-size: 2rem;
      font-weight: $overweight;

      @media (min-width: $big-tablet-screen) {
        font-size: 3rem;
      }
    }
    & h2 {
      font-weight: $skinny;
      font-size: 1.25rem;
      text-align: center;

      @media (min-width: $big-tablet-screen) {
        font-size: 1.5rem;
      }
    }
  }

  &__elements {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    &__element {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;
      height: 360px;
      border-radius: $radius;
      width: clamp(343px, 100%, 400px);
      background-size: cover;
      background-position: center;
      cursor: pointer;
      position: relative;

      @media (screen-width: $big-tablet-screen) {
        height: 600px;
      }

      &__title {
        font-size: 1.25rem;
        font-weight: $thick;
        color: $primary-color;
      }

      &__subtitle {
        font-weight: $skinny;
        color: $primary-color;
      }

      &__share {
        display: flex;
        width: 40px;
        height: 40px;
        background-color: $base-color;
        position: relative;
        position: absolute;
        right: 0;
        top: 0;
        border-radius: 0 $radius 0 $radius;

        &__go {
          display: flex;
          padding: 0.5rem;
          gap: 0.75rem;
          align-items: center;
          cursor: pointer;
          width: 40px;
          height: 40px;
          overflow: hidden;

          &__icon {
            width: 20px;
            height: 20px;
            transform: rotate(45deg);
          }
        }

        &__corner-left,
        &__corner-right {
          background-color: transparent;
          height: 20px;
          width: 20px;
          box-shadow: 0 -10px 0 0 $base-color;
          border-bottom-right-radius: $radius;
          border-top-right-radius: $radius;
          position: absolute;
        }

        &__corner-left {
          bottom: -20px;
          right: 0px;
        }
        &__corner-right {
          top: 0;
          left: -20px;
        }
      }
    }
  }
}
</style>
