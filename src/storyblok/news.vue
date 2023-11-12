<script setup>
const props = defineProps({ blok: Object })
</script>
<template>
  <div class="news">
    <StoryblokComponent class="news__articles" v-for="blok in blok.newslist" :key="blok._uid" :blok="blok" />
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
  border-radius: $radius;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

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
</style>
