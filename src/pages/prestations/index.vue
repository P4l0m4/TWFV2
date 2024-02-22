<script setup>
//JSONLD
const breadcrumbs = [
  {
    name: 'Accueil',
    url: window.location.origin,
  },
  {
    name: 'Prestations',
    url: window.location.href,
  },
]
useHead(() => {
  return {
    title: 'Prestations | Tekila Web Factory',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Création de sites web e-commerce et vitrine, optimisation et référencement SEO, audit et conseils personnalisés',
      },
    ],
  }
})
</script>
<template>
  <section class="prestations">
    <h1 class="prestations__title titles">Nos prestations sur-mesure</h1>

    <div class="prestations__cards">
      <NuxtLink class="prestations__cards__card" to="/prestations/modelisation-3d">
        <div class="prestations__cards__card__headline">
          <img
            class="prestations__cards__card__headline__img"
            src="@/assets/icons/3d.svg"
            alt="icone modelisation 3d site web"
          />

          <h2 class="prestations__cards__card__headline__title subtitles">Modélisation 3D</h2>
        </div>
        <p class="prestations__cards__card__txt">
          Nous réalisons des modèles 3D de vos produits pour donner vie à vos projets. Ils peuvent ensuite être utilisés
          pour vos configurateurs 3D, visites virtuelles, etc. Et être intégrés à votre site web.
        </p>
      </NuxtLink>
      <NuxtLink class="prestations__cards__card" to="/prestations/configurateurs-3d">
        <div class="prestations__cards__card__headline">
          <img
            class="prestations__cards__card__headline__img"
            src="@/assets/icons/configurator.svg"
            alt="icone configurateur 3d site web"
          />

          <h2 class="prestations__cards__card__headline__title subtitles">Configurateurs 3D</h2>
        </div>
        <p class="prestations__cards__card__txt">
          Nous développons des configurateurs 3D responsive et intégrables à votre site web pour vos produits
          personnalisables.
        </p> </NuxtLink
      ><NuxtLink class="prestations__cards__card" to="/prestations/integration-3d">
        <div class="prestations__cards__card__headline">
          <img
            class="prestations__cards__card__headline__img"
            src="@/assets/icons/3d-integration.svg"
            alt="icone integration 3d site web"
          />

          <h2 class="prestations__cards__card__headline__title subtitles">Intégration 3D</h2>
        </div>
        <p class="prestations__cards__card__txt">
          Nous intégrons vos modèles 3D à votre site web de façon à préserver la fluidité et la responsivité de votre
          site internet.
        </p>
      </NuxtLink>
      <NuxtLink class="prestations__cards__card" to="/prestations/creation-site-e-commerce">
        <div class="prestations__cards__card__headline">
          <img
            class="prestations__cards__card__headline__img"
            src="@/assets/icons/storefront.svg"
            alt="icone creation site e commerce"
          />

          <h2 class="prestations__cards__card__headline__title subtitles">Sites e-commerce</h2>
        </div>
        <p class="prestations__cards__card__txt">
          Nous créons votre site e-commerce sur-mesure. Nous vous garantissons des délais de livraison rapides; nos
          boutiques en ligne sont performantes et toujours bien référencées.
        </p>
      </NuxtLink>
      <NuxtLink class="prestations__cards__card" to="/prestations/creation-site-web">
        <div class="prestations__cards__card__headline">
          <img
            class="prestations__cards__card__headline__img"
            src="@/assets/icons/computer.svg"
            alt="icone creation site web vitrine"
          />
          <h2 class="prestations__cards__card__headline__title subtitles">Création de sites vitrine</h2>
        </div>
        <p class="prestations__cards__card__txt">
          Nous créons votre site vitrine sur-mesure. Nous vous garantissons des délais de livraison rapides, un site web
          unique, performant, et toujours bien référencé.
        </p>
      </NuxtLink>
      <NuxtLink class="prestations__cards__card" to="/prestations/audit-optimisation-site-web">
        <div class="prestations__cards__card__headline">
          <img class="prestations__cards__card__headline__img" src="@/assets/icons/seo.svg" alt="icone site vitrine" />

          <h2 class="prestations__cards__card__headline__title subtitles">Audits et conseils</h2>
        </div>
        <p class="prestations__cards__card__txt">
          Nous réalisons gratuitement un audit de votre site web pour vous aider à en tirer le meilleur parti et à le
          transformer en véritable plateforme de conversion.
        </p>
      </NuxtLink>
    </div>

    <JsonldBreadcrumb :links="breadcrumbs" />
  </section>
</template>
<style scoped lang="scss">
.prestations {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding: 2rem 0;

  &__title {
    text-align: center;
    padding: 1rem;
    // font-size: 2rem;
    // font-weight: $overweight;
    text-wrap: balance;

    @media (min-width: $big-tablet-screen) {
      padding: 0 1rem;
    }
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 0 1rem;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      background-color: $primary-color;
      border-radius: $radius;
      box-shadow: $shadow;
      padding: 1rem;
      width: 100%;
      transition: transform 0.2s ease-in-out;
      animation: slide-from-bottom 1.6s ease;

      &:hover {
        transform: scale(1.04);
      }

      @media (min-width: $big-tablet-screen) {
        width: 400px;
      }

      &__headline {
        display: flex;
        gap: 1rem;
        align-items: center;

        &__img {
          width: fit-content;
          height: 40px;
        }

        // &__title {
        //   font-size: 1.4rem;
        //   font-weight: $thick;
        // }
      }
    }
  }
}
</style>
