<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const images1 = document.querySelectorAll('.index-txt__part__txt')
  const images2 = document.querySelectorAll('.index-txt__part__img')

  window.addEventListener('scroll', () => {
    let scroll = window.scrollY

    images1.forEach(element => {
      if (scroll > 450) {
        // element.style.transform = `translateY(${scroll * -0.12}px)`
        element.style.marginTop = `${scroll * -0.12}px`
      } else {
        // element.style.transform = `translateY(0px)`
        element.style.marginTop = `0`
      }
    })
    images2.forEach(element => {
      if (scroll > 450) {
        // element.style.transform = `translateY(${scroll * 0.12}px)`
        element.style.marginTop = `${scroll * 0.12}px`
      } else {
        // element.style.transform = `translateY(8rem)`
        element.style.marginTop = `8rem`
      }
    })
  })
})
</script>
<template>
  <section class="index-txt">
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

    <div class="index-txt__part">
      <div class="index-txt__part__txt">
        <h2>Votre site web n'est pas qu'une vitrine</h2>
        <p>
          C'est également une véritable plateforme de conversion, à condition d'en tirer le meilleur parti. C'est
          également une véritable plateforme de conversion, à condition d'en tirer le meilleur parti
        </p>
        <p>
          C'est également une véritable plateforme de conversion, à condition d'en tirer le meilleur parti. C'est
          également une véritable plateforme de conversion, à condition d'en tirer le meilleur parti
        </p>
      </div>
      <img class="index-txt__part__img" src="@/assets/images/seo.jpg" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.index-txt {
  display: flex;
  gap: 6rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    gap: 12rem;
  }

  &__part {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 1rem;
    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    &__img {
      width: 164px;
      height: 360px;
      border-radius: $radius;
      object-fit: cover;

      @media (min-width: $big-tablet-screen) {
        height: 500px;
        width: 343px;
      }
    }

    &__txt {
      max-width: 280px;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & p {
        text-align: justify;
      }
    }
  }

  // &__column {
  //   display: flex;
  //   flex-direction: column;
  //   gap: 1rem;
  //   width: 100%;
  //   max-width: 824px;
  //   justify-content: center;

  //   @media (min-width: $big-tablet-screen) {
  //     flex-direction: row;
  //     gap: 2rem;
  //   }
  //   @media (min-width: $super-big-screen) {
  //     gap: 4rem;
  //   }

  //   &__wrapper {
  //     display: flex;
  //     flex-direction: column;
  //     gap: 1rem;
  //     height: 100%;
  //     width: 100%;

  //     @media (min-width: $super-big-screen) {
  //       gap: 4rem;
  //     }

  //     &__img {
  //       width: 100%;
  //       height: 100%;
  //       max-height: 500px;
  //       border-radius: $radius;
  //       object-fit: cover;

  //       @media (min-width: $super-big-screen) {
  //         max-height: 700px;
  //       }
  //     }
  //   }

  //   &__words {
  //     width: 100%;
  //     max-width: 700px;
  //     height: fit-content;
  //     display: flex;
  //     flex-direction: column;
  //     padding: 2rem;
  //     background-color: $primary-color;
  //     border-radius: $radius;

  //     @media (min-width: $big-tablet-screen) {
  //       max-width: 8rem;
  //       height: fit-content;
  //     }
  //     @media (min-width: $super-big-screen) {
  //       max-width: 10rem;
  //     }

  //     &__word {
  //       word-wrap: break-word;
  //       text-align: center;
  //       line-height: 54px;
  //       background-position: center;
  //       background-image: url('@/assets/images/grey-tablet.jpg');
  //       -webkit-background-clip: text;
  //       -webkit-text-fill-color: transparent;
  //       font-size: 3.8rem;
  //       text-transform: uppercase;
  //       font-family: 'Russo One';
  //       font-weight: 800;
  //       -webkit-font-smoothing: antialiased;
  //       animation: bg 18s alternate-reverse infinite linear;

  //       @media (min-width: $tablet-screen) {
  //         line-height: 60px;
  //         font-size: 3.5rem;
  //       }
  //       @media (min-width: $big-tablet-screen) {
  //         line-height: 64px;
  //         font-size: 4.3rem;
  //       }
  //       @media (min-width: $laptop-screen) {
  //         font-size: 5rem;
  //         line-height: 80px;
  //       }
  //       @media (min-width: $desktop-screen) {
  //         line-height: 84px;
  //         font-size: 5.6rem;
  //       }
  //       @media (min-width: $super-big-screen) {
  //         line-height: 100px;
  //         font-size: 7rem;
  //       }
  //     }

  //     @keyframes bg {
  //       from {
  //         background-position: center right;
  //       }

  //       to {
  //         background-position: center left;
  //       }
  //     }
  //   }
  // }
}
</style>
