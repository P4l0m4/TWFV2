<template>
  <section class="index-txt">
    <div class="index-txt__words">
      <h2 class="index-txt__words__word">SEO WEB & GROWTH</h2>
    </div>

    <div class="index-txt__card">
      <h2 class="index-txt__card__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <p class="index-txt__card__description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut incidunt blanditiis ratione laudantium quaerat
        optio odio veniam similique saepe ipsum! Non veniam sunt maxime u accusamus dolores ab?
      </p>
    </div>

    <NuxtLink class="index-txt__words" to="/prestations/audit-optimisatio-site-web" aria-label="audits">
      <h2 class="index-txt__words__word">Audits</h2>
    </NuxtLink>

    <AuditPopUp />

    <img class="index-txt__img" src="@/assets/images/grey-phone2.jpg" alt="grey laptop mockup" />

    <img class="index-txt__img" src="@/assets/images/grey-phone4.jpg" alt="grey phone mockup" />

    <img class="index-txt__img" src="@/assets/images/grey-tablet.jpg" alt="grey laptop mockup" />

    <div class="index-txt__button-card">
      <h2 class="index-txt__button-card__title">Lorem ipsum dolor sit amet</h2>
      <p class="index-txt__button-card__description">Lorem ipsum dolor sit amet lorem ipsum dolor sit</p>
      <button class="index-txt__button-card__button button-primary">En savoir plus</button>
    </div>

    <div class="index-txt__words">
      <h2 class="index-txt__words__word">Web design</h2>
    </div>

    <div class="index-txt__button-card">
      <h2 class="index-txt__button-card__title">Lorem ipsum dolor sit amet</h2>
      <p class="index-txt__button-card__description">Lorem ipsum dolor sit amet lorem ipsum dolor sit</p>
      <button class="index-txt__button-card__button button-primary">En savoir plus</button>
    </div>

    <img class="index-txt__img" src="@/assets/images/grey-phone3.jpg" alt="grey laptop mockup" />
  </section>
</template>

<style lang="scss" scoped>
.index-txt {
  -webkit-column-count: 1;
  -moz-column-count: 1;
  column-count: 1;
  -webkit-column-gap: 2rem;
  -moz-column-gap: 2rem;
  column-gap: 2rem;
  //   -webkit-column-width: 33.33333333333333%;
  //   -moz-column-width: 33.33333333333333%;
  column-width: 400px;
  padding: 1rem;
  max-width: 100vw;

  @media (min-width: $big-tablet-screen) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }

  @media (min-width: $desktop-screen) {
    padding: 2rem;
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }

  &__words {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: $primary-color;
    border-radius: $radius;

    &__word {
      text-align: center;
      line-height: 54px;
      background-image: url('@/assets/images/grey-tablet.jpg');
      //   background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 3.8rem;
      text-transform: uppercase;
      font-family: 'Russo One';
      font-weight: 800;
      -webkit-font-smoothing: antialiased;
      animation: bg 10s alternate-reverse infinite ease;

      @media (min-width: $tablet-screen) {
        line-height: 60px;
        font-size: 3.5rem;
      }
      @media (min-width: $big-tablet-screen) {
        line-height: 64px;
        font-size: 4.3rem;
      }
      @media (min-width: $laptop-screen) {
        font-size: 5rem;
        line-height: 80px;
      }
      @media (min-width: $desktop-screen) {
        line-height: 84px;
        font-size: 5.6rem;
      }
    }
    @keyframes bg {
      from {
      }
      to {
        background-position: bottom right;
      }
    }
  }

  &__card {
    padding: 2rem;
    margin-top: 2rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    background-color: $primary-color;
    border-radius: $radius;
    overflow: hidden;

    &__title {
      font-size: 1.25rem;
      font-weight: 600;
    }

    &__description {
      text-align: justify;
    }
  }

  &__img {
    margin-top: 2rem;
    width: 100%;
    object-fit: cover;
    border-radius: $radius;
  }
  &__button-card {
    margin-top: 2rem;
    display: flex;
    border-radius: $radius;
    background-color: $primary-color;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;

    &__title {
      font-size: 1.25rem;
      font-weight: 600;
    }
    &__button {
      margin-top: 1rem;
    }
  }
}
</style>
