<script setup>
import { onMounted } from 'vue'
const props = defineProps({ blok: Object, tagSelected: String })

//ARROWS SYSTEM
let slidable = null
onMounted(() => {
  slidable = document.querySelector('.wrapper__slidable')
})
function scroll(coordinates) {
  slidable.scrollLeft += coordinates
}
</script>
<template>
  <div class="wrapper">
    <div class="wrapper__slidable">
      <StoryblokComponent v-for="blok in blok.bloglist" :key="blok._uid" :blok="blok" :tagSelected="tagSelected" />
    </div>
    <span class="wrapper__left-arrow not-selectable" @click="scroll(-300)">
      <img src="@/assets/icons/next.svg" alt="arrow-left" />
    </span>
    <span class="wrapper__right-arrow not-selectable" @click="scroll(300)">
      <img src="@/assets/icons/next.svg" alt="arrow-left" />
    </span>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  display: flex;
  width: 100%;
  max-width: 100vw;
  overflow: scroll;
  gap: 1rem;
  position: relative;

  &:hover {
    .wrapper__left-arrow,
    .wrapper__right-arrow {
      opacity: 1;
      box-shadow: $shadow;
    }
  }
  &__slidable {
    display: flex;
    gap: 1rem;
    width: 100%;
    scroll-behavior: smooth;
    overflow: scroll;
  }

  &__left-arrow,
  &__right-arrow {
    display: none;

    @media (min-width: $laptop-screen) {
      display: flex;
      justify-content: center;
      background-color: $primary-color;
      padding: 1rem;
      border-radius: 50%;
      position: absolute;
      height: fit-content;
      transition: padding 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
      opacity: 0.4;
      margin: auto;
      top: 0;
      bottom: 0;

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
  &__left-arrow {
    left: 0;
  }
  &__right-arrow {
    transform: rotate(180deg);
    right: 0;
  }
}
</style>
