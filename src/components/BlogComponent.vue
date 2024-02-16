<script setup>
const story = await useAsyncStoryblok('blog', { version: 'published' })
</script>
<template>
  <Container>
    <div class="blog">
      <h2 class="blog__title titles">Blog</h2>
      <h3 class="blog__subtitle subtitles">Pour en savoir plus sur la creation de sites web</h3>
      <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
  </Container>
</template>
<style scoped lang="scss">
.blog {
  display: flex;
  width: 100%;
  // overflow: scroll;
  flex-direction: column;
  gap: 2rem;
  background-color: $base-color;
  align-items: center;

  &__title {
    text-align: center;
    text-wrap: balance;
    margin-left: -1rem;

    @media (min-width: $big-tablet-screen) {
      margin-left: inherit;
    }
  }
  &__subtitle {
    margin-left: -1rem;
    text-wrap: balance;
    margin-top: -1rem;
    text-align: center;

    @media (min-width: $big-tablet-screen) {
      margin-left: inherit;
    }
  }
}
</style>
