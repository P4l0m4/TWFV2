<script setup>
import { ref, onMounted, computed } from 'vue'

let currentSlideIndex = ref(0)
const slides = ref([
  {
    title: 'Sites Internet',
    subtitle: 'Optimisé SEO',
    img: 'headphones.webp',
  },
  {
    title: 'Sites E-commerce',
    subtitle: 'Ultra Performants',
    img: 'nike.webp',
  },
  {
    title: 'Audits SEO',
    subtitle: 'Totalement gratuits',
    img: 'biscuits.webp',
  },
  {
    title: 'Web Design',
    subtitle: 'User Friendly',
    img: 'nuit.webp',
  },
])

const currentSlide = computed(() => slides.value[currentSlideIndex.value])

function handlePaginationClick(n) {
  currentSlideIndex.value = n
}
onMounted(() => {
  setInterval(() => {
    if (currentSlideIndex.value < slides.value.length - 1) {
      currentSlideIndex.value = currentSlideIndex.value + 1
    } else {
      currentSlideIndex.value = 0
    }
  }, 3000)
})
</script>
<template>
  <section class="slides">
    <div class="slides__slide">
      <div class="slides__slide__txt">
        <span>CREATION</span>

        <Transition name="slide-txt">
          <h1 class="slides__slide__txt__title" :key="currentSlide.title">
            {{ currentSlide.title }}
          </h1>
        </Transition>

        <span class="slides__slide__txt__specs">SPECIFICITES</span>
        <Transition name="slide-txt">
          <h2 class="slides__slide__txt__subtitle" :key="currentSlide.title">
            {{ currentSlide.subtitle }}
          </h2>
        </Transition>
      </div>

      <Transition name="slide-fade">
        <div
          class="slides__slide__img"
          :style="`background-image: url('images/${currentSlide.img}')`"
          :key="currentSlide.img"
        ></div>
      </Transition>
    </div>
    <aside class="slides__pagination">
      <span
        v-for="n in slides.length"
        :key="`slide-pagination-${n}`"
        class="slides__pagination__dot"
        :class="{ active: currentSlideIndex === n - 1 }"
        @click="handlePaginationClick(n - 1)"
      ></span>
    </aside>
  </section>
</template>
<style scoped lang="scss">
.slides {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  padding: 0 2rem;
  margin-top: -4rem;
  max-width: 2000px;

  @media (min-width: $big-tablet-screen) {
    gap: 2rem;
    padding: 0 6rem 0 4rem;
    align-items: center;
    justify-content: center;
    margin-top: -2rem;
  }
  &__slide {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column-reverse;

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
      flex-direction: row;
    }
    &__img {
      height: 40svh;
      width: calc(50svh * 1.55);
      max-width: 100%;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      margin-left: 1rem;

      @media (min-width: $big-tablet-screen) {
        height: 82svh;
        width: calc(82svh * 1.5);
        margin-left: 0;
        max-width: 800px;
      }
    }

    &__txt {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: clamp(300px, 100%, 600px);
      justify-content: center;
      padding-left: 1rem;

      & span {
        font-weight: $skinny;
        letter-spacing: 0.25rem;
      }

      //   &__specs {
      //     position: relative;
      //   }

      &__title {
        font-weight: $thick;
        font-size: 3.5rem;
        letter-spacing: -1px;
        line-height: 50px;
        margin: 10px 0 32px;
        color: $text-color;
        width: 185px;
        text-wrap: bottom;

        @media (min-width: $tablet-screen) {
          font-size: 4rem;
          line-height: 60px;
        }
        @media (min-width: $laptop-screen) {
          margin: 20px 0 60px;
          font-size: 5.8rem;
          line-height: 100px;
          padding: 0;
          width: 375px;
        }
        @media (min-width: $super-big-screen) {
          font-size: 8rem;
        }
      }
      &__subtitle {
        font-weight: $skinny;
        font-size: 1.5rem;
        // position: absolute;
        // bottom: 7rem;
        // left: 0;

        @media (min-width: $laptop-screen) {
          font-size: 2rem;
          //   bottom: 4rem;
          //   left: 4rem;
        }

        @media (min-width: $super-big-screen) {
          font-size: 3rem;
        }
      }
    }
  }

  &__pagination {
    display: flex;
    gap: 3rem;
    flex-direction: column;
    // margin-top: 120px;
    // margin-right: 1rem;

    @media (min-width: $big-tablet-screen) {
      //   margin: 0;
    }

    &__dot {
      opacity: 0.3;
      background-color: $text-color;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      outline: rgba(51, 51, 51, 0.4) solid 1px;
      outline-offset: 0rem;
      transition: outline-offset 0.4s, width 0.4s, height 0.4s, opacity 0.4s;

      &:hover {
        cursor: pointer;
        outline-offset: 1rem;
      }
    }
  }
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.4s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
}

.slide-fade-leave-active {
  display: none;
}

//SLIDE TXT
.slide-txt-enter-active,
.slide-txt-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}
.slide-txt-enter-from,
.slide-txt-leave-to {
  opacity: 0;
}
.slide-txt-enter-to,
.slide-txt-leave-from {
  opacity: 1;
}

.slide-txt-enter-to,
.slide-txt-leave-from {
  transform: translateY(0);
}
.slide-txt-enter-from,
.slide-txt-leave-to {
  transform: translateY(1rem);
}

.slide-txt-leave-active {
  display: none;
}

.active {
  opacity: 1;
  outline-offset: 1rem;
}

@keyframes slide {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
