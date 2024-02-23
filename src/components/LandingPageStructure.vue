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
        <h4 class="offers__offer__title subtitles">{{ offer.title }}</h4>
        <NuxtLink
          class="offers__offer__button button-primary"
          :to="offer.buttonLink.url"
          :target="offer.buttonLink.target"
          >{{ offer.buttonText }}</NuxtLink
        >
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

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    justify-content: space-between;
    flex-direction: row;

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

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
  }

  &__offer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(343px, 1fr));
    gap: 1rem;
    background-color: $primary-color;
    padding: 1rem;
    border-radius: $radius;
    box-shadow: $shadow;
    place-items: center;

    @media (min-width: $big-tablet-screen) {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }

    &__title {
      text-align: center;
    }

    &__button {
      max-width: 300px;
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
