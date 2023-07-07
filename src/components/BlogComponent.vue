<script setup>
const story = await useAsyncStoryblok('blog', { version: 'published' })
</script>
<template>
  <section class="blog">
    <h2 class="blog__title">Nos derniers articles de blog</h2>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
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

  @media (min-width: $big-tablet-screen) {
    padding: 0 1rem;
    align-items: flex-start;
  }

  &__title {
    font-size: 1.25rem;
    @media (min-width: $big-tablet-screen) {
      font-size: 1.5rem;
    }
  }
}
</style>
