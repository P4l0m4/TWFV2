<script setup>
const breadcrumbs = [
  {
    name: 'Accueil',
    url: window.location.origin,
  },
  {
    name: 'Ressources',
    url: window.location.href,
  },
]

useHead(() => {
  return {
    title: 'Ressources gratuites autour de la création de site web',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Apprenez à créer et optimiser votre site web avec nos ressources gratuites. Référencez et augmentez la performance de votre site internet',
      },
    ],
  }
})
</script>

<template>
  <section class="index">
    <div class="index__headline">
      <h1 class="index__headline__title">💩<br />Votre site pue la merde ?</h1>
      <h2 class="index__headline__subtitle">On va régler ça.</h2>
      <a
        class="index__headline__button button-primary"
        target="_blank"
        href="https://calendly.com/tekilawebfactory/30min"
        >Prenez RDV avec nous</a
      >
      <span class="index__headline__under-button-txt">Promis on répond vite</span>
    </div>

    <BlogComponent />
  </section>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style scoped lang="scss">
.index {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  &__headline {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 0 1rem;

    &__title {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;

      @media (min-width: $big-tablet-screen) {
        font-size: 2rem;
      }
    }
    &__subtitle {
      font-size: 1.25rem;
      font-weight: 500;
    }

    &__button {
      margin-top: 1rem;
      width: 100%;
    }

    &__under-button-txt {
      font-weight: 400;
      font-size: 0.85rem;
    }
  }
}
</style>
