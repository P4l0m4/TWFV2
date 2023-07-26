<template>
  <section class="index-txt">
    <div class="index-txt__part">
      <div class="index-txt__part__column">
        <NuxtLink
          class="index-txt__part__column__words"
          to="/prestations/audit-optimisatio-site-web"
          aria-label="audits"
        >
          <h2 class="index-txt__part__column__words__word">Audits</h2>
        </NuxtLink>
        <div class="index-txt__part__column__image-card" alt="grey laptop mockup">
          <AuditPopUp />
        </div>
      </div>
      <div class="index-txt__part__card">
        <h2 class="index-txt__part__card__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p class="index-txt__part__card__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut incidunt blanditiis ratione laudantium quaerat
          optio odio veniam similique saepe ipsum! Non veniam sunt maxime u accusamus dolores ab?
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.index-txt {
  display: flex;
  padding: 1rem;
  max-width: 100vw;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    flex-direction: row;
  }

  @media (min-width: $desktop-screen) {
    padding: 2rem;
  }

  &__part {
    display: flex;
    width: 100vw;
    justify-content: center;
    gap: 2rem;

    &__column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      width: 100%;
      max-width: 824px;
      justify-content: center;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
      }

      &__image-card {
        width: clamp(300px, 100%, 700px);
        height: 100%;
        border-radius: $radius;
        background-size: cover;
        background-position: center;
        align-items: center;
        justify-content: center;
        display: flex;
        background-image: url('@/assets/images/grey-phone.jpg');
      }

      &__words {
        width: 100%;
        max-width: 700px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        background-color: $primary-color;
        border-radius: $radius;

        @media (min-width: $big-tablet-screen) {
          max-width: 8rem;
          height: 100%;
        }

        &__word {
          word-wrap: break-word;
          text-align: center;
          line-height: 54px;
          background-position: center;
          background-image: url('@/assets/images/grey-tablet.jpg');
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 3.8rem;
          text-transform: uppercase;
          font-family: 'Russo One';
          font-weight: 800;
          -webkit-font-smoothing: antialiased;
          animation: bg 18s alternate-reverse infinite linear;

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
            background-position: center right;
          }

          to {
            background-position: center left;
          }
        }
      }
    }

    &__card {
      padding: 2rem;
      gap: 1rem;
      display: flex;
      flex-direction: column;
      background-color: $primary-color;
      border-radius: $radius;
      overflow: hidden;
      height: fit-content;
      max-width: 343px;
      width: 100%;

      &__title {
        font-size: 1.25rem;
        font-weight: 600;
      }

      &__description {
        text-align: justify;
      }
    }

    &__img {
      max-width: 400px;
      width: 100%;
      object-fit: cover;
      border-radius: $radius;
      background-color: $primary-color;
    }
  }
}
</style>
