<script setup>
const story = await useAsyncStoryblok('classes', { version: 'published' })

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
    <div class="classes__headlines">
      <h1 class="classes__headlines__title titles">Trouver un cours</h1>
      <h2 class="classes__headlines__subtitle subtitles">Formez-vous gratuitement et testez vos connaissances</h2>
    </div>
    <Container>
      <ClassesSearchableClasses :story="story" />
    </Container>
    <Container><ClassesAllClasses :story="story" /></Container>
  </section>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
.classes {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding: 2rem 0;

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    &__title {
      text-align: center;
      padding: 1rem;

      @media (min-width: $big-tablet-screen) {
        padding: 0 1rem;
      }
    }

    &__subtitle {
      text-align: center;
    }
  }
}
</style>
