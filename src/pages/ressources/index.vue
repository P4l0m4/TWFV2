<script setup>
//JSONLD
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
  <div class="ressources">
    <h1 class="ressources__title">Nos ressources à disposition pour vous aider</h1>

    <div class="ressources__cards">
      <NuxtLink class="ressources__cards__card" to="/ressources/blog">
        <img class="ressources__cards__card__img" src="@/assets/icons/document.svg" alt="image" />
        <h2 class="ressources__cards__card__title">Blog</h2>
        <p class="ressources__cards__card__txt">
          Découvrez nos derniers articles de blog pour vous aider à comprendre le monde du web et du développement
        </p>
      </NuxtLink>
      <NuxtLink class="ressources__cards__card" to="/ressources/portfolio">
        <img class="ressources__cards__card__img" src="@/assets/icons/dashboard.svg" alt="image" />
        <h2 class="ressources__cards__card__title">Portfolio</h2>
        <p class="ressources__cards__card__txt">
          Lorem ipsum dolor sit amet consectetur adipisicing aperiam architecto incidunt, lorem ipsum dolor sit amet.
        </p>
      </NuxtLink>
      <NuxtLink class="ressources__cards__card" to="/ressources/tutoriels">
        <img class="ressources__cards__card__img" src="@/assets/icons/tutorial.svg" alt="image" />
        <h2 class="ressources__cards__card__title">Tutoriels (comming soon)</h2>
        <p class="ressources__cards__card__txt">
          Lorem adipisicing aperiam architecto incidunt provident sed tenetur nulla aliquid quam
        </p>
      </NuxtLink>
    </div>
  </div>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style scoped lang="scss">
.ressources {
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
      height: 220px;
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
