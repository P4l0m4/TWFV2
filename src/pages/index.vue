<script setup lang="ts">
const breadcrumbs = [
  {
    name: 'Accueil',
    url: window.location.href,
  },
]

useHead(() => {
  return {
    title: 'Tekila Web Factory, createur de sites web',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Createur de sites web bien référencés. Développez et augmentez la performance de votre site internet',
      },
    ],
  }
})
</script>

<template>
  <div class="index">
    <!-- <HomeIndexSlider /> -->
    <HomeIndexHeadline />
    <div class="index__banner">
      <AuditPopUp />
    </div>
    <HomeIndexStory />
    <HomeSticksAnimation />
    <HomePricingComponent />
    <BlogComponent />
  </div>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style scoped lang="scss">
.index {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
  padding: 5rem 0;
  @media (min-width: $big-tablet-screen) {
    gap: 8rem;
    padding: 0;
  }

  &__banner {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: $secondary-color;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (min-width: $big-tablet-screen) {
      padding: 1rem;
      gap: 4rem;
    }
  }

  &__story {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 4rem 1rem;
    position: relative;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      padding: 4rem;
    }

    &__txt {
      z-index: 2;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      max-width: 200px;
      background-color: $primary-color;
      padding: 1rem;
      border-radius: $radius;
      align-self: stretch;
      margin: auto;

      @media (min-width: $big-tablet-screen) {
        max-width: 400px;
      }

      &__title {
        font-weight: $overweight;

        @media (min-width: $big-tablet-screen) {
          font-size: 1.5rem;
        }
      }

      &__subtitle {
        font-size: 0.75rem;
        font-weight: $skinny-thick;
        text-align: justify;
        @media (min-width: $big-tablet-screen) {
          font-size: 1.25rem;
        }
      }
    }
  }
}
</style>
