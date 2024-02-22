<script setup>
const story = await useAsyncStoryblok('classes', { version: 'published' })

const breadcrumbs = [
  {
    name: 'Accueil',
    url: window.location.origin,
  },
  {
    name: 'Ressources',
    url: window.location.origin + '/ressources',
  },
  {
    name: 'Cours',
    url: window.location.href,
  },
]

useHead(() => {
  return {
    title: 'Mini cours Tekila Web Factory',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Formez-vous au développement Web, au Web design et au référencement naturel (SEO) grâce à nos mini cours en ligne',
      },
    ],
  }
})
</script>
<template>
  <section class="classes">
    <div class="classes__headlines">
      <h1 class="classes__headlines__title titles">Trouver un cours</h1>
      <h2 class="classes__headlines__subtitle subtitles">Formez-vous gratuitement et testez vos connaissances</h2>
    </div>
    <Container>
      <ClassesSearchableClasses :story="story" />

      <div class="classes__list">
        <NuxtLink
          class="classes__list__class"
          :to="`/ressources/cours/${stringToSlug(course.name)}`"
          v-for="course in story.content.classesList"
          :key="course._uid"
          :style="`background-image: url(${course.banner.filename});`"
        >
          <h2 class="classes__list__class__title subtitles">{{ course.name }}</h2>

          <div class="classes__list__class__bottom-section">
            <time class="classes__list__class__bottom-section__time"
              ><img
                class="classes__list__class__bottom-section__time__img"
                src="@/assets/icons/time.svg"
                alt="icone durée"
              />{{ course.duration }}</time
            >
            <div class="classes__list__class__bottom-section__level">
              <span
                class="classes__list__class__bottom-section__level__img"
                :class="{ 'classes__list__class__bottom-section__level__img--filled': course.level >= n }"
                v-for="n in 4"
                :key="n"
              ></span>
            </div>
          </div>

          <div class="classes__list__class__notch">
            <span class="classes__list__class__notch__module"
              ><img
                class="classes__list__class__notch__module__img"
                src="@/assets/icons/school-normal.svg"
                alt="icone module"
              />{{ course.module }}</span
            >
            <div class="classes__list__class__notch__corner-left"></div>
            <div class="classes__list__class__notch__corner-right"></div>
          </div>
        </NuxtLink>
      </div>
    </Container>
  </section>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style lang="scss" scoped>
.classes {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding: 2rem 0;

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    &__title {
      text-align: center;
      padding: 1rem;

      @media (min-width: $big-tablet-screen) {
        padding: 0 1rem;
      }
    }

    &__subtitle {
      text-align: center;
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

          &__img {
            width: 24px;
            height: 24px;
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
