<script setup>
import { onMounted } from 'vue'
const props = defineProps({ blok: Object })

//ARROWS SYSTEM
let slidable = null
onMounted(() => {
  slidable = document.querySelector('.news__wrapper')
})
function scroll(coordinates) {
  slidable.scrollTop += coordinates
}
</script>
<template>
  <div class="news">
    <div class="news__wrapper">
      <StoryblokComponent class="news__articles" v-for="blok in blok.newslist" :key="blok._uid" :blok="blok" />
    </div>
    <span class="news__up-arrow not-selectable" @click="scroll(-300)">
      <img src="@/assets/icons/next.svg" alt="arrow-up" />
    </span>
    <span class="news__down-arrow not-selectable" @click="scroll(300)">
      <img src="@/assets/icons/next.svg" alt="arrow-down" />
    </span>
  </div>
</template>
<style scoped lang="scss">
.news {
  height: 1144px;
  // display: flex;
  // flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
  overflow: scroll;
  position: relative;

  &:hover {
    .news__up-arrow,
    .news__down-arrow {
      opacity: 1;
      box-shadow: $shadow;
    }
  }
  // border-radius: $radius;
  // display: grid;
  // grid-template-columns: repeat(1, 1fr);

  // @media (min-width: $tablet-screen) {
  //   justify-content: center;
  // }

  // @media (min-width: $big-tablet-screen) {
  //   // padding: 0 1rem;
  //   grid-template-columns: repeat(2, 1fr);
  // }
  // @media (min-width: $desktop-screen) {
  //   // padding: 0 1rem;
  //   grid-template-columns: repeat(1, 1fr);
  // }

  &__wrapper {
    width: 100%;
    height: 100%;
    border-radius: $radius;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    overflow: scroll;
    scroll-behavior: smooth;
    gap: 2rem;

    @media (min-width: $tablet-screen) {
      justify-content: center;
    }

    @media (min-width: $big-tablet-screen) {
      // padding: 0 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: $desktop-screen) {
      // padding: 0 1rem;
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &__up-arrow,
  &__down-arrow {
    display: none;

    @media (min-width: $laptop-screen) {
      display: flex;
      justify-content: center;
      background-color: $primary-color;
      padding: 1rem;
      border-radius: 50%;
      position: absolute;
      height: fit-content;
      width: fit-content;
      transition: padding 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
      opacity: 0.4;
      margin: auto;
      left: 0;
      right: 0;

      &:hover {
        cursor: pointer;
        padding: 1.2rem;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  &__up-arrow {
    top: 0;
    transform: rotate(90deg);
  }
  &__down-arrow {
    transform: rotate(270deg);
    bottom: 0;
  }
}
</style>
