<script setup>
import { ref } from 'vue'
let isBookAnAuditOpen = ref(false)
</script>
<template>
  <section class="story">
    <div class="story__3d">
      <span class="story__3d__title">Mettez vos produits en valeur </span
      ><span class="story__3d__subtitle">Nous modélisons vos produits et les integrons à votre site web</span>
      <iframe
        src="https://my.spline.design/devicemodelcopy-08fe113792dd065c990899b30d6a1f20/"
        title="produit modélisé en 3d"
      ></iframe>
    </div>
    <div class="story__headlines">
      <span class="story__headlines__title">Votre site web n'est pas qu'une vitrine</span>
      <div class="story__headlines__side">
        <p class="story__headlines__side__txt">
          Votre site web a du potentiel ! Il peut devenir une véritable plateforme de conversion qui profite à votre
          entreprise, à condition de l'optimiser pour en tirer le meilleur parti.
        </p>
        <div class="story__headlines__side__buttons">
          <button class="button-primary" @click="isBookAnAuditOpen = !isBookAnAuditOpen">
            Faire auditer votre site web</button
          ><a href="https://calendly.com/tekilawebfactory/30min" target="_blank" class="button-secondary"
            >Discuter avec nous</a
          >
        </div>
        <AuditBookAnAudit v-if="isBookAnAuditOpen" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
iframe {
  outline: none;
  border: none;
  height: 100vh;
  width: 100%;
  max-width: 2000px;
}

.story {
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: $big-tablet-screen) {
    gap: 12rem;
  }
  &__3d {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    &__title {
      font-size: 2rem;
      font-weight: $overweight;
      padding: 0 1rem;
      text-align: center;
      text-wrap: balance;

      @media (min-width: $big-tablet-screen) {
        font-size: 3rem;
      }
    }

    &__subtitle {
      font-weight: $skinny;
      margin-top: -1rem;
      text-align: center;
      padding: 0 1rem;
      text-wrap: balance;
      font-size: 1.25rem;
    }

    & iframe {
      max-height: 1000px;
    }
  }
  &__headlines {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 0 1rem;
    background-color: $secondary-color;
    width: 100%;
    padding: 2rem;

    @media (min-width: $big-tablet-screen) {
      gap: 4rem;
      flex-direction: row;
    }

    &__title {
      font-size: 2rem;
      font-weight: $thick;
      max-width: 500px;
      text-align: center;
      color: $primary-color;

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
        color: $primary-color;
        font-size: 1.25rem;
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
          background-color: $primary-color !important;
          color: $secondary-color !important;
        }

        & .button-secondary {
          color: $primary-color !important;
          border: $primary-color solid 2px !important;
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
