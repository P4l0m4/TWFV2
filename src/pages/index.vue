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
      <div class="index__story__img"></div>
      <div class="index__story__floor"></div>
      <div class="index__story__txt">
        <h2 class="index__story__txt__title">
          Votre site web est<br />
          la vitrine de votre entreprise
        </h2>
        <p class="index__story__txt__subtitle">
          C'est aussi une véritable plateforme de conversion, à condition d'en exploiter le potentiel
        </p>
      </div>
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
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 4rem 1rem;
    position: relative;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      padding: 4rem;
    }

    &__img {
      z-index: 1;
      width: 108px;
      height: 200px;
      background-size: cover;
      background-image: url('@/assets/images/sprite-sans-mains.png');
      animation: walk 0.8s steps(3) infinite;
      opacity: 0.8;

      @keyframes walk {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: -334px 0;
        }
      }
    }

    &__floor {
      opacity: 0.6;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 400px;
      background-size: cover;
      background-image: url('@/assets/images/street-sprite.png');
      animation: street 18s infinite linear;

      @keyframes street {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: -2416px 0;
        }
      }
    }

    &__txt {
      z-index: 2;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      max-width: 200px;
      background-color: $primary-color;
      padding: 1rem;
      border-radius: $radius;
      align-self: stretch;
      margin: auto;

      @media (min-width: $big-tablet-screen) {
        max-width: 400px;
      }

      &__title {
        font-weight: 800;

        @media (min-width: $big-tablet-screen) {
          font-size: 1.5rem;
        }
      }

      &__subtitle {
        font-size: 0.75rem;
        font-weight: 500;
        text-align: justify;
        @media (min-width: $big-tablet-screen) {
          font-size: 1.25rem;
        }
      }
    }
  }
}
</style>
