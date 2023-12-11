<script setup>
const breadcrumbs = [
  {
    name: 'Accueil',
    url: window.location.origin,
  },
  {
    name: 'Prestations',
    url: window.location.origin + '/prestations',
  },
  {
    name: 'Creation site web vitrine',
    url: window.location.href,
  },
]

useHead(() => {
  return {
    title: 'Creation de sites web vitrine sur mesure | Tekila Web Factory',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: "Nous créons votre site web sur mesure rapidement et l'optimisons pour attirer un maximum de clients.",
      },
    ],
  }
})
</script>
<template>
  <section class="modules">
    <div class="modules__headlines">
      <h1 class="modules__headlines__title titles" id="modules">Nous créons votre site web personnalisé</h1>
      <h2 class="modules__headlines__subtitle subtitles">
        Pour que votre offre ait la visibilité et le succès qu'elle mérite
      </h2>
    </div>

    <div class="modules__list">
      <div class="modules__list__headlines">
        <h3 class="modules__list__headlines__title subtitles">Fonctionnalités aditionnelles</h3>
        <span class="modules__list__headlines__subtitle">
          Un large panel d'intégrations disponibles pour votre site web
        </span>
      </div>
      <div class="modules__list__cards">
        <div class="modules__list__cards__card">
          <div class="modules__list__cards__card__illustration">
            <img src="@/assets/images/undraw_shopping.svg" alt="illustration creation de sites web seo" />
          </div>
          <div class="modules__list__cards__card__headlines">
            <h3 class="modules__list__cards__card__headlines__title">E-commerce</h3>
            <p class="modules__list__cards__card__headlines__txt">
              Transformez votre site web en une véritable boutique en ligne, c'est simple et rapide.
            </p>
            <div class="modules__list__cards__card__headlines__tags">
              <span class="modules__list__cards__card__headlines__tags__tag">Gestion des paiements</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Gestion des stocks</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Options d'achat</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Confirmation d'achat</span>
            </div>
          </div>
        </div>
        <div class="modules__list__cards__card">
          <div class="modules__list__cards__card__illustration">
            <img src="@/assets/images/shopify.svg" alt="illustration creation de sites web seo" />
          </div>
          <div class="modules__list__cards__card__headlines">
            <h3 class="modules__list__cards__card__headlines__title">Shopify</h3>
            <p class="modules__list__cards__card__headlines__txt">
              Bénéficiez de tous les avantages de Shopify, solution e-commerce robuste et sécurisée, sur votre site web
              personnalisé.
            </p>
          </div>
        </div>
        <div class="modules__list__cards__card">
          <div class="modules__list__cards__card__illustration">
            <img src="@/assets/images/undraw_call.svg" alt="illustration creation de sites web seo" />
          </div>
          <div class="modules__list__cards__card__headlines">
            <h3 class="modules__list__cards__card__headlines__title">Rendez-vous</h3>
            <p class="modules__list__cards__card__headlines__txt">
              Gérez et automatisez vos prises de rendez-vous en ligne pour faciliter la prise de contact avec vos
              clients.
            </p>
            <div class="modules__list__cards__card__headlines__tags">
              <span class="modules__list__cards__card__headlines__tags__tag">Gestion des disponibilités</span>
              <span class="modules__list__cards__card__headlines__tags__tag">RDV physiques</span>
              <span class="modules__list__cards__card__headlines__tags__tag">RDV en ligne</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Visios automatique</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Modification</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Confirmation</span>
            </div>
          </div>
        </div>

        <div class="modules__list__cards__card">
          <div class="modules__list__cards__card__illustration">
            <img src="@/assets/images/undraw_shopping.svg" alt="illustration creation de sites web seo" />
          </div>
          <div class="modules__list__cards__card__headlines">
            <h3 class="modules__list__cards__card__headlines__title">Produits en 3D</h3>
            <p class="modules__list__cards__card__headlines__txt">
              Donnez vie à vos produits en les rendant interactifs pour améliorer l'expérience utilisateur et augmenter
              vos ventes.
            </p>
          </div>
        </div>
        <div class="modules__list__cards__card">
          <div class="modules__list__cards__card__illustration">
            <img src="@/assets/images/undraw_love.svg" alt="illustration creation de sites web seo" />
          </div>
          <div class="modules__list__cards__card__headlines">
            <h3 class="modules__list__cards__card__headlines__title">Avis clients</h3>
            <p class="modules__list__cards__card__headlines__txt">
              Renforcez la confiance de vos clients et favorisez une communauté engagée autour de vos produits ou
              services.
            </p>
            <div class="modules__list__cards__card__headlines__tags">
              <span class="modules__list__cards__card__headlines__tags__tag">Avis avec photo</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Modération des avis</span>
            </div>
          </div>
        </div>
        <div class="modules__list__cards__card">
          <div class="modules__list__cards__card__illustration">
            <img src="@/assets/images/undraw_configurator.svg" alt="illustration creation de sites web seo" />
          </div>
          <div class="modules__list__cards__card__headlines">
            <h3 class="modules__list__cards__card__headlines__title">Configurateur 3D</h3>
            <p class="modules__list__cards__card__headlines__txt">
              Permettez à vos clients de personnaliser et visualiser vos produits en 360° grâce à un configurateur 3D
              intégré à votre site web.
            </p>
          </div>
        </div>
        <div class="modules__list__cards__card">
          <div class="modules__list__cards__card__illustration">
            <img src="@/assets/images/undraw_chart.svg" alt="illustration creation de sites web seo" />
          </div>
          <div class="modules__list__cards__card__headlines">
            <h3 class="modules__list__cards__card__headlines__title">Graphiques dynamiques</h3>
            <p class="modules__list__cards__card__headlines__txt">
              Facilitez la compréhension des données avec des graphiques dynamiques et interactifs.
            </p>
          </div>
        </div>
        <div class="modules__list__cards__card">
          <div class="modules__list__cards__card__illustration">
            <img src="@/assets/images/undraw_calculator.svg" alt="illustration creation de sites web seo" />
          </div>
          <div class="modules__list__cards__card__headlines">
            <h3 class="modules__list__cards__card__headlines__title">Calculateurs</h3>
            <p class="modules__list__cards__card__headlines__txt">
              Facilitez la vie de vos clients en intégrant des calculateurs à votre site web personnalisé.
            </p>
            <div class="modules__list__cards__card__headlines__tags">
              <span class="modules__list__cards__card__headlines__tags__tag">Taxes</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Fuseaux horaires</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Simulateurs</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Conversion de devises</span>
              <span class="modules__list__cards__card__headlines__tags__tag">IMC/IMG</span>
            </div>
          </div>
        </div>
        <div class="modules__list__cards__card">
          <div class="modules__list__cards__card__illustration">
            <img src="@/assets/images/undraw_educator.svg" alt="illustration creation de sites web seo" />
          </div>
          <div class="modules__list__cards__card__headlines">
            <h3 class="modules__list__cards__card__headlines__title">Formations en ligne</h3>
            <p class="modules__list__cards__card__headlines__txt">
              Transformez votre site web en une véritable plateforme d'apprentissage complète en y intégrant un
              catalogue de formations en ligne.
            </p>
            <div class="modules__list__cards__card__headlines__tags">
              <span class="modules__list__cards__card__headlines__tags__tag">Quizzs</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Vidéos</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Cours écrits</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Contenus téléchargeables</span>
              <span class="modules__list__cards__card__headlines__tags__tag">Accès controlé</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="other-module">
    <span class="other-module__title">D'autres fonctionnalités en tête ?</span
    ><a class="other-module__link button-tertiary" href="https://calendly.com/tekilawebfactory/30min" target="_blank"
      >Nous pouvons les développer pour vous.</a
    >
  </section>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
