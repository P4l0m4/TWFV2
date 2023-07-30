<template>
  <section class="index-txt">
    <div class="index-txt__part">
      <!-- <div class="index-txt__part__column">
        <NuxtLink
          class="index-txt__part__column__words"
          to="/prestations/audit-optimisation-site-web"
          aria-label="audits"
        >
          <h2 class="index-txt__part__column__words__word">Audits</h2>
        </NuxtLink>
        <div class="index-txt__part__column__wrapper">
          
          <img
            class="index-txt__part__column__wrapper__img"
            src="@/assets/images/grey-tablet.jpg"
            alt="image tablette site web"
          />
        </div>
      </div> -->
    </div>
    <div class="index-txt__pop-up">
      <AuditPopUp />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.index-txt {
  display: flex;
  max-width: 100vw;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
  }

  &__pop-up {
    display: flex;
    background-color: $text-color;
    width: 100vw;
    justify-content: center;
    padding: 2rem;
  }

  &__part {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 1rem;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      gap: 2rem;
    }

    @media (min-width: $super-big-screen) {
      gap: 4rem;
    }

    &__column {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      max-width: 824px;
      justify-content: center;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
        gap: 2rem;
      }
      @media (min-width: $super-big-screen) {
        gap: 4rem;
      }

      &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        width: 100%;

        @media (min-width: $super-big-screen) {
          gap: 4rem;
        }

        &__img {
          width: 100%;
          height: 100%;
          max-height: 500px;
          border-radius: $radius;
          object-fit: cover;

          @media (min-width: $super-big-screen) {
            max-height: 700px;
          }
        }
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
          height: fit-content;
        }
        @media (min-width: $super-big-screen) {
          max-width: 10rem;
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
          @media (min-width: $super-big-screen) {
            line-height: 100px;
            font-size: 7rem;
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
  }
}
</style>
