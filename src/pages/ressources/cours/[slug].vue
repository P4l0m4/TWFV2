<script setup>
const story = await useAsyncStoryblok('classes', { version: 'published' })

const route = useRoute()
const courseSlug = route.params.slug

const course = story.value.content.classesList.find(c => stringToSlug(c.name) === courseSlug)
useHead(() => {
  return {
    title: course.name,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: course.description,
      },
    ],
  }
})
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
    name: 'Cours',
    url: window.location.origin + '/ressources/cours',
  },
  {
    name: course.name,
    url: window.location.href,
  },
]

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.name,
  description: course.description,

  hasCourseInstance: [
    {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: `PT${course.duration}M`,
      instructor: {
        '@type': 'Person',
        name: 'Tekila Web Factory',
        url: window.location.origin,
      },
    },
  ],
  offers: {
    '@type': 'Offer',
    category: course.module,
    price: '0',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: window.location.href,
  },
  provider: {
    '@type': 'Organization',
    name: 'Tekila Web Factory',
    sameAs: window.location.origin,
  },
}))
</script>
<template>
  <section class="course">
    <Container>
      <div class="course__header">
        <div class="course__header__headlines">
          <h1 class="course__header__headlines titles">{{ course.name }}</h1>
          <p class="course__header__headlines__description subtitles">{{ course.description }}</p>
        </div>
        <div class="course__header__tags">
          <time class="course__header__tags__time"
            ><img class="course__header__tags__time__img" src="@/assets/icons/time.svg" alt="icone durée" />{{
              course.duration
            }}
            minutes</time
          >
          <div class="course__header__tags__level">
            <span
              class="course__header__tags__level__img"
              :class="{ 'course__header__tags__level__img--filled': course.level >= n }"
              v-for="n in 4"
              :key="n"
            ></span>
          </div>
        </div>
      </div>
      <iframe class="course__video" :src="course.videoLink.url" v-if="course.videoLink.url" allowfullscreen></iframe>
      <article class="course__article" v-html="renderRichText(course.text)" v-if="course.text"></article>

      <iframe class="course__quizz" :src="course.quizzLink.url" v-if="course.quizzLink.url" allowfullscreen></iframe
    ></Container>
    <Container>
      <ClassesAllClasses :story="story" />
    </Container>
  </section>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
.course {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding: 1rem 0;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem 0;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      gap: 2rem;
    }

    &__headlines {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &__title {
        padding: 1rem;

        @media (min-width: $big-tablet-screen) {
          padding: 0 1rem;
        }
      }
    }

    &__tags {
      display: flex;
      color: $text-color-alt;
      width: fit-content;
      height: fit-content;
      gap: 0.5rem;

      &__time {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background-color: $secondary-color-faded;
        padding: 0.5rem 0.75rem;
        border-radius: calc($radius * 4);
        white-space: nowrap;
        width: fit-content;
        height: fit-content;

        &__img {
          width: 24px;
          height: 24px;
        }
      }

      &__level {
        display: flex;
        gap: 0.25rem;
        background-color: $secondary-color-faded;
        padding: 0.5rem 0.75rem;
        border-radius: calc($radius * 4);
        width: fit-content;
        height: fit-content;

        &__img {
          width: 24px;
          height: 24px;
          background-size: contain;
          background-image: url('@/assets/icons/cactus-outline.svg');

          &--filled {
            background-image: url('@/assets/icons/cactus.svg');
          }
        }
      }
    }
  }

  &__article {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &:deep(h1) {
      font-size: $subtitles;
      font-weight: $skinny-thick;
    }
    &:deep(h2) {
      font-size: $base-text;
      font-weight: $skinny-thick;
    }
    &:deep(p) {
      font-size: $base-text;
      font-weight: $skinny;

      @media (min-width: $big-tablet-screen) {
        font-size: calc($base-text * 1.2);
      }
    }
    &:deep(b) {
      font-weight: $overweight;
    }
    &:deep(a) {
      color: $secondary-color-faded;
      text-decoration: line-through;
      text-decoration-color: $secondary-color-faded;
      text-decoration-thickness: 8px;
      color: $text-color;
    }
    &:deep(pre) {
      background-color: $text-color;
      padding: 1rem;
      width: 100%;
      border-radius: $radius;
    }
    &:deep(code) {
      width: 100%;
      white-space: pre-wrap;
      font-size: $base-text;
      font-weight: $skinny;
      color: $text-color-alt;
      background-color: $text-color;
    }
    &:deep(img) {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: $radius;

      @media (min-width: $big-tablet-screen) {
        height: 80vh;
      }
    }
  }

  &__video,
  &__quizz {
    width: 100%;
    height: 500px;
    outline: none;
    border: none;

    @media (min-width: $big-tablet-screen) {
      height: 80vh;
    }
  }
}
</style>
