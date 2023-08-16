<script setup>
import { stringToSlug } from '@/utils/slugify.js'
import { ref } from 'vue'

const dayjs = useDayjs()
const props = defineProps({ blok: Object, tagSelected: String })
const date = dayjs(props.blok.date.toString()).locale('fr').format('DD MMMM YYYY')

const shareWord = ref('Partager')
function copy() {
  navigator.clipboard.writeText(window.location.origin + '/ressources/blog/' + stringToSlug(props.blok.title))
  shareWord.value = 'Copié !'
  setTimeout(() => {
    shareWord.value = 'Partager'
  }, 1000)
}
</script>
<template>
  <NuxtLink
    class="slide"
    :to="'/ressources/blog/' + stringToSlug(props.blok.title)"
    v-if="props.blok.tag === props.tagSelected || !props.tagSelected"
  >
    <div class="slide__wrapper">
      <img class="slide__wrapper__img" :src="blok.headerimage[0].filename" :alt="blok.headerimage.alt" />
      <div class="slide__share">
        <button class="slide__share__plus" @click.prevent="copy">
          <img class="slide__share__plus__icon" src="@/assets/icons/share.svg" alt="icon" />
          {{ shareWord }}
        </button>
        <div class="slide__share__corner-left"></div>
        <div class="slide__share__corner-right"></div>
      </div>
    </div>

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
  height: 428px;
  cursor: pointer;
  overflow: hidden;
  gap: 1rem;
  border-radius: $radius;

  @media (min-width: $big-tablet-screen) {
    width: 360px;
    min-width: 360px;
  }
  &__wrapper {
    position: relative;

    &__img {
      border-radius: $radius;
      width: 100%;
      min-width: 320px;
      height: 200px;
      min-height: 200px;
      object-fit: cover;

      @media (min-width: $big-tablet-screen) {
        width: 100%;
        min-width: 360px;
        height: 240px;
        min-height: 240px;
      }
    }
  }

  &__share {
    display: flex;
    width: 40px;
    height: 40px;
    background-color: $base-color;
    position: relative;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: $radius 0 $radius 0;
    transition: max-width 0.2s ease-in-out, width 0.2s ease-in-out;

    &:hover {
      width: 110px;
      max-width: 110px;
    }

    &__plus {
      display: flex;
      padding: 0.5rem;
      gap: 0.75rem;
      align-items: center;
      cursor: pointer;
      width: 40px;
      height: 40px;
      overflow: hidden;
      color: $text-color !important;

      &:hover {
        width: 110px;
        max-width: 110px;
      }

      &__icon {
        width: 20px;
        height: 20px;
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
      bottom: 3px;
      left: -20px;
      transform: rotate(90deg);
    }
    &__corner-right {
      top: -20px;
      right: 0;
      transform: rotate(90deg);
    }
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    color: $text-color;
    width: 320px;
    @media (min-width: $big-tablet-screen) {
      width: 360px;
    }
  }

  &__description {
    font-weight: 100;
    color: $text-color;
    width: 320px;
    text-align: justify;

    @media (min-width: $big-tablet-screen) {
      width: 360px;
      min-width: 360px;
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
