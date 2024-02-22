<script setup>
import { ref } from 'vue'

const props = defineProps({
  story: {
    type: Object,
    required: true,
  },
})

const query = ref('')
const matchingCourses = ref(props.story.content.classesList)

function search() {
  matchingCourses.value = props.story.content.classesList.filter(course => {
    return (
      course.name.toLowerCase().includes(query.value.toLowerCase()) ||
      course.module.toLowerCase().includes(query.value.toLowerCase()) ||
      course.description.toLowerCase().includes(query.value.toLowerCase()) ||
      course.level.toLowerCase().includes(query.value.toLowerCase())
    )
  })
}
</script>

<template>
  <div class="search-section">
    <div class="search-section__header">
      <div class="search-section__header__search">
        <img
          class="search-section__header__search__icon"
          src="@/assets/icons/search.svg"
          alt="search icon inseec"
          @click="search"
        />
        <input
          type="text"
          placeholder="SEO, modélisation 3D, etc"
          class="search-section__header__search__input"
          v-model="query"
          @input="search"
        />
      </div>
      <span class="search-section__header__no-results" v-if="matchingCourses.length === 0"
        >Nous n'avons trouvé aucun cours qui correspondait à votre recherche</span
      >
    </div>

    <div class="search-section__list">
      <NuxtLink
        class="search-section__list__class"
        :to="`/ressources/cours/${stringToSlug(course.name)}`"
        v-for="course in story.content.classesList"
        :key="course._uid"
        :style="`background-image: url(${course.banner.filename});`"
      >
        <h2 class="search-section__list__class__title subtitles">{{ course.name }}</h2>

        <div class="search-section__list__class__bottom-section">
          <time class="search-section__list__class__bottom-section__time"
            ><img
              class="search-section__list__class__bottom-section__time__img"
              src="@/assets/icons/time.svg"
              alt="icone durée"
            />{{ course.duration }}</time
          >
          <div class="search-section__list__class__bottom-section__level">
            <span
              class="search-section__list__class__bottom-section__level__img"
              :class="{ 'search-section__list__class__bottom-section__level__img--filled': course.level >= n }"
              v-for="n in 4"
              :key="n"
            ></span>
          </div>
        </div>

        <div class="search-section__list__class__notch">
          <span class="search-section__list__class__notch__module"
            ><img
              class="search-section__list__class__notch__module__img"
              src="@/assets/icons/school-normal.svg"
              alt="icone module"
            />{{ course.module }}</span
          >
          <div class="search-section__list__class__notch__corner-left"></div>
          <div class="search-section__list__class__notch__corner-right"></div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-section {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;

  &__header {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    width: 100%;

    &__search {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.25rem 1rem 0.25rem 0.75rem;
      border-radius: 24px;
      background-color: $primary-color;
      box-shadow: $shadow;
      width: 100%;

      &__input {
        outline: none;
        border: none;
        width: 100%;
        padding: 0.5rem 0;
        font-family: 'Custom';
        font-size: $base-text;
        font-weight: $skinny;
      }
      &__icon {
        width: 20px;
        height: 20px;
        opacity: 0.5;
      }
    }
    &__no-results {
      width: 100%;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(343px, 1fr));
    place-items: center;
    gap: 2rem;
    width: 100%;
    height: fit-content;

    @media (min-width: $big-tablet-screen) {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }

    &__class {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      background-color: $primary-color;
      border-radius: $radius;
      box-shadow: $shadow;
      background-size: cover;
      background-position: center;
      height: 360px;
      color: $text-color-alt;
      position: relative;

      &__title {
        width: calc(100% - 160px);
        text-wrap: balance;
        text-shadow: $shadow-text;
      }

      &__bottom-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;

        &__time {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          white-space: nowrap;

          &__img {
            width: 24px;
            height: 24px;
          }

          &__level {
            display: flex;
            gap: 0.25rem;

            &__img {
              width: 24px;
              height: 24px;
              background-size: contain;
              background-image: url('@/assets/icons/cactus-outline.svg');

              &--filled {
                background-image: url('@/assets/icons/cactus.svg');
              }
            }
          }
        }

        &__level {
          display: flex;
          gap: 0.25rem;

          &__img {
            width: 24px;
            height: 24px;
            background-size: contain;
            background-image: url('@/assets/icons/cactus-outline.svg');

            &--filled {
              background-image: url('@/assets/icons/cactus.svg');
            }
          }
        }
      }

      &__notch {
        display: flex;
        width: 160px;
        justify-content: center;
        height: 40px;
        background-color: $base-color;
        position: relative;
        position: absolute;
        right: 0;
        top: 0;
        border-radius: 0 $radius 0 $radius;

        &__module {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: $text-color;

          &__img {
            width: 24px;
            height: 24px;
          }
        }

        &__corner-left,
        &__corner-right {
          background-color: transparent;
          height: 20px;
          width: 20px;
          box-shadow: 0 -10px 0 0 $base-color;
          border-bottom-right-radius: $radius;
          border-top-right-radius: $radius;
          position: absolute;
        }

        &__corner-left {
          bottom: -20px;
          right: 0px;
        }
        &__corner-right {
          top: 0;
          left: -20px;
        }
      }
    }
  }
}
</style>
