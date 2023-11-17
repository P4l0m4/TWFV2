<script setup>
const props = defineProps({ blok: Object })

const dayjs = useDayjs()
const date = dayjs(props.blok.date.toString()).locale('fr').format('DD MMMM YYYY')
</script>
<template>
  <NuxtLink class="new" :to="props.blok.buttonlink.url" rel="nofollow">
    <img loading="lazy" class="new__image" :src="props.blok.image[0].filename" :alt="props.blok.image[0].alt" />
    <h3 class="new__title">{{ props.blok.title }}</h3>
    <p class="new__description">{{ props.blok.subtitle }}</p>
    <span class="new__date">{{ date }}</span>
  </NuxtLink>
</template>
<style scoped lang="scss">
.new {
  display: flex;
  cursor: pointer;
  width: 100%;
  height: fit-content;
  border-radius: $radius;
  gap: 1rem;
  flex-direction: column;

  // @media (min-width: $big-tablet-screen) {
  //   width: 343px;
  // }
  // @media (min-width: $laptop-screen) {
  //   width: clamp(343px, 100%, 460px);
  // }

  &__image {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: $radius;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: $thick;
    width: 100%;
  }

  // &__description {
  //   font-weight: $skinny;
  //   color: $text-color;
  //   // width: 320px;

  //   @media (min-width: $tablet-screen) {
  //     // width: 343px;
  //     // min-width: 343px;
  //   }
  // }

  &__date {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    font-size: 0.75rem;
    font-weight: $skinny;
  }
}
</style>
