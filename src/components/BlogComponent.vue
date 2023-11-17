<script setup>
const story = await useAsyncStoryblok('blog', { version: 'published' })
</script>
<template>
  <section class="blog">
    <h2 class="blog__title titles">Blog</h2>
    <h3 class="blog__subtitle">Pour en savoir plus sur la creation de sites web</h3>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>
<style scoped lang="scss">
.blog {
  display: flex;
  width: 100%;
  max-width: 2000px;
  padding: 0 0 0 1rem;
  // overflow: scroll;
  flex-direction: column;
  gap: 2rem;
  background-color: $base-color;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    padding: 0 1rem;
  }

  &__title {
    // font-size: 2rem;
    // font-weight: $overweight;
    text-align: center;
    text-wrap: balance;
    margin-left: -1rem;

    @media (min-width: $big-tablet-screen) {
      // font-size: 3rem;
      margin-left: inherit;
    }
  }
  &__subtitle {
    margin-left: -1rem;
    text-wrap: balance;
    font-weight: $skinny;
    margin-top: -1rem;
    text-align: center;
    font-size: 1.25rem;

    @media (min-width: $big-tablet-screen) {
      margin-left: inherit;
    }
  }
}
</style>
