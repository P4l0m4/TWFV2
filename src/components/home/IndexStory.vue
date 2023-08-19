<template>
  <section class="story">
    <div class="story__3d">
      <span class="story__3d__title">Mettez vos produits en valeur </span
      ><span class="story__3d__subtitle">Nous modélisons vos produits et les integrons à votre site web</span>
      <iframe src="https://my.spline.design/devicemodelcopy-08fe113792dd065c990899b30d6a1f20/"></iframe>
    </div>
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
    <!-- <div class="story__pictures">
      <div class="story__pictures__img" src="@/assets/images/seo.jpg">
        <div>Vous souhaitez développer votre propre site e-commerce ?</div>
      </div>
      <div class="story__pictures__img" src="@/assets/images/ux.jpg">
        <div>Vous avez besoin d'un site vitrine</div>
      </div>
    </div> -->
  </section>
</template>
<style scoped lang="scss">
iframe {
  outline: none;
  border: none;
  height: 100vh;
  width: 100vw;
}

.story {
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  @media (min-width: $big-tablet-screen) {
    padding: 0 2rem;
    gap: 12rem;
  }
  &__3d {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
    &__title {
      font-size: 1.25rem;
      font-weight: $overweight;

      @media (min-width: $big-tablet-screen) {
        font-size: 1.5rem;
      }
    }

    &__subtitle {
      font-weight: $skinny;
      margin-top: -1rem;
      text-align: center;
    }
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
      text-align: center;

      @media (min-width: $big-tablet-screen) {
        font-size: 3rem;
        text-align: left;
      }
    }

    &__side {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 500px;
      @media (min-width: $big-tablet-screen) {
        gap: 1rem;
      }

      &__txt {
        font-weight: $skinny;
        text-align: justify;
      }

      &__buttons {
        display: flex;
        gap: 1rem;
        width: 100%;
        flex-direction: column;

        @media (min-width: $big-tablet-screen) {
          flex-direction: row;
        }

        & .button-primary {
          font-family: 'Custom';
          font-weight: $skinny;
        }

        & .button-secondary {
          color: $text-color !important;
        }
      }
    }
  }

  &__pictures {
    width: 100%;
    max-width: 1100px;
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
      display: flex;
      width: clamp(343px, 100%, 800px);
      border-radius: $radius;
      height: 400px;
      background-size: cover;
      background-position: center;
      flex: 2;
      background-image: url('@/assets/images/seo.jpg');

      &:nth-of-type(2) {
        flex: 1;
        background-image: url('@/assets/images/ux.jpg');
      }
    }
  }
}
</style>
