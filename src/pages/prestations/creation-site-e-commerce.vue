<script setup>
const breadcrumbs = [
  {
    name: 'Accueil',
    url: window.location.origin,
  },
  {
    name: 'Ressources',
    url: window.location.origin + '/ressources',
  },
  {
    name: 'Creation site e-commerce',
    url: window.location.href,
  },
]

useHead(() => {
  return {
    title: 'Création de site e-commerce sur mesure | Tekila Web Factory',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Nous créons votre site e-commerce sur mesure rapides et optimisé pour le référencement naturel (SEO)',
      },
    ],
  }
})
</script>
<template>
  <div class="e-commerce">
    <h1 class="e-commerce__title">Nous créons votre site e-commerce sur-mesure</h1>
    <div class="e-commerce__video">
      <video class="e-commerce__video__media" src="https://youtu.be/GRnWBIJb_Oo" controls></video>
    </div>
    <div class="e-commerce__banner">
      <span class="e-commerce__banner__x3">x3</span>
      <p class="e-commerce__banner__txt">
        Triplez vos <br /><span class="e-commerce__banner__txt__bold">conversions</span> habituelles
      </p>
    </div>
    <h3 class="e-commerce__h3">La qualité d'un dev, moins cher, plus rapide.</h3>
    <div class="e-commerce__image-card">
      <img class="e-commerce__image-card__img" src="@/assets/images/placeholder.svg" alt="creation site internet" />
      <div class="e-commerce__image-card__txt">
        <h4 class="e-commerce__image-card__txt__title">Simple et efficace</h4>
        <p class="e-commerce__image-card__txt__description">
          Votre site est optimisé pour vous garantir un bon SEO et une expérience utilisateur agréable.
        </p>
      </div>
    </div>

    <div class="e-commerce__arguments">
      <div class="e-commerce__arguments__argument">
        <div class="e-commerce__arguments__argument__illustration">
          <img class="e-commerce__arguments__argument__illustration__img" src="@/assets/icons/bag.svg" alt="" />
          <span class="e-commerce__arguments__argument__illustration__data">x3</span>
          <span class="e-commerce__arguments__argument__illustration__txt">Conversions</span>
        </div>
        <div class="e-commerce__arguments__argument__txt">
          <span class="e-commerce__arguments__argument__txt__description">Triplez vos conversions</span>
          <span class="e-commerce__arguments__argument__txt__description">habituelles grâce à votre</span>
          <span class="e-commerce__arguments__argument__txt__description">site web ultra optimisé</span>
        </div>
      </div>
      <div class="e-commerce__arguments__argument">
        <div class="e-commerce__arguments__argument__illustration">
          <img class="e-commerce__arguments__argument__illustration__img" src="@/assets/icons/bag.svg" alt="" />
          <span class="e-commerce__arguments__argument__illustration__data">x3</span>
          <span class="e-commerce__arguments__argument__illustration__txt">Conversions</span>
        </div>
        <div class="e-commerce__arguments__argument__txt">
          <span class="e-commerce__arguments__argument__txt__description">Triplez vos conversions</span>
          <span class="e-commerce__arguments__argument__txt__description">habituelles grâce à votre</span>
          <span class="e-commerce__arguments__argument__txt__description">site web ultra optimisé</span>
        </div>
      </div>
      <div class="e-commerce__arguments__argument">
        <div class="e-commerce__arguments__argument__illustration">
          <img class="e-commerce__arguments__argument__illustration__img" src="@/assets/icons/bag.svg" alt="" />
          <span class="e-commerce__arguments__argument__illustration__data">x3</span>
          <span class="e-commerce__arguments__argument__illustration__txt">Conversions</span>
        </div>
        <div class="e-commerce__arguments__argument__txt">
          <span class="e-commerce__arguments__argument__txt__description">Triplez vos conversions</span>
          <span class="e-commerce__arguments__argument__txt__description">habituelles grâce à votre</span>
          <span class="e-commerce__arguments__argument__txt__description">site web ultra optimisé</span>
        </div>
      </div>
    </div>
    <div class="e-commerce__invitation">
      <p class="e-commerce__invitation__title">On vous explique notre secret gratuitement</p>
      <button class="button-primary">Prenez rendez-vous</button>
    </div>
    <div class="e-commerce__pourquoi-nous">
      <span class="e-commerce__pourquoi-nous__title">Pourquoi nous ?</span>
      <p class="e-commerce__pourquoi-nous__subtitle">Parce qu’on sait ce qu’on fait <br />et on le fait bien.</p>
      <img
        class="e-commerce__pourquoi-nous__img"
        src="@/assets/images/graphique.svg"
        alt="graphique comparatif woocommerce"
      />
    </div>
    <div class="e-commerce__promise">
      <div class="e-commerce__promise__data">
        <span class="e-commerce__promise__data__title">4H</span>
        <div class="e-commerce__promise__data__description">
          <p>C'est le temps moyen qu'il nous faut</p>
          <p>pour vous livrer votre super site e-commerce</p>
        </div>
      </div>

      <div class="e-commerce__promise__button-section">
        <button class="button-primary">Appellez-nous</button>
        <p>Promis on répond vite</p>
      </div>
    </div>
  </div>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style scoped lang="scss">
