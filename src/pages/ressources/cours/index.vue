<script setup>
import { stringToSlug } from '@/utils/slugify.js'

const story = await useAsyncStoryblok('classes', { version: 'published' })

// const articleTags = story.value.content.bloglist.map(article => article.tag)
// const uniqueTags = [...new Set(articleTags)]

// const tagSelected = ref('')

// function toggleTag(tag) {
//   if (tagSelected.value === tag) {
//     tagSelected.value = ''
//   } else {
//     tagSelected.value = tag
//   }
// }

// const articleOfTheDay = story.value.content.bloglist[0]

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
    name: 'Cours',
    url: window.location.href,
  },
]

useHead(() => {
  return {
    title: 'Mini cours Tekila Web Factory',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Formez-vous au développement Web, au Web design et au référencement naturel (SEO) grâce à nos mini cours en ligne',
      },
    ],
  }
})
</script>
<template>
  <section class="classes">
    <h1 class="classes__title titles">Trouver un cours</h1>

    <Container>{{ story }}</Container>
  </section>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
.classes {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding: 1rem 0;

  &__title {
    text-align: center;
    padding: 1rem;

    @media (min-width: $big-tablet-screen) {
      padding: 0 1rem;
    }
  }
}
</style>
