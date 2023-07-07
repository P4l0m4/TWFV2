<script setup>
const breadcrumbs = [
  {
    name: 'Accueil',
    url: window.location.href,
  },
]

useHead(() => {
  return {
    title: 'Accueil | Tekila Web Factory',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Développement et optimisation de site web. Référencez et augmentez la performance de votre site internet',
      },
    ],
  }
})
</script>

<template>
  <div class="index">
    <IndexHeadline />
    <section class="index__story parallax">
      <h2 class="index__story__title">Votre site web est la vitrine de votre entreprise</h2>
      <p class="index__story__subtitle">
        C'est aussi une véritable plateforme de conversion, à condition d'en exploiter le potentiel
      </p>
    </section>

    <BlogComponent />
  </div>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style scoped lang="scss">
.index {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  &__story {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 4rem 1rem;

    &__title {
      font-size: 1.25rem;
      font-weight: 800;

      @media (min-width: $big-tablet-screen) {
        font-size: 1.5rem;
      }
    }

    &__subtitle {
      font-size: 1rem;
      font-weight: 500;
      @media (min-width: $big-tablet-screen) {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
