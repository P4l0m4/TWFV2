<script setup>
const story = await useAsyncStoryblok('news', { version: 'published' })
</script>
<template>
  <div class="news-component">
    <span class="news-component__title subtitles">Nos dernières actualités</span>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
<style scoped lang="scss">
.news-component {
  // max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 375px;
  max-height: 100%;
  border-radius: $radius;

  @media (min-width: $tablet-screen) {
    width: 100%;
    align-items: flex-start;
  }

  @media (min-width: $big-tablet-screen) {
    max-width: inherit;
    flex-wrap: wrap;
    width: clamp(343px, 100%, 900px);
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (min-width: 1271px) {
    width: 375px;
  }

  &__title {
    // font-weight: $thick;
    // font-size: 1.5rem;
    width: 100%;
    text-align: center;

    @media (min-width: $big-tablet-screen) {
      // padding: 0 1rem;
      text-align: left;
    }
  }
}
</style>
