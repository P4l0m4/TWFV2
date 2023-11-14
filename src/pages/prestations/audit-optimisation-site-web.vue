<template>
  <section class="things-to-optimize">
    <div class="things-to-optimize__explanations">
      <h2 class="things-to-optimize__explanations__title">Votre site web est-il un bon site web ?</h2>
      <span class="things-to-optimize__explanations__subtitle">Deux grands critères à optimiser absolument:</span>
      <div class="things-to-optimize__explanations__criterias">
        <div class="things-to-optimize__explanations__criterias__card">
          <div class="things-to-optimize__explanations__criterias__card__headlines">
            <h3 class="things-to-optimize__explanations__criterias__card__headlines__title">
              L'expérience utilisateur (UX)
            </h3>
            <p class="things-to-optimize__explanations__criterias__card__headlines__description">
              Parce qu'une UX de qualité diminue les frictions pour transformer vos visiteurs en clients.
            </p>
          </div>
          <!-- <ul>
          Parmi ces facteurs, on retrouve:
          <li><img src="@/assets/icons/stars.svg" alt="icone" />Le design de l'interface (UI)</li>
          <li><img src="@/assets/icons/stars.svg" alt="icone" />La vitesse de chargement du site</li>
          <li><img src="@/assets/icons/stars.svg" alt="icone" />La qualité du contenu</li>
          <li><img src="@/assets/icons/stars.svg" alt="icone" />La facilité à trouver ce que l'on cherche</li>
        </ul> -->

          <div class="things-to-optimize__explanations__criterias__card__share">
            <NuxtLink class="things-to-optimize__explanations__criterias__card__share__go" to="/ressources/blog">
              <span>Pour en savoir plus</span>
              <button>Jetez un oeil à notre blog</button>
            </NuxtLink>
            <div class="things-to-optimize__explanations__criterias__card__share__corner-left"></div>
            <div class="things-to-optimize__explanations__criterias__card__share__corner-right"></div>
          </div>
        </div>
        <div class="things-to-optimize__explanations__criterias__card">
          <div class="things-to-optimize__explanations__criterias__card__headlines">
            <h3 class="things-to-optimize__explanations__criterias__card__headlines__title">Le référencement (SEO)</h3>
            <p class="things-to-optimize__explanations__criterias__card__headlines__description">
              Parce qu'un un site web mal référencé est un site qui n'est pas visible par vos clients.
            </p>
          </div>

          <!-- <ul>
          Parmis les indicateurs d'un bon référencement on retrouve:
          <li><img src="@/assets/icons/stars.svg" alt="icone" />Un rapport d'erreurs propre</li>
          <li><img src="@/assets/icons/stars.svg" alt="icone" />Un taux de rebond inférieur à 40%</li>
          <li><img src="@/assets/icons/stars.svg" alt="icone" />Un domain autority supérieur à 20</li>
          <li><img src="@/assets/icons/stars.svg" alt="icone" />Un score LightHouse de 100%</li>
        </ul> -->

          <div class="things-to-optimize__explanations__criterias__card__share">
            <NuxtLink class="things-to-optimize__explanations__criterias__card__share__go" to="/ressources/blog">
              <span>Pour en savoir plus</span>
              <button>Jetez un oeil à notre blog</button>
            </NuxtLink>
            <div class="things-to-optimize__explanations__criterias__card__share__corner-left"></div>
            <div class="things-to-optimize__explanations__criterias__card__share__corner-right"></div>
          </div>
        </div>
      </div>
    </div>
    <AuditPopUp />
  </section>
  <!-- <section class="measures">
    <h2 class="measures__title">Ce que nous mesurons</h2>
    <h3 class="measures__subtitle">Pour bien auditer votre site web</h3>
    <div class="measures__measure"> -->
  <!-- <div class="measures__measure__images">
        <img
          class="measures__measure__images__background"
          src="@/assets/images/ux.webp"
          alt="illustration ux fond"
        /><img class="measures__measure__images__img" src="@/assets/images/ux.webp" alt="illustration ux" />
      </div> -->
  <!-- <AuditMountainChart />
      <div class="measures__measure__txt">
        <h4 class="measures__measure__txt__title">Title of the example</h4>
        <p class="measures__measure__txt__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, impedit quidem est enim incidunt blanditiis
          amet nostrum totam. Molestiae quibusdam eligendi, quas officia minus similique? Est, voluptate harum. Rem,
          dicta.
        </p>
      </div>
    </div>
  </section> -->