.e-commerce {
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

  &__video {
    width: 100%;
    max-width: 800px;
    height: 280px;
    padding: 0 1rem;
    display: flex;
    justify-content: center;

    @media (min-width: $tablet-screen) {
      height: 340px;
    }
    @media (min-width: $laptop-screen) {
      height: 400px;
    }

    &__media {
      width: 100%;
      height: 100%;
      border-radius: $radius;
      box-shadow: $shadow;
    }
  }

  &__banner {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $text-color;
    padding: 1rem;
    width: 100%;
    gap: 1rem;

    &__x3 {
      color: $primary-color;
      font-size: 3rem;
    }
    &__txt {
      color: $primary-color-faded;
      font-weight: 300;

      &__bold {
        font-weight: 400;
        color: $primary-color;
      }
    }
  }

  &__h3 {
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0 1rem;
    text-align: center;
    line-height: 40px;
  }

  &__image-card {
    display: flex;
    flex-direction: column;
    width: clamp(280px, 100%, 800px);
    gap: 1rem;

    &__img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: $radius;
    }

    &__txt {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 0.5rem;

      &__title {
        font-size: 1.5rem;
        font-weight: 700;
      }

      &__description {
        font-weight: 300;
      }
    }
  }

  &__arguments {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 0 1rem;
    width: 100%;

    &__argument {
      display: flex;
      width: clamp(280px, 100%, 440px);
      gap: 1rem;
      background-color: $primary-color;
      border-radius: $radius;
      padding: 1rem;
      box-shadow: $shadow;

      &__illustration {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        padding: 1rem;

        &__img {
          width: 24px;
          height: 24px;
          margin-bottom: 0.25rem;
        }
        &__data {
          font-weight: 700;
        }
        &__txt {
          font-weight: 400;
          font-size: 0.75rem;
        }
      }
      &__txt {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.25rem;

        &__description {
          font-weight: 400;

          &:nth-of-type(1) {
            font-weight: 700;
          }
        }
      }
    }
  }

  &__invitation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    width: clamp(280px, 100%, 460px);
    background-color: $primary-color;
    border-radius: $radius;
    box-shadow: $shadow;

    &__title {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      line-height: 32px;
    }

    & button {
      width: 100%;
    }
  }

  &__pourquoi-nous {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: clamp(280px, 100%, 460px);
    text-align: center;

    &__title {
      font-size: 1.5rem;
      font-weight: 700;
    }
    &__img {
      padding-top: 1rem;
      width: 100%;
      object-fit: cover;
    }
  }

  &__promise {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    width: clamp(280px, 100%, 460px);
    background-color: $primary-color;
    border-radius: $radius;
    box-shadow: $shadow;

    &__data {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      align-items: center;

      &__title {
        font-size: 3rem;
        font-weight: 700;
      }
      &__description {
        font-weight: 400;
        font-size: 0.75rem;
        text-align: center;
        color: $text-color;
      }
    }

    &__button-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      width: 100%;

      & button {
        width: 100%;
      }
      & p {
        font-size: 0.75rem;
        font-weight: 400;
        color: $text-color;
      }
    }
  }
}
</style>
