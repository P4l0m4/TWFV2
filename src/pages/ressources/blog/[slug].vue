<script setup>
import { ref } from 'vue'
import { stringToSlug } from '@/utils/slugify.js'

const route = useRoute()
const articleSlug = route.params.slug

const story = await useAsyncStoryblok('blog', { version: 'published' })

const article = story.value.content.bloglist.find(a => stringToSlug(a.title) === articleSlug)

const dayjs = useDayjs()
const date = dayjs(article.date.toString()).locale('fr').format('DD MMMM YYYY')

const shareWord = ref('Partager')
function copy() {
  navigator.clipboard.writeText(window.location.origin + '/ressources/blog/' + articleSlug)
  shareWord.value = 'Copié !'
  setTimeout(() => {
    shareWord.value = 'Partager'
  }, 1000)
}

useHead(() => {
  return {
    title: article.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: article.description,
      },
    ],
  }
})

//JSONLD
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
    name: 'Blog',
    url: window.location.origin + '/ressources/blog',
  },
  {
    name: article.title,
    url: window.location.href,
  },
]
useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': window.location.origin + '/ressources/blog/' + articleSlug,
  },
  headline: article.title,
  description: article.description,
  image: article.headerimage[0].filename,
  author: {
    '@type': 'Organization',
    name: 'Tekila Web Factory',
    url: 'https://tekilawebfactory.com/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Tekila Web Factory',
    logo: {
      '@type': 'ImageObject',
      url: 'https://tekilawebfactory.com/_nuxt/logo.8aab4942.svg',
    },
  },
  datePublished: date,
}))
</script>
<template>
  <article class="article">
    <section class="article__header">
      <img class="article__header__img" :src="article.headerimage[0].filename" :alt="article.headerimage[0].alt" />
      <div class="article__header__txt">
        <h1 class="article__header__txt__title">{{ article.title }}</h1>
        <p class="article__header__txt__description">{{ article.description }}</p>
        <span class="article__header__txt__date">{{ date }}</span>
      </div>
      <div class="article__header__share">
        <button class="article__header__share__plus" @click.prevent="copy">
          <img class="article__header__share__plus__icon" src="@/assets/icons/share.svg" alt="icon" />
          {{ shareWord }}
        </button>
        <div class="article__header__share__corner-left"></div>
        <div class="article__header__share__corner-right"></div>
      </div>
    </section>
    <div class="article__wrapper">
      <aside class="article__wrapper__aside">
        <span class="article__wrapper__aside__title">Sommaire</span>
        <ul class="article__wrapper__aside__list">
          <li class="article__wrapper__aside__list__element" v-for="section in article.sections" :key="section">
            <a :href="'#' + stringToSlug(section.title)">{{ section.title }}</a>
          </li>
        </ul>
      </aside>
      <div class="article__wrapper__content">
        <section class="article__wrapper__content__part" v-for="section in article.sections" :key="section">
          <h2 :id="stringToSlug(section.title)" class="article__wrapper__content__part__title">{{ section.title }}</h2>
          <div class="article__wrapper__content__part__wrapper desktop-only">
            <div class="article__wrapper__content__part__wrapper__paragraphs">
              <div
                class="article__wrapper__content__part__wrapper__paragraphs__txt"
                v-html="renderRichText(section.richtext1)"
              ></div>

              <div
                class="article__wrapper__content__part__wrapper__paragraphs__txt"
                v-html="renderRichText(section.richtext2)"
              ></div>
            </div>
            <img
              class="article__wrapper__content__part__wrapper__img"
              :src="section.media[0].filename"
              :alt="section.media[0].alt"
            />
          </div>
          <div class="article__wrapper__content__part__wrapper mobile-only">
            <div
              class="article__wrapper__content__part__wrapper__paragraphs__txt"
              v-html="renderRichText(section.richtext1)"
            ></div>
            <img
              class="article__wrapper__part__wrapper__img"
              :src="section.media[0].filename"
              :alt="section.media[0].alt"
            />
            <div
              class="article__wrapper__content__part__wrapper__paragraphs__txt"
              v-html="renderRichText(section.richtext2)"
            ></div>
          </div>
        </section>
      </div>
    </div>
    <BlogComponent />
  </article>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>

