<script setup>
import { stringToSlug } from '@/utils/slugify.js'

const story = await useAsyncStoryblok('blog', { version: 'published' })

const articleTags = story.value.content.bloglist.map(article => article.tag)
const uniqueTags = [...new Set(articleTags)]

const tagSelected = ref('')

function toggleTag(tag) {
  if (tagSelected.value === tag) {
    tagSelected.value = ''
  } else {
    tagSelected.value = tag
  }
}

const articleOfTheDay = story.value.content.bloglist[0]

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
    name: 'Blog',
    url: window.location.href,
  },
]

useHead(() => {
  return {
    title: 'Le blog Tekila Web Factory',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Apprenez-en plus sur le développement Web, le Web design et le référencement naturel (SEO) grâce à nos articles de blog',
      },
    ],
  }
})
</script>
<template>
  <div class="container">
    <div class="blog">
      <h1 class="blog__title">Le blog Tekila Web Factory</h1>

      <section class="blog__article-of-the-day">
        <span class="blog__article-of-the-day__title">Article du jour</span>
        <NuxtLink
          :to="'/ressources/blog/' + stringToSlug(articleOfTheDay.title)"
          class="blog__article-of-the-day__article"
        >
          <img class="blog__article-of-the-day__article__img" :src="articleOfTheDay.headerimage[0].filename" />

          <div class="blog__article-of-the-day__article__txt">
            <h2 class="blog__article-of-the-day__article__txt__title">{{ articleOfTheDay.title }}</h2>
            <p class="blog__article-of-the-day__article__txt__description">{{ articleOfTheDay.description }}</p>

            <button class="blog__article-of-the-day__article__txt__button button-primary">Lire l'article</button>
          </div>
        </NuxtLink>
      </section>

      <section class="blog__subject">
        <span class="blog__subject__title">Tri par sujet</span>
        <div class="blog__subject__tags">
          <button
            v-for="tag in uniqueTags"
            class="blog__subject__tags__tag"
            :class="{ 'blog__subject__tags__tag--selected': tagSelected === tag }"
            key="tag"
            @click="toggleTag(tag)"
          >
            {{ tag }}
          </button>
        </div>
        <StoryblokComponent v-if="story" :blok="story.content" :tagSelected="tagSelected" />
      </section>
    </div>
    <NewsComponent />
  </div>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 4rem;
  padding: 0 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.blog {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: clamp(343px, 100%, 800px);
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    align-items: inherit;
  }

  &__title {
    font-weight: 800 !important;
    font-size: 1.5rem;

    @media (min-width: $big-tablet-screen) {
      font-size: 2rem;
    }
  }

  &__article-of-the-day {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    align-items: center;
    max-width: 450px;

    @media (min-width: $big-tablet-screen) {
      align-items: flex-start;
      max-width: inherit;
    }

    &__title {
      font-weight: 500;
      font-size: 1.25rem;

      @media (min-width: $big-tablet-screen) {
        font-size: 1.5rem;
      }
    }

    &__article {
      width: 100%;
      border-radius: $radius;
      display: flex;
      background-size: 50%;
      background-repeat: no-repeat;
      overflow: hidden;
      flex-direction: column;
      gap: 1rem;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row-reverse;
        height: 360px;
        gap: 0;
        background-image: url('@/assets/images/gradient-background.svg');
        transition: background-size 0.4s ease;

        &:hover {
          background-size: 60%;
        }
      }

      &__txt {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: flex-end;
        color: $text-color;

        @media (min-width: $big-tablet-screen) {
          color: $primary-color;
          padding: 2rem;
          width: 50%;
        }

        &__title {
          width: 100%;
          font-weight: 500;
          font-size: 1.5rem;

          @media (min-width: $big-tablet-screen) {
            font-size: 2rem;
          }
        }

        &__description {
          width: 100%;
          font-weight: 300;
          text-align: justify;
        }

        &__button {
          margin-top: 0.5rem;
          background-color: $text-color;
          color: $primary-color;
          text-shadow: none;
          width: 100%;

          @media (min-width: $big-tablet-screen) {
            // color: $text-color;
            // background-color: $primary-color;
            // margin-top: 1rem;
            // width: fit-content;
            display: none;
          }
        }
      }

      &__img {
        width: 100%;
        object-fit: cover;
        flex: 1;
        max-height: 200px;

        @media (min-width: $big-tablet-screen) {
          width: 50%;
          height: 100%;
          max-height: 100%;
        }
      }
    }
  }

  &__subject {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 0 0 2rem;
    align-items: center;
    max-width: 100vw;

    @media (min-width: $big-tablet-screen) {
      padding: 0;
      align-items: flex-start;
    }

    &__title {
      font-weight: 600;
      font-size: 1.25rem;

      @media (min-width: $big-tablet-screen) {
        font-size: 1.5rem;
      }
    }

    &__tags {
      display: flex;
      gap: 0.5rem;
      overflow: scroll;
      width: 100%;
      max-width: 100vw;

      &__tag {
        white-space: nowrap;
        display: flex;
        padding: 0.75rem 1.75rem;
        border-radius: 40px;
        border: 2px solid rgba(0, 0, 0, 0.06);
        cursor: pointer;
        transition: background-color 0.4s ease, color 0.4s ease;
        color: $text-color;

        &--selected {
          background-color: $text-color;
          color: $primary-color;
        }
      }
    }
  }
}
</style>
