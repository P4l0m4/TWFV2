<script setup>
const props = defineProps({ blok: Object, tagSelected: String })
</script>
<template>
  <div class="wrapper">
    <StoryblokComponent v-for="blok in blok.bloglist" :key="blok._uid" :blok="blok" :tagSelected="tagSelected" />
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  display: flex;
  width: 100%;
  max-width: 100vw;
  overflow: scroll;
  gap: 1rem;
}
</style>