<style scoped lang="scss">
.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  gap: 3rem;
  // width: clamp(343px, 100%, 90vw);
  width: 100%;
  margin: auto;
  position: relative;

  @media (min-width: $big-tablet-screen) {
    gap: 6rem;
    padding: 0 4rem;
  }

  &__header {
    border-radius: $radius;
    overflow: hidden;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    position: relative;
    padding: 1.5rem 0 0 0;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row-reverse;
      background-image: url('/assets/images/gradient-background.svg');
      background-size: 60%;
      background-repeat: no-repeat;
      gap: 0;
      padding: 0;
      transition: background-size 0.4s ease-in-out;

      &:hover {
        background-size: 62%;
      }
    }

    &__txt {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      color: $text-color;
      align-self: stretch;

      @media (min-width: $big-tablet-screen) {
        color: $primary-color;
        width: 50%;
        padding: 3rem 2rem 2rem 2rem;
      }

      &__title {
        font-weight: $overweight;
        font-size: 1.25rem;

        @media (min-width: $big-tablet-screen) {
          font-size: 2rem;
        }
      }

      &__description {
        font-weight: $skinny;
        font-size: 1rem;

        @media (min-width: $big-tablet-screen) {
          font-size: 1.25rem;
        }
      }

      &__date {
        width: 100%;
        font-size: 0.75rem;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        align-self: stretch;
        margin-top: auto;
      }
    }

    &__img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      object-position: center;
      border-radius: 0;
      border-radius: $radius;

      @media (min-width: $big-tablet-screen) {
        height: 420px;
        width: 50%;
        border-radius: 0;
      }
    }

    &__share {
      display: flex;
      width: 40px;
      height: 40px;
      background-color: $base-color;
      position: relative;
      position: absolute;
      right: 0;
      top: 284px;
      border-radius: $radius 0 $radius 0;
      transition: max-width 0.2s ease-in-out, width 0.2s ease-in-out;

      @media (min-width: $big-tablet-screen) {
        right: 0;
        bottom: 0;
        top: initial;
      }

      &:hover {
        width: 110px;
        max-width: 110px;
      }

      &__plus {
        display: flex;
        padding: 0.5rem;
        gap: 0.75rem;
        align-items: center;
        cursor: pointer;
        width: 40px;
        height: 40px;
        overflow: hidden;
        color: $text-color !important;

        &:hover {
          width: 110px;
          max-width: 110px;
        }

        &__icon {
          width: 20px;
          height: 20px;
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
        bottom: 0;
        left: -20px;
        transform: rotate(90deg);
      }
      &__corner-right {
        top: -20px;
        right: 0;
        transform: rotate(90deg);
      }
    }
  }

  &__wrapper {
    display: flex;
    gap: 2rem;
    width: 100%;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
    }

    @media (min-width: $laptop-screen) {
      gap: 4rem;
    }

    &__aside {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      width: 100%;
      max-height: 200px;
      background-color: $primary-color;
      border-radius: 0 0 $radius $radius;
      height: fit-content;
      padding: 1rem;
      box-shadow: $shadow;

      @media (min-width: $big-tablet-screen) {
        max-height: inherit;
        overflow: inherit;
        width: 400px;
        inset: 0;
        position: sticky;
        gap: 2rem;
        padding: 6rem 2rem;
        justify-content: flex-start;
        background-color: $base-color;
        border-radius: none;
        height: 500px;
        box-shadow: none;
        border-top: 2px solid rgba(0, 0, 0, 0.06);
      }

      &__title {
        font-weight: $thick;
        font-size: 1.25rem;
        // text-align: center;

        @media (min-width: $big-tablet-screen) {
          font-size: 1.5rem;
          text-align: left;
        }
      }

      &__list {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 0.5rem;

        @media (min-width: $big-tablet-screen) {
          gap: 1.5rem;
          align-items: flex-start;
        }

        &__element {
          list-style: none;
          font-size: 1rem;
        }
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;

      @media (min-width: $big-tablet-screen) {
        gap: 4rem;
      }

      &__part {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @media (min-width: $big-tablet-screen) {
          gap: 2rem;
        }

        &:nth-child(odd) {
          .article__wrapper__content__part__wrapper {
            @media (min-width: $big-tablet-screen) {
              flex-direction: row-reverse;
            }
          }
        }

        &__title {
          font-weight: $thick;
          font-size: 1.25rem;

          @media (min-width: $big-tablet-screen) {
            font-size: 1.5rem;
          }
        }

        &__txt {
          font-weight: $skinny;
        }

        &__wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;

          &__paragraphs {
            &__txt {
              & :deep(a) {
                color: $secondary-color-faded;
                text-decoration: line-through;
                text-decoration-color: $secondary-color-faded;
                text-decoration-thickness: 8px;
              }
            }
          }

          & img {
            border-radius: $radius;
          }

          @media (min-width: $big-tablet-screen) {
            flex-direction: row;
            gap: 3rem;

            &__paragraphs {
              width: 50%;
              display: flex;
              flex-direction: column;
              gap: 2rem;
              text-align: justify;
              font-size: 1rem;
              font-weight: $skinny;

              &__txt {
                font-family: 'Custom';
                font-weight: $skinny;
                & :deep(a) {
                  color: $text-color;
                  text-decoration: line-through;
                  text-decoration-color: $secondary-color-faded;
                  text-decoration-thickness: 8px;
                }
                & :deep(ul) {
                  list-style: square inside;
                }
                & :deep(li) {
                  list-style: square inside;
                }
                & :deep(b) {
                  font-weight: $thick;
                }
              }
            }
          }

          @media (min-width: $laptop-screen) {
            gap: 4rem;
          }

          &__img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: $radius;

            @media (min-width: $big-tablet-screen) {
              height: initial;
              width: 50%;
            }
          }
        }
      }
    }
  }
}

.mobile-only {
  display: flex;

  @media (min-width: $big-tablet-screen) {
    display: none;
  }
}
.desktop-only {
  display: none;
  @media (min-width: $big-tablet-screen) {
    display: flex;
    gap: 4rem;
  }
}
</style>
