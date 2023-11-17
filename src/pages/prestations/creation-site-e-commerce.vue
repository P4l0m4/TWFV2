<script setup>
import { onMounted } from '@vue/composition-api'

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

onMounted(() => {
  setTimeout(() => {
    const img = document.querySelectorAll('.e-commerce__first__media-desktop')
    window.addEventListener('scroll', () => {
      const value = window.scrollY * -0.5

      img.forEach(element => {
        element.style.transform = `translateY(${value}px)`
      })
    })
  }, 1400)
})
let chosenSolution = ref('Tekila Web Factory')
function changeSolutionLogo(name) {
  chosenSolution.value = name
}
</script>
<template>
  <div class="e-commerce">
    <div class="e-commerce__headlines">
      <h1 class="e-commerce__headlines__title titles">Nous créons votre site e-commerce</h1>
      <h2 class="e-commerce__headlines__subtitle">
        Pour que votre offre ait la visibilité et le succès qu'elle mérite
      </h2>
    </div>

    <div class="e-commerce__first">
      <img
        class="e-commerce__first__media-desktop"
        src="@/assets/images/purple-phone-left.png"
        alt="mockup téléphone site web"
      />
      <img
        class="e-commerce__first__media-mobile"
        src="@/assets/images/purple-phone-left.png"
        alt="mockup téléphone site web"
      />
      <div class="e-commerce__first__promise">
        <div class="e-commerce__first__promise__data">
          <span class="e-commerce__first__promise__data__title titles">4H</span>
          <div class="e-commerce__first__promise__data__description">
            <p>C'est le temps moyen qu'il nous faut</p>
            <p>pour vous livrer votre super site e-commerce</p>
          </div>
        </div>

        <a
          class="e-commerce__first__promise__button button-primary"
          href="https://nuxt3-shopify-template.netlify.app"
          target="_blank"
          >Voir une démo</a
        >
      </div>
      <img
        class="e-commerce__first__media-desktop"
        src="@/assets/images/purple-phone-right.png"
        alt="mockup téléphone site web"
      />
      <img
        class="e-commerce__first__media-mobile"
        src="@/assets/images/purple-phone-right.png"
        alt="mockup téléphone site web"
      />
    </div>

    <div class="e-commerce__arguments">
      <div class="e-commerce__arguments__argument">
        <div class="e-commerce__arguments__argument__illustration">
          <img class="e-commerce__arguments__argument__illustration__img" src="@/assets/icons/bag.svg" alt="icone" />
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
          <img class="e-commerce__arguments__argument__illustration__img" src="@/assets/icons/phone.svg" alt="icone" />
          <span class="e-commerce__arguments__argument__illustration__data">0,4s</span>
          <span class="e-commerce__arguments__argument__illustration__txt">Secondes</span>
        </div>
        <div class="e-commerce__arguments__argument__txt">
          <span class="e-commerce__arguments__argument__txt__description">Temps de chargement</span>
          <span class="e-commerce__arguments__argument__txt__description">moyen de votre future</span>
          <span class="e-commerce__arguments__argument__txt__description">page d’accueil</span>
        </div>
      </div>
      <div class="e-commerce__arguments__argument">
        <div class="e-commerce__arguments__argument__illustration">
          <img class="e-commerce__arguments__argument__illustration__img" src="@/assets/icons/search.svg" alt="icone" />
          <span class="e-commerce__arguments__argument__illustration__data">SEO ++</span>
          <span class="e-commerce__arguments__argument__illustration__txt">Sur Google</span>
        </div>
        <div class="e-commerce__arguments__argument__txt">
          <span class="e-commerce__arguments__argument__txt__description">Générez plus de traffic</span>
          <span class="e-commerce__arguments__argument__txt__description">naturel avec votre site</span>
          <span class="e-commerce__arguments__argument__txt__description">dopé au SEO technique</span>
        </div>
      </div>
    </div>

    <div class="e-commerce__banner">
      <span class="e-commerce__banner__x3">x3</span>
      <p class="e-commerce__banner__txt">
        Triplez vos <br /><span class="e-commerce__banner__txt__bold">conversions</span> habituelles
      </p>
    </div>
    <div class="e-commerce__graph">
      <div class="e-commerce__graph__headlines">
        <h3 class="e-commerce__graph__headlines__title titles">Pourquoi nous ?</h3>
        <p class="e-commerce__graph__headlines__subtitle">
          Nous savons comment optimiser votre site web pour vous garantir un bon SEO et une expérience utilisateur
          agréable.
        </p>
        <div class="e-commerce__graph__headlines__buttons">
          <a
            class="e-commerce__graph__headlines__buttons__button button-primary"
            href="https://calendly.com/tekilawebfactory/30min"
            target="_blank"
            >Prendre rendez-vous</a
          >
          <a
            class="e-commerce__graph__headlines__buttons__button button-secondary"
            href="https://nuxt3-shopify-template.netlify.app"
            target="_blank"
            >Voir une démo</a
          >
        </div>
      </div>
      <div class="e-commerce__graph__image-card">
        <div class="e-commerce__graph__image-card__graph">
          <img
            v-if="chosenSolution === 'Tekila Web Factory'"
            src="@/assets/images/logo.svg"
            class="e-commerce__graph__image-card__graph__logo"
          />
          <img
            v-if="chosenSolution === 'WooCommerce'"
            src="@/assets/images/woocommerce.svg"
            class="e-commerce__graph__image-card__graph__logo"
          />
          <img
            v-if="chosenSolution === 'Shopify seul'"
            src="@/assets/images/shopify.svg"
            class="e-commerce__graph__image-card__graph__logo"
          />
          <EcommerceRadarChart @solution-clicked="changeSolutionLogo" />
        </div>
      </div>
    </div>

    <!-- <div class="e-commerce__pourquoi-nous">
      
        <div class="e-commerce__pourquoi-nous__wrapper__invitation">
          <p class="e-commerce__pourquoi-nous__wrapper__invitation__title">
            On vous explique notre secret gratuitement
          </p>
          <a class="button-primary" href="https://nuxt3-shopify-template.netlify.app">Prenez rendez-vous</a>
        </div>
      </div>
    </div> -->
  </div>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style scoped lang="scss">
