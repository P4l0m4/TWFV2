<script setup>
import { onMounted } from 'vue'
useJsonld(() => ({
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Site vitrine',
  image: '',
  description:
    'Optimisation SEO, Hébergement inclus, 5 pages de votre choix, Maquettage des pages principales, Optimisation de la performance, Blog intégré clé en mains, Livraison en 2 semaines max',
  brand: {
    '@type': 'Brand',
    name: 'Tekila Web Factory',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '5',
    ratingCount: '10',
  },
}))

// import { gsap } from 'gsap'

// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  useSnipcart().setCurrency('eur')
  useSnipcart().setLanguage('fr')

  //GSAP
  // if (window.innerWidth > 768) {
  //   const tlLeft = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.slide',
  //       start: '0% 70%',
  //       end: '20% center',
  //       scrub: true,
  //       markers: false,
  //     },
  //   })
  //   const tlRight = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.slide',
  //       start: '0% 70%',
  //       end: '20% center',
  //       scrub: true,
  //       markers: false,
  //     },
  //   })
  //   tlLeft.from('.slide-left', {
  //     x: -400,
  //     duration: 2,
  //     opacity: 0,
  //   })
  //   tlLeft.to('.slide-left', {
  //     x: 0,
  //     duration: 2,
  //     opacity: 1,
  //   })
  //   tlRight.from('.slide-right', {
  //     x: 400,
  //     duration: 2,
  //     opacity: 0,
  //   })
  //   tlRight.to('.slide-right', {
  //     x: 0,
  //     duration: 2,
  //     opacity: 1,
  //   })
  // }
})
</script>

<template>
  <Container>
    <div class="pricing">
      <div class="pricing__headlines">
        <h2 class="pricing__headlines__title titles">Tarifs</h2>
        <p class="pricing__headlines__subtitle subtitles">
          Création de sites vitrine et de sites e-commerce et optimisation de site web
        </p>
      </div>
      <div class="pricing__cards">
        <!-- removed the snipcart-add-item class -->
        <div
          class="pricing__cards__card slide slide-left scale-on-hover"
          data-item-id="devis-vitrine"
          data-item-price="10.0"
          data-item-description="Devis personnalisé pour votre projet de site vitrine"
          data-item-image="/images/devis-freelance.webp"
          data-item-name="Devis vitrine"
          data-item-custom1-name="Dites nous-en plus sur votre projet"
          data-item-custom1-type="textarea"
          data-item-custom1-placeholder="Besoins, fonctionnalités, etc"
          data-item-custom2-name="Nombre de pages (hors pages de blog)"
          data-item-custom2-options="Moins de 5|Entre 5 et 10|Entre 10 et 20|Plus de 20"
          data-item-custom3-name="J'ai besoin d'une charte graphique"
          data-item-custom3-type="checkbox"
          data-item-custom4-name="Adresse mail à laquelle vous souhaitez recevoir le devis"
          data-item-custom4-required="true"
          data-item-url="https://twf-v2.netlify.app/"
        >
          <div class="pricing__cards__card__headlines">
            <h3 class="pricing__cards__card__headlines__title">Site vitrine</h3>
            <h4 class="pricing__cards__card__headlines__subtitle">
              Vous souhaitez développer la présence en ligne de votre entreprise
            </h4>
          </div>
          <span class="pricing__cards__card__price"
            ><span class="pricing__cards__card__price__from">A partir de</span> 2800 €
            <span class="pricing__cards__card__price__from">TTC</span></span
          >
          <ul class="pricing__cards__card__features">
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />Livraison en 1 mois
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />Blog clé en main
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />Hébergement inclus
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />5 pages de votre choix
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />Maquettage des pages principales
            </li>

            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />Optimisation SEO et performance
            </li>
          </ul>
          <a href="tel:0695155301" class="pricing__cards__card__button button-primary">Appelez nous au 0695155301</a>
          <NuxtLink
            class="pricing__cards__card__link button-tertiary"
            to="/prestations/creation-site-web#modules"
            @click.stop
            >Voir les fonctionnalités complémentaires</NuxtLink
          >
        </div>
        <!-- removed the snipcart-add-item class -->
        <div
          class="pricing__cards__card scale-on-hover"
          data-item-id="devis-e-commerce"
          data-item-price="10.00"
          data-item-description="Devis personnalisé pour votre projet de site e-commerce"
          data-item-image="/images/devis-freelance.webp"
          data-item-name="Devis e-commerce"
          data-item-custom1-name="Dites nous-en plus sur votre projet"
          data-item-custom1-type="textarea"
          data-item-custom1-placeholder="Besoin, fonctionnalités, etc"
          data-item-custom2-name="Nombre de pages (hors pages de blog)"
          data-item-custom2-options="Moins de 5|Entre 5 et 10|Entre 10 et 20|Plus de 20"
          data-item-custom3-name="J'ai besoin d'une charte graphique"
          data-item-custom3-type="checkbox"
          data-item-custom4-name="Adresse mail à laquelle vous souhaitez recevoir le devis"
          data-item-custom4-required="true"
          data-item-url="https://twf-v2.netlify.app/"
        >
          <div class="pricing__cards__card__headlines">
            <h3 class="pricing__cards__card__headlines__title">Site E-commerce</h3>
            <h4 class="pricing__cards__card__headlines__subtitle">
              Vous souhaitez vendre vos produits ou services sur internet
            </h4>
          </div>
          <span class="pricing__cards__card__price"
            ><span class="pricing__cards__card__price__from">A partir de</span> 6000 €
            <span class="pricing__cards__card__price__from">TTC</span></span
          >
          <ul class="pricing__cards__card__features">
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-light.svg"
                alt="icone check"
              />Optimisation SEO
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-light.svg"
                alt="icone check"
              />Hébergement inclus
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-light.svg"
                alt="icone check"
              />Récolte des avis clients
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-light.svg"
                alt="icone check"
              />Livraison en 1 mois
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-light.svg"
                alt="icone check"
              />Maquettage des pages principales
            </li>

            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-light.svg"
                alt="icone check"
              />Ajout des 20 premiers produits
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-light.svg"
                alt="icone check"
              />Gestion des produits et stocks
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-light.svg"
                alt="icone check"
              />Gestion des commandes
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-light.svg"
                alt="icone check"
              />Promotions et codes de réduction
            </li>
          </ul>
          <a href="tel:0695155301" class="pricing__cards__card__button button-primary blue"
            >Appelez nous au 0695155301</a
          >
        </div>
        <!-- removed the snipcart-add-item class -->
        <div
          class="pricing__cards__card scale-on-hover slide slide-right"
          data-item-id="seo"
          data-item-price="360.00"
          data-item-description="Optimisation SEO, Hébergement inclus, 5 pages de votre choix, Maquettage des pages principales, Optimisation de la performance, Blog intégré clé en mains, Livraison en 2 semaines max"
          data-item-image="/images/seooo.webp"
          data-item-name="SEO & Performance"
          data-item-custom1-name="URL de votre site internet"
          data-item-custom2-name="Adresse mail à laquelle vous souhaitez être contacté(e)"
          data-item-custom2-required="true"
          data-item-custom3-name="Numéro auquel vous souhaitez être contacté(e) (uniquement en cas de problème, nous privilégions le contact par mail)"
          data-item-custom3-required="true"
          data-item-url="https://twf-v2.netlify.app/"
        >
          <div class="pricing__cards__card__headlines">
            <h3 class="pricing__cards__card__headlines__title">SEO & Performance</h3>
            <h4 class="pricing__cards__card__headlines__subtitle">
              Vous possédez déjà un site internet que vous souhaitez améliorer
            </h4>
          </div>
          <span class="pricing__cards__card__price"
            ><span class="pricing__cards__card__price__from">A partir de</span> 360 €
            <span class="pricing__cards__card__price__from">TTC</span></span
          >
          <ul class="pricing__cards__card__features">
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />Audit SEO initial
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />Livret de préconisations
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />Audit de performance initial
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />SEO (technique & contenu)
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />Amélioration de la rapidité du site
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />Suivi statistique (3 mois)
            </li>
            <li class="pricing__cards__card__features__feature">
              <img
                class="pricing__cards__card__features__feature__check"
                src="@/assets/icons/check-circle-dark.svg"
                alt="icone check"
              />Rapport détaillé des améliorations
            </li>
          </ul>
          <a href="tel:0695155301" class="pricing__cards__card__button button-primary">Appelez nous au 0695155301</a>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped lang="scss">
