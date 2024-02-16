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

onMounted(() => {
  useSnipcart().setCurrency('eur')
  useSnipcart().setLanguage('fr')
})
</script>

<template>
  <section class="pricing">
    <div class="pricing__headlines">
      <h2 class="pricing__headlines__title titles">Tarifs</h2>
      <p class="pricing__headlines__subtitle subtitles">
        Modélisation et intégration 3D, développement de configurateurs 3D
      </p>
    </div>
    <div class="pricing__cards">
      <div
        class="pricing__cards__card slide slide-left scale-on-hover snipcart-add-item"
        data-item-id="devis-modelisation-3d"
        data-item-price="10.0"
        data-item-description="Devis personnalisé pour votre projet de modélisation 3D"
        data-item-image="/images/devis-freelance.webp"
        data-item-name="Devis modélisation 3D"
        data-item-custom1-name="Dites nous-en plus sur votre projet"
        data-item-custom1-type="textarea"
        data-item-custom1-placeholder="Besoins, niveau de réalisme, etc"
        data-item-custom1-required="true"
        data-item-custom2-name="Supports pour réaliser la modélisation"
        data-item-custom2-options="Simples photos sous plusieurs angles|Plans 2D avec dimentions détailées|Plans architecturaux"
        data-item-custom3-name="Les modèles 3D doivent être texturés"
        data-item-custom3-type="checkbox"
        data-item-custom4-name="Adresse mail à laquelle vous souhaitez recevoir le devis"
        data-item-custom4-required="true"
        data-item-custom5-name="Numéro auquel vous souhaitez être contacté(e) (uniquement en cas de problème, nous privilégions le contact par mail)"
        data-item-custom5-required="true"
        data-item-url="https://twf-v2.netlify.app/"
      >
        <div class="pricing__cards__card__headlines">
          <h3 class="pricing__cards__card__headlines__title">Modélisation 3D</h3>
          <h4 class="pricing__cards__card__headlines__subtitle">
            Vous souhaitez obtenir des modèles 3D de vos produits
          </h4>
        </div>
        <span class="pricing__cards__card__price"
          ><span class="pricing__cards__card__price__from">A partir de</span> 400 €
          <span class="pricing__cards__card__price__from">TTC</span></span
        >
        <ul class="pricing__cards__card__features">
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Modélisation à partir de photos
          </li>
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Modélisation à partir de plans 2D
          </li>
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Modélisation architecturale
          </li>
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Texturage et optimisation
          </li>

          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Rendu réaliste ou minimaliste
          </li>
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Livraison en 2 semaines max
          </li>
        </ul>
        <button class="pricing__cards__card__button button-primary">Demander un devis</button>
        <NuxtLink
          class="pricing__cards__card__link button-tertiary"
          to="/prestations/creation-site-web#modules"
          @click.stop
          >Voir les fonctionnalités complémentaires</NuxtLink
        >
      </div>
      <div
        class="pricing__cards__card scale-on-hover snipcart-add-item"
        data-item-id="devis-configurateur-3d"
        data-item-price="10.00"
        data-item-description="Devis personnalisé pour le développement de votre configurateur 3D"
        data-item-image="/images/devis-freelance.webp"
        data-item-name="Devis configurateur 3D"
        data-item-custom1-name="Dites nous-en plus sur votre projet"
        data-item-custom1-type="textarea"
        data-item-custom1-placeholder="Besoin, fonctionnalités, etc"
        data-item-custom1-required="true"
        data-item-custom2-name="Quantité de produits à intégrer au configurateur"
        data-item-custom2-options="1|Entre 1 et 5|Plus de 5"
        data-item-custom3-name="Options de personnalisation par produit"
        data-item-custom3-options="1|Entre 1 et 5|Plus de 5"
        data-item-custom4-name="Le configurateur doit être intégré à un site web existant"
        data-item-custom4-type="checkbox"
        data-item-custom5-name="Adresse mail à laquelle vous souhaitez recevoir le devis"
        data-item-custom5-required="true"
        data-item-custom6-name="Numéro auquel vous souhaitez être contacté(e) (uniquement en cas de problème, nous privilégions le contact par mail)"
        data-item-custom6-required="true"
        data-item-url="https://twf-v2.netlify.app/"
      >
        <div class="pricing__cards__card__headlines">
          <h3 class="pricing__cards__card__headlines__title">Configurateurs 3D</h3>
          <h4 class="pricing__cards__card__headlines__subtitle">
            Pour permettre à vos clients de personnaliser leurs produits de façon réaliste et immersive
          </h4>
        </div>
        <span class="pricing__cards__card__price"
          ><span class="pricing__cards__card__price__from">A partir de</span> 14000 €
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
            />Livraison en 2 semaines max
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
        <button class="pricing__cards__card__button button-primary blue">Demander un devis</button>
      </div>
      <div
        class="pricing__cards__card scale-on-hover slide slide-right snipcart-add-item"
        data-item-id="intégration-3d"
        data-item-price="10.00"
        data-item-description="Devis personnalisé pour l'intégration de modèles 3D à votre site web"
        data-item-image="/images/devis-freelance.webp"
        data-item-name="Devis intégration 3D"
        data-item-custom1-name="URL de votre site internet"
        data-item-custom2-name="Dites nous-en plus sur votre projet"
        data-item-custom2-type="textarea"
        data-item-custom2-placeholder="Besoin, fonctionnalités, etc"
        data-item-custom2-required="true"
        data-item-custom3-name="Adresse mail à laquelle vous souhaitez être contacté(e)"
        data-item-custom3-required="true"
        data-item-custom4-name="Numéro auquel vous souhaitez être contacté(e) (uniquement en cas de problème, nous privilégions le contact par mail)"
        data-item-custom4-required="true"
        data-item-url="https://twf-v2.netlify.app/"
      >
        <div class="pricing__cards__card__headlines">
          <h3 class="pricing__cards__card__headlines__title">Intégration 3D</h3>
          <h4 class="pricing__cards__card__headlines__subtitle">
            Vous souhaitez intégrer des modèles 3D à votre site internet
          </h4>
        </div>
        <span class="pricing__cards__card__price"
          ><span class="pricing__cards__card__price__from">A partir de</span> 220 €
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
        <button class="pricing__cards__card__button button-primary">Demander un devis</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.pricing {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 0 2rem;
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
