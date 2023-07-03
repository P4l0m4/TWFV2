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
</script>
<template>
  <section class="prestations">
    <h1 class="prestations__title">Nos prestations sur-mesure rien que pour vous</h1>

    <div class="prestations__cards">
      <NuxtLink class="prestations__cards__card" to="/prestations/creation-site-e-commerce">
        <img class="prestations__cards__card__img" src="@/assets/icons/shop-big.svg" alt="image" />
        <h2 class="prestations__cards__card__title">Création de sites <br />e-commerce (comming soon)</h2>
        <p class="prestations__cards__card__txt">
          Découvrez lorem ipsum dolor sit amet, consequitur elit, lorem ipsum dolor sit amet, consequitur elit rabaca
          doloris estum quit separatur.
        </p>
      </NuxtLink>
      <NuxtLink class="prestations__cards__card" to="/prestations/creation-site-web">
        <img class="prestations__cards__card__img" src="@/assets/icons/site-vitrine.svg" alt="image" />
        <h2 class="prestations__cards__card__title">Création de sites vitrine (comming soon)</h2>
        <p class="prestations__cards__card__txt">
          Lorem ipsum dolor sit amet consectetur adipisicing aperiam architecto incidunt provident sed tenetur nulla
          aliquid quam lorem ipsu dolor sit amet.
        </p>
      </NuxtLink>
      <NuxtLink class="prestations__cards__card" to="/prestations/audit-optimisation-site-web">
        <img class="prestations__cards__card__img" src="@/assets/icons/optimisation.svg" alt="image" />
        <h2 class="prestations__cards__card__title">Audits diagnostic <br />et conseils (comming soon)</h2>
        <p class="prestations__cards__card__txt">
          Lorem ipsum dolor sit amet consectetur adipisicing aperiam architecto incidunt provident sed tenetur nulla
          aliquid quam lorem ipsum dolor sit amet.
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
