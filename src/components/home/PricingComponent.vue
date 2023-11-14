<template>
  <section class="pricing">
    <div class="pricing__headlines">
      <h2 class="pricing__headlines__title">Pricing</h2>
      <p class="pricing__headlines__subtitle">Choose the plan that fits your needs</p>
    </div>
    <div class="pricing__cards">
      <div class="pricing__cards__card">
        <div class="pricing__cards__card__headlines">
          <h3 class="pricing__cards__card__headlines__title">Site vitrine</h3>
          <h4 class="pricing__cards__card__headlines__subtitle">Choose the plan that fits your needs</h4>
        </div>
        <span class="pricing__cards__card__price"
          ><span class="pricing__cards__card__price__from">A partir de</span> 2000 €</span
        >
        <ul class="pricing__cards__card__features">
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Optimisation SEO
          </li>
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Maquettage
          </li>
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Développement rapide
          </li>
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Lorem ipsum
          </li>
        </ul>
        <a
          class="pricing__cards__card__button button-primary"
          target="_blank"
          href="https://square.link/u/jHK8RKcm?src=embed"
          >Demander un devis</a
        >
      </div>
      <div class="pricing__cards__card">
        <div class="pricing__cards__card__headlines">
          <h3 class="pricing__cards__card__headlines__title">Site vitrine</h3>
          <h4 class="pricing__cards__card__headlines__subtitle">Choose the plan that fits your needs</h4>
        </div>
        <span class="pricing__cards__card__price"
          ><span class="pricing__cards__card__price__from">A partir de</span> 2000 €</span
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
            />Maquettage
          </li>
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-light.svg"
              alt="icone check"
            />Développement rapide
          </li>
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-light.svg"
              alt="icone check"
            />Lorem ipsum
          </li>
        </ul>
        <a
          class="pricing__cards__card__button button-primary blue"
          target="_blank"
          href="https://square.link/u/jHK8RKcm?src=embed"
          >Demander un devis</a
        >
      </div>
      <div class="pricing__cards__card">
        <div class="pricing__cards__card__headlines">
          <h3 class="pricing__cards__card__headlines__title">Site vitrine</h3>
          <h4 class="pricing__cards__card__headlines__subtitle">Choose the plan that fits your needs</h4>
        </div>
        <span class="pricing__cards__card__price"
          ><span class="pricing__cards__card__price__from">A partir de</span> 2000 €</span
        >
        <ul class="pricing__cards__card__features">
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Optimisation SEO
          </li>
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Maquettage
          </li>
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Développement rapide
          </li>
          <li class="pricing__cards__card__features__feature">
            <img
              class="pricing__cards__card__features__feature__check"
              src="@/assets/icons/check-circle-dark.svg"
              alt="icone check"
            />Lorem ipsum
          </li>
        </ul>
        <a
          class="pricing__cards__card__button button-primary"
          target="_blank"
          href="https://square.link/u/jHK8RKcm?src=embed"
          >Demander un devis</a
        >
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
      font-size: 2rem;
      font-weight: $overweight;

      @media (min-width: $big-tablet-screen) {
        font-size: 3rem;
      }
    }
    &__subtitle {
      font-size: 1.25rem;
      font-weight: $skinny;
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
      box-shadow: $shadow-secondary;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      border-radius: $radius;
      background-color: $primary-color;
      width: 100%;

      &:nth-of-type(2) {
        background-color: $secondary-color;
        color: $primary-color;
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
    }
  }
}

.blue {
  background-color: $primary-color;
  color: $secondary-color;
}
</style>