</template>
<style scoped lang="scss">
.things-to-optimize {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  @media (min-width: $big-tablet-screen) {
    padding: 1rem 0;
  }

  &__proposition {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;

    & h2 {
      font-size: 1.25rem;
      font-weight: $overweight;

      @media (min-width: $big-tablet-screen) {
        font-size: 1.5rem;
      }
    }

    &__buttons {
      padding: 2rem 0;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;
      justify-content: center;

      & a,
      button {
        width: 100%;

        @media (min-width: $tablet-screen) {
          width: fit-content;
        }
      }
    }
  }

  &__explanations {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

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
      font-size: 1rem;
      font-weight: $skinny;
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
      justify-content: center;
      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
      }

      &__card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        background-color: $primary-color;
        box-shadow: $shadow;
        align-self: stretch;
        border-radius: $radius;
        width: clamp(343px, 100%, 400px);
        height: 360px;
        background-size: cover;
        overflow: hidden;
        background-position: center;

        &:nth-of-type(1) {
          background-image: url('@/assets/images/ux.webp');
        }
        &:nth-of-type(2) {
          background-image: url('@/assets/images/seo.webp');
        }

        &__headlines {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
          height: 200px;
          color: $primary-color;

          &__title {
            font-size: 1.25rem;
            font-weight: $thick;
            text-shadow: $shadow;
          }
          &__description {
            font-size: 1rem;
            text-shadow: $shadow;
            border-radius: $radius;
            font-weight: $skinny;
          }
        }

        & ul {
          background-color: $primary-color;
          margin-top: 1rem;
          font-size: 0.75rem;
          list-style: none;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          @media (min-width: $big-tablet-screen) {
            font-size: 1rem;
          }

          & li {
            display: flex;
            gap: 0.25rem;
            align-items: center;
          }
        }

        &__share {
          display: flex;
          background-color: $base-color;
          position: relative;
          position: absolute;
          right: 0;
          bottom: 0;
          padding: 0 0.25rem;
          border-radius: $radius 0 $radius 0;

          &__go {
            display: flex;
            padding: 0.5rem;
            gap: 0.75rem;
            align-items: center;
            cursor: pointer;
            max-width: 150px;
            height: 40px;
            overflow: hidden;
            transition: max-width 1s ease;

            &:hover {
              max-width: 400px;
            }

            & span {
              font-weight: $skinny;
              font-size: 1rem;
              white-space: nowrap;
            }
            & button {
              font-weight: $skinny;
              font-size: 0.75rem;
              text-decoration: underline;
              cursor: pointer;
              white-space: nowrap;
            }
          }

          &__corner-left,
          &__corner-right {
            background-color: transparent;
            height: 20px;
            width: 20px;
            box-shadow: 0 -10px 0 0 $base-color;
            border-bottom-right-radius: $radius;
            border-top-right-radius: $radius;
            position: absolute;
          }

          &__corner-left {
            bottom: 0;
            left: -20px;
            transform: rotate(90deg);
          }
          &__corner-right {
            top: -20px;
            right: 0;
            transform: rotate(90deg);
          }
        }
      }
    }
  }
}
// .measures {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 2rem;

//   &__title {
//     font-size: 2rem;
//     font-weight: $overweight;

//     @media (min-width: $big-tablet-screen) {
//       font-size: 3rem;
//     }
//   }

//   &__subtitle {
//     font-size: 1rem;
//     font-weight: $skinny;
//     margin-top: -1rem;

//     @media (min-width: $big-tablet-screen) {
//       font-size: 1.25rem;
//     }
//   }
//   &__measure {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 2rem;
//     width: 100%;
//     flex-wrap: wrap;

//     &__images {
//       width: 343px;
//       height: 343px;
//       position: relative;

//       &__background {
//         position: absolute;
//         top: 1rem;
//         right: -1rem;
//         width: 100%;
//         height: 100%;
//         filter: blur(10px);
//         opacity: 0.4;
//         border-radius: $radius;
//       }
//       &__img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         border-radius: $radius;
//       }
//     }

//     &__txt {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       max-width: 400px;

//       &__title {
//         font-size: 1.25rem;
//         font-weight: $thick;
//       }

//       // &__description {
//       //   font-size: 1rem;
//       //   font-weight: $skinny;
//       // }
//     }
//   }
// }
</style>
