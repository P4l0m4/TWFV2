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
    <h1 class="prestations__title">Nos prestations sur-mesure en fonction de vos besoins</h1>

    <div class="prestations__cards">
      <NuxtLink class="prestations__cards__card" to="/prestations/creation-site-e-commerce">
        <div class="prestations__cards__card__headline">
          <img class="prestations__cards__card__headline__img" src="@/assets/icons/shop-big.svg" alt="image" />

          <h2 class="prestations__cards__card__headline__title">Création de <br />sites e-commerce</h2>
        </div>
        <p class="prestations__cards__card__txt">
          Nous créons votre site e-commerce sur-mesure. Nous vous garantissons des délais de livraison rapides; nos
          boutiques en ligne sont performantes et toujours bien référencées.
        </p>
      </NuxtLink>
      <NuxtLink class="prestations__cards__card" to="/prestations/">
        <div class="prestations__cards__card__headline">
          <img class="prestations__cards__card__headline__img" src="@/assets/icons/site-vitrine.svg" alt="image" />
          <h2 class="prestations__cards__card__headline__title">Création de sites vitrine (comming soon)</h2>
        </div>
        <p class="prestations__cards__card__txt">
          Nous créons votre site vitrine sur-mesure. Nous vous garantissons des délais de livraison rapides, un site web
          unique, performant, et toujours bien référencé.
        </p>
      </NuxtLink>
      <NuxtLink class="prestations__cards__card" to="/prestations/audit-optimisation-site-web">
        <div class="prestations__cards__card__headline">
          <img class="prestations__cards__card__headline__img" src="@/assets/icons/optimisation.svg" alt="image" />

          <h2 class="prestations__cards__card__headline__title">Audits diagnostic et conseils personnalisés</h2>
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

  &__title {
    font-size: 1.5rem;
    text-align: center;
    padding: 0 1rem;

    @media (min-width: $big-tablet-screen) {
      font-size: 2rem;
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

        &__title {
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style>
