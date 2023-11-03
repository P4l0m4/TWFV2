<script setup>
const story = await useAsyncStoryblok('blog', { version: 'published' })
</script>
<template>
  <section class="blog">
    <h2 class="blog__title">Nos derniers articles de blog</h2>
    <h3 class="blog__subtitle">Pour en savoir plus sur le Web, le SEO, etc</h3>
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
  background-color: $base-color;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    padding: 0 1rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: $overweight;
    @media (min-width: $big-tablet-screen) {
      font-size: 3rem;
    }
  }
  &__subtitle {
    font-weight: $skinny;
    margin-top: -1rem;
    text-align: center;
    font-size: 1.25rem;
  }
}
</style>
