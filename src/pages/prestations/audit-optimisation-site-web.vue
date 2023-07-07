<template>
  <section class="things-to-optimize">
    <h2 class="things-to-optimize__title">Comment savoir si votre site web est un bon site web ?</h2>
    <h3 class="things-to-optimize__subtitle">Deux grands critères à optimiser absolument:</h3>
    <div class="things-to-optimize__criterias">
      <div class="things-to-optimize__criterias__card">
        <h4 class="things-to-optimize__criterias__card__title">L'expérience utilisateur (UX)</h4>
        <p class="things-to-optimize__criterias__card__description">
          L'expérience utilisateur est un ensemble des facteurs qui définissent la qualité de l'interaction entre vos
          utilisateurs et votre site web.
        </p>
        <ul>
          Parmi ces facteurs, on retrouve:
          <li>Le design de l'interface (UI)</li>
          <li>La vitesse de chargement du site</li>
          <li>La fluidité de la navigation</li>
          <li>La qualité du contenu</li>
          <li>La facilité à trouver ce que l'on cherche</li>
        </ul>
      </div>
      <div class="things-to-optimize__criterias__card">
        <h4 class="things-to-optimize__criterias__card__title">Le référencement (SEO)</h4>
        <p class="things-to-optimize__criterias__card__description">
          Parce qu'un un site mal référencé est un site qui n'est pas visible par vos clients potentiels.
        </p>
        <ul>
          Parmis les indicateurs d'un bon référencement on retrouve:
          <li>Un rapport d'erreurs propre</li>
          <li>Un taux de rebond inférieur à 40%</li>
          <li>Un domain autority supérieur à 20</li>
          <li>Un traffic naturel de qualité</li>
          <li>Un score LightHouse de 100%</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.things-to-optimize {
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

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

  &__criterias {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding: 2rem 0;
    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
    }

    &__card {
      display: flex;
      flex-direction: column;
      background-color: $primary-color;
      box-shadow: $shadow;
      padding: 1rem;
      align-self: stretch;
      border-radius: $radius;
      max-width: 600px;
      gap: 1rem;

      &__title {
        font-size: 1rem;
        font-weight: 800;
        @media (min-width: $big-tablet-screen) {
          font-size: 1.25rem;
        }
      }
      &__description {
        font-size: 0.75rem;

        @media (min-width: $big-tablet-screen) {
          font-size: 1rem;
        }
      }

      & ul {
        margin-top: 1rem;
        font-size: 0.75rem;
        list-style: inside;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        list-style-image: url('@/assets/icons/stars.svg');

        @media (min-width: $big-tablet-screen) {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
