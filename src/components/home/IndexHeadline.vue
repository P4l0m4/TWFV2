<script setup>
import { onMounted, ref } from 'vue'

onMounted(() => {})
</script>
<template>
  <section class="headlines">
    <div class="headlines__container">
      <div class="headlines__container__txt">
        <h1 class="headlines__container__txt__title big-titles">
          <span class="headlines__container__txt__title--normal">Créons un </span>site web<span
            class="headlines__container__txt__title--normal"
          >
            au service de</span
          >
          votre entreprise
        </h1>
        <h2 class="headlines__container__txt__subtitle subtitles">
          Vous êtes invisible pour des centaines de clients potentiels, soyez là où ils vous cherchent !
        </h2>

        <div class="headlines__container__buttons">
          <button class="headlines__container__buttons__button button-primary">Prendre RDV avec nous</button
          ><button class="headlines__container__buttons__button button-secondary">Auditer votre site web</button>
        </div>
      </div>
      <div class="headlines__container__images">
        <img class="headlines__container__images__img" src="@/assets/images/wash.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/beauty.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/monstera.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/biscuits.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/nike.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/wash.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/beauty.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/monstera.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/biscuits.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/nike.webp" alt="bannière site web" />
      </div>
      <div class="headlines__container__images">
        <img class="headlines__container__images__img" src="@/assets/images/wash.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/beauty.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/monstera.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/biscuits.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/nike.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/wash.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/beauty.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/monstera.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/biscuits.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/nike.webp" alt="bannière site web" />
      </div>
      <div class="headlines__container__images">
        <img class="headlines__container__images__img" src="@/assets/images/wash.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/beauty.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/monstera.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/biscuits.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/nike.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/sample.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/wash.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/beauty.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/monstera.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/biscuits.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/nike.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/sample.webp" alt="bannière site web" />
      </div>
      <div class="headlines__container__images">
        <img class="headlines__container__images__img" src="@/assets/images/wash.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/beauty.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/monstera.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/biscuits.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/nike.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/sample.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/wash.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/beauty.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/monstera.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/biscuits.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/nike.webp" alt="bannière site web" />
        <img class="headlines__container__images__img" src="@/assets/images/sample.webp" alt="bannière site web" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.headlines {
  margin-top: -6rem;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &__container {
    z-index: 2;
    display: flex;
    padding: 1rem;
    height: 100vh;
    width: 100%;
    gap: 2rem;
    overflow: hidden;
    position: relative;

    @media (min-width: $big-tablet-screen) {
      padding: 2rem;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
    }

    &__txt {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      justify-content: center;

      @media (min-width: $big-tablet-screen) {
        gap: 2rem;
      }

      &__title {
        font-size: 2.5rem;
        text-shadow: 0px 0px 1px $base-color;
        text-wrap: balance;
        max-width: 750px;
        -webkit-text-fill-color: $text-color;
        -webkit-text-stroke: 2px $text-color;
        &--normal {
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 2px $text-color;
        }

        @media (min-width: $big-tablet-screen) {
          font-size: $big-titles;
        }
      }
      &__subtitle {
        max-width: 700px;
        text-shadow: 1px 1px 1px $base-color;
      }
    }

    &__images {
      position: absolute;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
      width: 380px;
      gap: 2rem;
      z-index: -1;
      left: 1rem;
      right: 40px;
      top: -50%;
      bottom: 0;
      animation: up 26s infinite linear alternate;
      opacity: 0.6;
      @media (min-width: $big-tablet-screen) {
        width: 700px;
        gap: 4rem;
        left: inherit;
        opacity: 1;
      }

      &:nth-of-type(2) {
        left: 1rem;
        top: calc(-50% - 20px);
        opacity: 0.1;
        z-index: -2;

        @media (min-width: $big-tablet-screen) {
          right: 0;
          left: inherit;
        }
      }
      &:nth-of-type(3) {
        left: inherit;
        top: 0;
        right: -210px;
        z-index: -1;
        animation: up 16s infinite linear alternate;

        @media (min-width: $big-tablet-screen) {
          right: -320px;
          left: inherit;
        }
      }
      &:nth-of-type(4) {
        left: inherit;
        right: -250px;
        top: -20px;
        opacity: 0.1;
        z-index: -2;
        animation: up 16s infinite linear alternate;
        @media (min-width: $big-tablet-screen) {
          right: -360px;
        }
      }

      &__img {
        width: 150px;
        object-fit: contain;

        @media (min-width: $big-tablet-screen) {
          width: 343px;
        }
      }
    }

    &__buttons {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      max-width: 700px;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
        gap: 2rem;
      }

      &__button {
        width: 100%;

        &:nth-of-type(2) {
          text-shadow: 1px 1px 1px $base-color;
        }
      }
    }
  }
}

@keyframes up {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}
</style>
