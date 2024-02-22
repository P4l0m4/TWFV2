<script setup>
const story = await useAsyncStoryblok('modelisation-3d', { version: 'published' })

//JSONLD
const breadcrumbs = [
  {
    name: 'Accueil',
    url: window.location.origin,
  },
  {
    name: 'Prestations',
    url: window.location.origin + '/prestations',
  },
  {
    name: 'Modélisation 3D',
    url: window.location.href,
  },
]
useHead(() => {
  return {
    title: 'Modélisation de produits en 3D et modélisation architecturale | Tekila Web Factory',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Modélisation 3D de produits et modélisation architecturale à partir de plans ou de simples photos, rendus 3D réalistes ou minimalistes légers.',
      },
    ],
  }
})
</script>
<template>
  <section class="configurator">
    <LandingPageStructure :content="story" />
    <Pricing3D />
  </section>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
.configurator {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
  padding: 2rem 1rem;
  @media (min-width: $big-tablet-screen) {
    gap: 8rem;
    padding: 1rem 2rem;
  }
}
</style>
