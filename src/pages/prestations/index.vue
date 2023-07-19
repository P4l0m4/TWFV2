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
    script: [
      {
        src: 'https://cdn.lordicon.com/bhenfmcm.js',
      },
    ],
  }
})
</script>
<template>
  <section class="prestations">
    <h1 class="prestations__title">Nos prestations sur-mesure rien que pour vous</h1>

    <div class="prestations__cards">
      <NuxtLink class="prestations__cards__card" to="/prestations/creation-site-e-commerce">
        <img class="prestations__cards__card__img" src="@/assets/icons/shop-big.svg" alt="image" />

        <h2 class="prestations__cards__card__title">Création de <br />sites e-commerce</h2>
        <p class="prestations__cards__card__txt">
          Nous créons votre site e-commerce sur-mesure. Nos délais de livraison sont rapides, nos sites web sont
          performants et toujours bien référencés.
        </p>
      </NuxtLink>
      <NuxtLink class="prestations__cards__card" to="/prestations/creation-site-web">
        <img class="prestations__cards__card__img" src="@/assets/icons/site-vitrine.svg" alt="image" />
        <h2 class="prestations__cards__card__title">Création de sites vitrine (comming soon)</h2>
        <p class="prestations__cards__card__txt">
          Lorem ipsum dolor sit amet consectetur adipisicing aperiam architecto incidunt provident sed tenetur nulla
          aliquid quam.
        </p>
      </NuxtLink>
      <NuxtLink class="prestations__cards__card" to="/prestations/audit-optimisation-site-web">
        <img class="prestations__cards__card__img" src="@/assets/icons/optimisation.svg" alt="image" />

        <h2 class="prestations__cards__card__title">Audits diagnostic et conseils personnalisés</h2>
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

    @media (min-width: $big-tablet-screen) {
      font-size: 2rem;
    }
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 0 1rem;

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
      height: 280px;
      overflow: hidden;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.04);
      }

      @media (min-width: $tablet-screen) {
        width: 280px;
      }

      &__img {
        width: fit-content;
        height: 50px;
        animation: slide-from-bottom 1.6s ease;

        &:nth-of-type(2) {
          animation-delay: 1s;
        }
      }

      &__title {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
