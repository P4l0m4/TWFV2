<template>
  <section class="story">
    <div class="story__headlines">
      <span class="story__headlines__title">Votre site web n'est pas qu'une vitrine</span>
      <div class="story__headlines__side">
        <p class="story__headlines__side__txt">
          Votre site web a du potentiel ! Il peut devenir une véritable plateforme de conversion qui profite à votre
          entreprise, à condition de l'optimiser pour en tirer le meilleur parti.
        </p>
        <div class="story__headlines__side__buttons">
          <button class="button-primary">Faire auditer votre site web</button
          ><button class="button-secondary">Discuter avec nous</button>
        </div>
      </div>
    </div>
    <div class="story__pictures">
      <img class="story__pictures__img" src="@/assets/images/seo.jpg" alt="à quoi sert le seo" />
      <img class="story__pictures__img" src="@/assets/images/ux.jpg" alt="qu'est ce que l'ux" />
    </div>
  </section>
</template>
<style scoped lang="scss">
.story {
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  @media (min-width: $big-tablet-screen) {
    padding: 0 2rem;
    gap: 8rem;
  }

  &__headlines {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (min-width: $big-tablet-screen) {
      gap: 4rem;
      flex-direction: row;
    }

    &__title {
      font-size: 2rem;
      font-weight: 700;
      max-width: 500px;

      @media (min-width: $big-tablet-screen) {
        font-size: 3rem;
      }
    }

    &__side {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 500px;

      &__txt {
        font-weight: 100;
      }

      &__buttons {
        display: flex;
        gap: 0.5rem;
        width: 100%;
        flex-direction: column;

        @media (min-width: $big-tablet-screen) {
          flex-direction: row;
        }

        & .button-primary {
          font-family: 'Poppins';
          font-weight: 300;
        }
      }
    }
  }

  &__pictures {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      flex-direction: row;
    }

    &__img {
      width: clamp(343px, 100%, 800px);
      border-radius: $radius;
      height: 400px;
      object-fit: cover;
      flex: 2;

      &:nth-of-type(2) {
        flex: 1;
      }
    }
  }
}
</style>