.modules {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
  padding: 5rem 1rem;
  @media (min-width: $big-tablet-screen) {
    gap: 8rem;
    padding: 2rem;
  }

  &__headlines {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    &__title {
      text-align: center;
    }
    &__subtitle {
      text-align: center;
      text-wrap: balance;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @media (min-width: $big-tablet-screen) {
      gap: 4rem;
    }

    &__headlines {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;

      &__title {
        font-size: $subtitles;
        font-weight: $thick;
        text-align: center;
      }
      &__subtitle {
        text-align: center;
        font-size: 1rem;
        font-weight: $skinny;
      }
    }

    &__cards {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;

      @media (min-width: $desktop-screen) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }

      &__card {
        display: flex;
        gap: 1rem;
        box-shadow: $shadow;
        padding: 1rem;
        border-radius: $radius;
        background-color: $primary-color;
        justify-content: center;
        flex-direction: column;
        @media (min-width: $big-tablet-screen) {
          padding: 2rem;
          gap: 2rem;
          flex-direction: row;
          height: 400px;
        }

        &__illustration {
          border-radius: $radius;
          background-color: $base-color;
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;

          & img {
            width: 100%;
            height: 100%;
            max-height: 260px;
            object-fit: contain;
          }
        }

        &__headlines {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          align-items: center;

          @media (min-width: $big-tablet-screen) {
            align-items: flex-start;
          }

          &__title {
            font-size: $subtitles;
            font-weight: $thick;
            width: 100%;
          }
          &__txt {
            font-size: 1rem;
            font-weight: $skinny;
          }

          &__tags {
            margin-top: 1rem;
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            width: 100%;

            &__tag {
              background-color: $base-color;
              padding: 0.5rem 1rem;
              border-radius: $radius;
              font-size: $small-text;
              font-weight: $skinny;
            }
          }
        }
      }
    }
  }
}

.other-module {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;

  &__link {
    line-height: 0.75rem;
  }
}
</style>
