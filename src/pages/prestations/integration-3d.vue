<script setup>
const story = await useAsyncStoryblok('integration-3d', { version: 'published' })

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
    name: 'Intégration 3D',
    url: window.location.href,
  },
]
useHead(() => {
  return {
    title: 'Intégration de vos produits en 3D sur votre site web | Tekila Web Factory',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Donnez vie à vos projets en intégrant vos produits en 3D à votre site web. Augmentez vos ventes en permettant à vos clients de visualiser vos produits à 360°.',
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
  padding: 1rem;
  @media (min-width: $big-tablet-screen) {
    gap: 8rem;
    padding: 1rem 2rem;
  }
}
</style>
