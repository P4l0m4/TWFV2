<script setup>
const story = await useAsyncStoryblok('configurateurs-3d', { version: 'published' })

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
    name: 'Configurateurs 3D',
    url: window.location.href,
  },
]
useHead(() => {
  return {
    title: 'Développement de configurateurs 3D sur mesure pour votre site web | Tekila Web Factory',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Augmentez vos ventes et offrez une expérience de personnalisation réaliste et immersive à vos clients.',
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