.pricing {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
  }

  &__headlines {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    &__title {
    }
    &__subtitle {
      text-align: center;
    }
  }

  &__cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__card {
      box-shadow: $shadow;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      border-radius: $radius;
      background-color: $primary-color;
      width: 100%;
      max-width: 360px;
      cursor: pointer !important;

      &:nth-of-type(2) {
        background-color: $secondary-color;
        color: $primary-color;
        box-shadow: $shadow-secondary;
      }

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
        padding: 2rem;
        width: fit-content;
      }

      &__headlines {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;

        &__title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: $thick;
        }
        &__subtitle {
          text-align: center;
          font-size: 1rem;
          font-weight: $skinny;

          &:nth-of-type(2) {
            color: $primary-color;
          }
        }
      }

      &__price {
        font-size: 2.5rem;
        font-weight: $overweight;
        text-align: center;

        &__from {
          font-size: 0.75rem;
          font-weight: $skinny;
        }
      }

      &__features {
        list-style: none;
        &:nth-of-type(2) {
          color: $primary-color;
        }

        &__feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: $skinny;

          &__check {
            width: 26px;
            height: 26px;
          }
        }
      }

      &__button {
        background-color: $secondary-color;
        color: $primary-color;
        box-shadow: $shadow-secondary;

        &:nth-of-type(3) {
          background-color: $primary-color;
          color: $primary-color;
        }
      }
      &__link {
        margin-top: -0.5rem;
        text-align: center;

        @media (min-width: $big-tablet-screen) {
          margin-top: -1rem;
        }
      }
    }
  }
}

.blue {
  background-color: $primary-color;
  color: $secondary-color;
}
</style>
