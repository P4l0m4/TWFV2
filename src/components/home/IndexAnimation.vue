<template>
  <section>
    <div class="slider">
      <div class="slider__track">
        <img class="slider__track__slide-phone" src="@/assets/images/headphones.png" />
        <img class="slider__track__slide-phone" src="@/assets/images/nuit.png" />
        <img class="slider__track__slide-tablet" src="@/assets/images/nike.png" />
        <img class="slider__track__slide-tablet" src="@/assets/images/biscuit.png" />
        <img class="slider__track__slide-tablet" src="@/assets/images/itfs.png" />
        <img class="slider__track__slide-phone" src="@/assets/images/meubles.png" />
        <img class="slider__track__slide-phone" src="@/assets/images/food.png" />

        <img class="slider__track__slide-phone" src="@/assets/images/headphones.png" />
        <img class="slider__track__slide-phone" src="@/assets/images/nuit.png" />
        <img class="slider__track__slide-tablet" src="@/assets/images/biscuit.png" />
        <img class="slider__track__slide-tablet" src="@/assets/images/nike.png" />
        <img class="slider__track__slide-tablet" src="@/assets/images/itfs.png" />
        <img class="slider__track__slide-phone" src="@/assets/images/meubles.png" />
        <img class="slider__track__slide-phone" src="@/assets/images/food.png" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
section {
  overflow: hidden;
  height: 110vh;
  margin-top: -6rem;
  width: 600px;
  transform: skew(-10deg) rotate(10deg);
  position: fixed;
  z-index: -1;

  @media (min-width: $laptop-screen) {
    right: 7rem;
    margin-top: -10rem;
    transform: skew(-10deg) rotate(0);
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc((-800px * 4) + (-300px * 3) + (-16px * 7)));
  }
}
@keyframes scroll-mobile {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc((-400px * 4) + (-150px * 3) + (-16px * 7)));
  }
}
.slider {
  display: flex;
  justify-content: flex-end;

  &__track {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__slide-phone {
      object-fit: contain;
      animation: scroll-mobile 40s linear infinite;
      height: 400px;
      width: 200px;

      @media (min-width: $laptop-screen) {
        height: 800px;
        width: 400px;
        animation: scroll 40s linear infinite;
      }
    }
    &__slide-tablet {
      object-fit: contain;
      animation: scroll-mobile 40s linear infinite;
      height: 150px;
      width: 200px;

      @media (min-width: $laptop-screen) {
        height: 300px;
        width: 400px;
        animation: scroll 40s linear infinite;
      }
    }
  }
}
</style>
