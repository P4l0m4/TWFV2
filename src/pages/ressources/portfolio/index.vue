<template>
  <section class="portfolio">
    <NuxtLink to="/" class="portfolio__element">
      <button class="portfolio__element__go"><img src="@/assets/icons/arrow.svg" alt="icone" /></button>
    </NuxtLink>
  </section>
</template>
<style scoped lang="scss">
.portfolio {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
  justify-content: center;

  &__element {
    gap: 1rem;
    padding: 1rem;
    background-color: black;
    height: 360px;
    border-radius: $radius;
    width: clamp(343px, 100%, 660px);
    background-size: cover;
    cursor: pointer;

    @media (screen-width: $big-tablet-screen) {
      height: 600px;
    }

    &__go {
      display: flex;
      padding: 0.5rem;
      border-radius: 50%;
      background-color: $primary-color;
      width: fit-content;
      margin-left: auto;
      cursor: pointer;

      &:hover img {
        transform: rotate(90deg);
      }

      & img {
        transform: rotate(45deg);
        width: 20px;
        transition: transform 0.2s ease;
      }
    }
  }
}
</style>
