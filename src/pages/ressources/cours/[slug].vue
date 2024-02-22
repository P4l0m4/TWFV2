<script setup>
const story = await useAsyncStoryblok('classes', { version: 'published' })

const route = useRoute()
const courseSlug = route.params.slug

const course = story.value.content.classesList.find(c => stringToSlug(c.name) === courseSlug)
</script>
<template>
  <section>
    <Container>
      <h1>{{ course.name }}</h1>
      <span>{{ course.module }}</span>
      <p>{{ course.description }}</p>
      <p v-html="renderRichText(course.txt)"></p>
      <iframe :src="course.videoLink.url"></iframe>
      <iframe :src="course.quizzLink.url"></iframe
    ></Container>
  </section>
</template>
