<template>
  <div class="index-stories">
    <div class="index-stories__story">
      <img class="index-stories__story__img" src="@/assets/images/mockup-pink.jpg" alt="mockup site web" />
      <div class="index-stories__story__txt">
        <h3 class="index-stories__story__txt__title">Lorem ipsum dolor sit amet</h3>
        <p class="index-stories__story__txt__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut incidunt blanditiis ratione laudantium quaerat
          optio odio veniam similique saepe ipsum! Non veniam sunt maxime ut quam, molestiae accusamus dolores ab?
        </p>
      </div>
    </div>
    <div class="index-stories__story">
      <img class="index-stories__story__img" src="@/assets/images/mockup-double.png" alt="mockup site web" />
      <div class="index-stories__story__txt">
        <h3 class="index-stories__story__txt__title">Lorem ipsum dolor sit amet</h3>
        <p class="index-stories__story__txt__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut incidunt blanditiis ratione laudantium quaerat
          optio odio veniam similique saepe ipsum! Non veniam sunt maxime ut quam, molestiae accusamus dolores ab?
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.index-stories {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  padding: 0 1rem;

  &__story {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;

    &:nth-of-type(2n) {
      flex-direction: row-reverse;
    }

    &__img {
      height: 600px;
      width: clamp(343px, 100%, 600px);
      border-radius: $radius;
      object-fit: cover;
      @media (min-width: $big-tablet-screen) {
        height: 900px;
      }
    }
    &__txt {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      width: clamp(343px, 100%, 400px);

      &__title {
        font-size: 1.25rem;
        font-weight: 600;

        @media (min-width: $big-tablet-screen) {
          font-size: 1.5rem;
        }
      }

      &__description {
        text-align: justify;
      }
    }
  }
}
</style>