.e-commerce {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
  padding: 1rem 0;

  &__headlines {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    &__title {
      // font-size: 1.5rem;
      text-align: center;
      // font-size: 2rem;
      // font-weight: $overweight;
      text-wrap: balance;

      // @media (min-width: $big-tablet-screen) {
      //   font-size: 3rem;
      // }
    }
    &__subtitle {
      text-align: center;
      font-size: 1rem;
      font-weight: $skinny;
      text-wrap: balance;

      @media (min-width: $big-tablet-screen) {
        font-size: 1.25rem;
        font-weight: $skinny;
      }
    }
  }

  &__first {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      flex-direction: row;
    }
    @media (min-width: $laptop-screen) {
      gap: 0rem;
      transform: translateY(-100px);
    }

    &__media-desktop {
      width: 100%;
      max-width: 343px;
      height: 300px;
      border-radius: $radius;
      object-fit: cover;
      animation: apparition 1.4s ease-out;
      display: none;

      @keyframes apparition {
        from {
          transform: translateY(-200px);
        }
        to {
          transform: translateY(0px);
        }
      }

      @media (min-width: $laptop-screen) {
        display: block;
        height: 400px;
        width: 500px;
        max-width: 500px;
      }
      @media (min-width: $desktop-screen) {
        width: 100%;
        height: 500px;
        max-width: 600px;
      }
    }

    &__media-mobile {
      width: 100%;
      max-width: 343px;
      height: 300px;
      border-radius: $radius;
      object-fit: cover;
      @media (min-width: $laptop-screen) {
        display: none;
      }
    }

    &__promise {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      width: 100%;

      @media (min-width: $big-tablet-screen) {
        width: clamp(280px, 100%, 450px);
      }

      &__data {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
        align-items: center;

        &__title {
          // font-size: 3rem;
          // font-weight: 700;
        }
        &__description {
          font-weight: $skinny;
          text-align: center;
          color: $text-color;
        }
      }

      &__button {
        width: 100%;
        font-weight: $skinny;
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
    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__argument {
      display: flex;
      width: clamp(280px, 100%, 440px);
      background-color: $primary-color;
      border-radius: $radius;
      padding: 1rem;
      box-shadow: $shadow;

      @media (min-width: $big-tablet-screen) {
        gap: 1rem;
      }

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

          @media (min-width: $big-tablet-screen) {
            width: 50px;
            height: 50px;
          }
        }
        &__data {
          font-weight: $overweight;
          font-size: 1.5rem;

          @media (min-width: $big-tablet-screen) {
            font-size: 2rem;
          }
        }
        &__txt {
          font-weight: $skinny;
          font-size: 1rem;
        }
      }
      &__txt {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.25rem;

        &__description {
          font-size: 1rem;
          font-weight: $skinny;
          text-wrap: balance;

          @media (min-width: $big-tablet-screen) {
            font-size: 1.25rem;
          }

          &:nth-of-type(1) {
            font-weight: $thick;
          }
        }
      }
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
      font-size: 6rem;
    }
    &__txt {
      color: $primary-color-faded;
      font-weight: $skinny;
      font-size: 1.5rem;

      &__bold {
        font-weight: $thick;
        color: $primary-color;
      }
    }
  }

  &__graph {
    padding: 0 1rem;
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
    }

    &__headlines {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 2rem;
      width: 100%;

      @media (min-width: $big-tablet-screen) {
        width: clamp(280px, 100%, 540px);
      }

      &__title {
        text-align: center;
        font-size: 2rem;
        font-weight: $overweight;

        @media (min-width: $big-tablet-screen) {
          font-size: 3rem;
        }
      }
      &__subtitle {
        text-align: center;
        text-wrap: balance;
      }
      &__buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        @media (min-width: $big-tablet-screen) {
          flex-direction: row;
        }

        &__button {
          width: 100%;
        }
      }
    }

    &__image-card {
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      width: clamp(280px, 100%, 700px);

      &__graph {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &__logo {
          width: 300px;
          height: 100px;
          object-fit: contain;
        }
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
          font-weight: $skinny;
        }
      }
    }
  }

  &__pourquoi-nous {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: clamp(343px, 100%, 800px);
    text-align: center;

    // &__title {
    //   font-size: 1.5rem;
    //   font-weight: 700;
    // }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      width: 100%;
      padding-top: 1rem;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
        justify-content: center;
        padding-top: 0;
      }

      &__img {
        width: fit-content;
        object-fit: cover;
        border-radius: $radius;
        overflow: hidden;

        & img {
          width: 100%;
          object-fit: cover;
          height: 480px;
        }
      }

      &__invitation {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
        width: clamp(343px, 100%, 460px);
        background-color: $primary-color;
        border-radius: $radius;
        box-shadow: $shadow;

        @media (min-width: $big-tablet-screen) {
          align-self: stretch;
          justify-content: center;
          gap: 2rem;
        }

        &__title {
          font-size: 1.25rem;
          font-weight: 700;
          text-align: center;
          line-height: 32px;

          @media (min-width: $big-tablet-screen) {
            font-size: 1.5rem;
          }
        }

        & button {
          width: 100%;
        }
      }
    }
  }
}
</style>
