<script setup>
import { onMounted } from 'vue'

const str = 'Prenez RDV avec nous'

onMounted(() => {
  const text = document.getElementById('text')
  for (let i = 0; i < str.length; i++) {
    let span = document.createElement('span')
    span.innerText = str[i]
    text.appendChild(span)
    span.style.transform = 'rotate(' + i * 17 + 'deg)'
    span.style.position = 'absolute'
    span.style.left = '50%'
    span.style.display = 'block'
    span.style.transformOrigin = '0 50px'
    span.style.textTransform = 'uppercase'
    span.style.color = '#333333'
    span.style.fontWeight = '800'
  }
})

const breadcrumbs = [
  {
    name: 'Accueil',
    url: window.location.href,
  },
]

useHead(() => {
  return {
    title: 'Accueil | Tekila Web Factory',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Développement et optimisation de site web. Référencez et augmentez la performance de votre site internet',
      },
    ],
  }
})
</script>

<template>
  <section class="index">
    <div class="index__headline">
      <div class="index__headline__titles">
        <div class="index__headline__titles__wrapper">
          <span class="index__headline__titles__wrapper__small-title">Great companies deserve</span
          ><span class="index__headline__titles__wrapper__big-title">Great</span>
        </div>
        <div class="index__headline__titles__wrapper">
          <span class="index__headline__titles__wrapper__big-title">Websites</span
          ><a
            class="index__headline__titles__wrapper__circle"
            href="https://calendly.com/tekilawebfactory/30min"
            target="_blank"
          >
            <p id="text"></p>
          </a>
        </div>
      </div>
      <div class="index__video">
        <video class="index__video__media" src="https://youtu.be/GRnWBIJb_Oo" controls></video>
      </div>
    </div>

    <BlogComponent />
  </section>
  <JsonldBreadcrumb :links="breadcrumbs" />
</template>
<style scoped lang="scss">
.index {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  &__headline {
    background-color: rgb(245, 239, 220);
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 100vw;
    margin-top: calc(-1rem - 48px);
    height: 100vh;

    @media (min-width: $big-tablet-screen) {
      margin-top: calc(-5.5rem - 75px);
      gap: 4rem;
    }

    &__titles {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        flex-direction: column;

        @media (min-width: $big-tablet-screen) {
          gap: 2rem;
          flex-direction: row;
        }

        &__small-title {
          max-width: inherit;
          font-size: 1rem;
          font-weight: 500;
          @media (min-width: $big-tablet-screen) {
            max-width: 84px;
            font-size: 1rem;
            font-weight: 600;
          }
        }
        &__big-title {
          font-size: 4rem;
          font-family: 'andine';
          font-weight: 800;
          text-transform: uppercase;

          @media (min-width: $big-tablet-screen) {
            font-size: 7rem;
          }
        }

        &__circle {
          position: relative;

          &::after {
            content: '';
            position: absolute;
            inset: 0;
            margin: auto;
            background-image: url('@/assets/icons/arrow.svg');
            width: 20px;
            height: 20px;
            transform: rotate(90deg);
          }

          & p {
            position: relative;
            width: 100px;
            height: 100px;
            color: $text-color;
            text-transform: uppercase;
            animation: circle 8s linear infinite;
          }

          @keyframes circle {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        }
      }
    }
  }

  &__video {
    display: none;
    width: clamp(343px, 100%, 600px);
    border-radius: $radius;
    overflow: hidden;

    &__media {
      width: 100%;
    }
  }
}
</style>
