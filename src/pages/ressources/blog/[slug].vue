<script setup>
import { stringToSlug } from '@/utils/slugify.js'
import { ref } from 'vue'

const route = useRoute()
const articleSlug = route.params.slug

const story = await useAsyncStoryblok('blog', { version: 'published' })

const article = story.value.content.bloglist.find(a => stringToSlug(a.title) === articleSlug)

const shareWord = ref('Partager')
function copy() {
  navigator.clipboard.writeText(window.location.origin + '/ressources/blog/' + articleSlug)
  shareWord.value = 'Copié !'
  setTimeout(() => {
    shareWord.value = 'Partager'
  }, 1000)
}

useHead(() => {
  return {
    title: article.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: article.description,
      },
    ],
  }
})
</script>
<template>
  <article class="article">
    <section class="article__header">
      <img class="article__header__img" :src="article.headerimage[0].filename" :alt="article.headerimage[0].alt" />
      <div class="article__header__txt">
        <h1 class="article__header__txt__title">{{ article.title }}</h1>
        <p class="article__header__txt__description">{{ article.description }}</p>
      </div>
      <div class="article__header__share">
        <button class="article__header__share__plus" @click.prevent="copy">
          <img class="article__header__share__plus__icon" src="@/assets/icons/share.svg" alt="icon" />
          {{ shareWord }}
        </button>
        <div class="article__header__share__corner-left"></div>
        <div class="article__header__share__corner-right"></div>
      </div>
    </section>
    <section class="article__part" v-for="section in article.sections" :key="section">
      <h2 class="article__part__title">{{ section.title }}</h2>
      <div class="article__part__wrapper desktop-only">
        <div class="article__part__wrapper__paragraphs">
          <p class="article__part__wrapper__paragraphs__txt">{{ section.text1 }}</p>
          <p class="article__part__wrapper__paragraphs__txt">{{ section.text2 }}</p>
        </div>
        <img class="article__part__wrapper__img" :src="section.media[0].filename" :alt="section.media[0].alt" />
      </div>
      <div class="article__part__wrapper mobile-only">
        <p class="article__part__wrapper__txt">{{ section.text1 }}</p>
        <img class="article__part__wrapper__img" :src="section.media[0].filename" :alt="section.media[0].alt" />
        <p class="article__part__wrapper__txt">{{ section.text2 }}</p>
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  gap: 3rem;
  width: clamp(343px, 100%, 1200px);
  margin: auto;

  @media (min-width: $big-tablet-screen) {
    gap: 6rem;
  }

  &__header {
    border-radius: $radius;
    overflow: hidden;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    position: relative;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row-reverse;
      background-image: url('/assets/images/gradient-background.svg');
      background-size: 50%;
      background-repeat: no-repeat;
      gap: 0;
    }

    &__txt {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      color: $text-color;

      @media (min-width: $big-tablet-screen) {
        color: $primary-color;
        width: 50%;
        padding: 2rem;
      }

      &__title {
        font-weight: 800;
        font-size: 2rem;
      }

      &__description {
        font-weight: 300;
        font-size: 1.25rem;
      }
    }

    &__img {
      width: 100%;
      height: 300px;
      object-fit: cover;

      @media (min-width: $big-tablet-screen) {
        height: 380px;
        width: 50%;
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
        bottom: 0;
        left: -20px;
        transform: rotate(90deg);
      }
      &__corner-right {
        top: -20px;
        right: 0;
        transform: rotate(90deg);
      }
    }
  }

  &__part {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &:nth-child(odd) {
      .article__part__wrapper {
        @media (min-width: $big-tablet-screen) {
          flex-direction: row-reverse;
        }
      }
    }

    &__title {
      font-weight: 800;
      font-size: 1.5rem;
    }

    &__txt {
      font-weight: 400;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
        gap: 3rem;

        &__paragraphs {
          width: 50%;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
      }

      @media (min-width: $laptop-screen) {
        gap: 8rem;
      }

      &__img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: $radius;

        @media (min-width: $big-tablet-screen) {
          height: initial;
          width: 50%;
        }
      }
    }
  }
}

.mobile-only {
  display: flex;

  @media (min-width: $big-tablet-screen) {
    display: none;
  }
}
.desktop-only {
  display: none;
  @media (min-width: $big-tablet-screen) {
    display: flex;
  }
}
</style>
