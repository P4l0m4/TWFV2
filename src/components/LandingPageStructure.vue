<script setup>
const props = defineProps({
  content: Object,
})

const firstTwoFeatures = props.content.content.features.slice(0, 2)
const lastTwoFeatures = props.content.content.features.slice(2, 4)
</script>
<template>
  <Container>
    <div class="header">
      <div class="header__headlines">
        <h1 class="header__headlines__title titles">{{ props.content.content.title }}</h1>
        <h2 class="header__headlines__subtitle subtitles">{{ props.content.content.subtitle }}</h2>
        <NuxtLink
          class="header__headlines__button button-primary"
          :to="props.content.content.buttonLink.url"
          :target="props.content.content.buttonLink.target"
          >{{ props.content.content.buttonText }}</NuxtLink
        >
      </div>
      <NuxtLink
        class="header__image"
        :to="props.content.content.demoLink.url"
        target="_blank"
        aria-label="voir une démo"
      >
        <button class="header__image__button button-secondary">Voir une démo</button>
        <img
          class="header__image__img"
          :src="props.content.content.demoImage.filename"
          :alt="props.content.content.demoImage.alt"
        />
      </NuxtLink>
    </div>
  </Container>
  <Container>
    <div class="feature" v-for="feature in firstTwoFeatures" :key="feature._uid">
      <div class="feature__txt">
        <h3 class="feature__txt__title subtitles">{{ feature.featureTitle }}</h3>
        <h4 class="feature__txt__subtitle">{{ feature.featureSubtitle }}</h4>
        <NuxtLink
          class="feature__txt__button button-primary"
          :to="feature.buttonLink.url"
          :target="feature.buttonLink.target"
          >{{ feature.buttonText }}</NuxtLink
        >
      </div>
      <NuxtLink
        class="feature__image"
        :to="props.content.content.demoLink.url"
        target="_blank"
        aria-label="voir une démo"
      >
        <button class="feature__image__button button-secondary">Voir une démo</button>
        <img
          class="feature__image__img"
          :src="feature.featureImage.filename"
          :alt="feature.featureImage.filename.alt"
        />
      </NuxtLink></div
  ></Container>

  <Container>
    <div class="offers">
      <div class="offers__offer" v-for="offer in props.content.content.offers" :key="offer._uid">
        <div class="offers__offer__illustration">
          <img class="offers__offer__illustration__img" :src="offer.icon.filename" :alt="offer.icon.alt" />
          <span class="offers__offer__illustration__data">{{ offer.textUnderIcon1 }}</span>
          <span class="offers__offer__illustration__txt">{{ offer.textUnderIcon2 }}</span>
        </div>
        <div class="offers__offer__txt">
          <span class="offers__offer__txt__description">{{ offer.firstSentence }}</span>
          <span class="offers__offer__txt__description">{{ offer.secondSentence }}</span>
          <span class="offers__offer__txt__description">{{ offer.thirdSentence }}</span>
        </div>
      </div>
    </div>
  </Container>

  <Container>
    <iframe
      class="iframe"
      :src="props.content.content.demoLink.url"
      :title="props.content.content.demoLink.title"
    ></iframe>
  </Container>

  <Container>
    <div class="feature" v-for="feature in lastTwoFeatures" :key="feature._uid">
      <div class="feature__txt">
        <h3 class="feature__txt__title subtitles">{{ feature.featureTitle }}</h3>
        <h4 class="feature__txt__subtitle">{{ feature.featureSubtitle }}</h4>
        <NuxtLink
          class="feature__txt__button button-primary"
          :to="feature.buttonLink.url"
          :target="feature.buttonLink.target"
          >{{ feature.buttonText }}</NuxtLink
        >
      </div>
      <NuxtLink
        class="feature__image"
        :to="props.content.content.demoLink.url"
        target="_blank"
        aria-label="voir une démo"
      >
        <button class="feature__image__button button-secondary">Voir une démo</button>
        <img class="feature__image__img" :src="feature.featureImage.filename" :alt="feature.featureImage.alt" />
      </NuxtLink>
    </div>
  </Container>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    justify-content: space-between;
    flex-direction: row;
  }

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 650px;
    padding: 1rem 0;

    &__button {
      margin-top: 1rem;

      @media (min-width: $big-tablet-screen) {
        margin-top: 2rem;
        max-width: 300px;
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    min-height: 350px;
    max-width: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: background-image 0.3s ease;

    &:hover {
      background-image: linear-gradient(40deg, rgba($text-color, 0.6), rgba(0, 0, 0, 0));

      & > .header__image__button {
        opacity: 1;
      }
    }

    &__button {
      color: $primary-color;
      border-color: $primary-color;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
      z-index: -1;
    }
  }
}

.feature {
  display: flex;
  gap: 1rem;
  width: 100%;
  flex-direction: column;
  background-color: $primary-color;
  border-radius: $radius;
  padding: 1rem;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    justify-content: space-between;
    flex-direction: row;
    padding: 2rem;

    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }

  &__txt {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 650px;

    &__subtitle {
      font-size: $base-text;
      font-weight: $skinny;
    }

    &__button {
      margin-top: 1rem;

      @media (min-width: $big-tablet-screen) {
        margin-top: 2rem;
        max-width: 300px;
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    min-height: 350px;
    max-width: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: background-image 0.3s ease;

    &:hover {
      background-image: linear-gradient(40deg, rgba($text-color, 0.6), rgba(0, 0, 0, 0));

      & > .feature__image__button {
        opacity: 1;
      }
    }

    &__button {
      color: $primary-color;
      border-color: $primary-color;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
      z-index: -1;
    }
  }
}

.offers {
  display: flex;
  gap: 1rem;
  width: 100%;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__offer {
    display: flex;
    background-color: $primary-color;
    border-radius: $radius;
    padding: 1rem;
    box-shadow: $shadow;
    height: fit-content;

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
        white-space: nowrap;

        @media (min-width: $big-tablet-screen) {
          font-size: 2rem;
        }
      }
      &__txt {
        font-weight: $skinny;
        font-size: 1rem;
        white-space: nowrap;
      }
    }
    &__txt {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.25rem;
      white-space: nowrap;

      &__description {
        font-size: 1rem;
        font-weight: $skinny;
        text-wrap: balance;
        white-space: nowrap;

        @media (min-width: $big-tablet-screen) {
          font-size: 1.2rem;
        }

        &:nth-of-type(1) {
          font-weight: $thick;
        }
      }
    }
  }
}
.iframe {
  height: 100vh;
  width: 100%;
  max-width: 2000px;
  border: none;
}
</style>
