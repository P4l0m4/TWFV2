<script setup>
const story = await useAsyncStoryblok('blog', { version: 'published' })
</script>
<template>
  <div class="blog">
    <h2>Découvrez nos derniers articles de blog</h2>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
<style scoped lang="scss">
.blog {
  display: flex;
  width: 100vw;
  padding: 0 0 0 1rem;
  overflow: scroll;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (min-width: $tablet-screen) {
    padding: 0 1rem;
  }
}
</style>
