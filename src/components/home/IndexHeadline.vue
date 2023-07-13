<script setup>
import { onMounted } from 'vue'

const str = 'Prenez rendez-vous avec nous °'

onMounted(() => {
  const text = document.getElementById('text')
  for (let i = 0; i < str.length; i++) {
    let span = document.createElement('span')
    span.innerText = str[i]
    text.appendChild(span)
    span.style.transform = 'rotate(' + i * 11.7 + 'deg)'
    span.style.position = 'absolute'
    span.style.left = '50%'
    span.style.display = 'block'
    span.style.transformOrigin = '0 50px'
    span.style.textTransform = 'uppercase'
    span.style.color = '#333333'
    span.style.fontWeight = '800'
    span.style.fontSize = '0.75rem'
    span.textShadow = '0px 0px 10px #f7f7f72c'
    span.backdropFilter = 'blur(10px)'
  }
})
</script>
<template>
  <section class="headline">
    <div class="headline__titles">
      <div class="headline__titles__wrapper">
        <span class="headline__titles__wrapper__small-title">Great companies deserve</span
        ><span class="headline__titles__wrapper__big-title">Great</span>
      </div>
      <div class="headline__titles__wrapper">
        <span class="headline__titles__wrapper__big-title">Websites</span
        ><a
          class="headline__titles__wrapper__circle"
          href="https://calendly.com/tekilawebfactory/30min"
          target="_blank"
          aria-label="Prenez rendez-vous avec nous"
        >
          <p id="text"></p>
        </a>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.headline {
  // background-color: rgb(245, 239, 220);
  // background: linear-gradient(0deg, $base-color 0%, rgb(255, 246, 229) 100%);
  display: flex;
  gap: 2rem;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100vw;
  margin-top: -4rem;
  height: 100vh;

  @media (min-width: $big-tablet-screen) {
    height: calc(100vh - 48px);
    gap: 4rem;
    padding: 1rem 7rem;
  }
  @media (min-width: $laptop-screen) {
    height: 100vh;
    margin-top: -9.5rem;
  }

  &__titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    &__wrapper {
      display: flex;
      align-items: center;
      gap: 2rem;
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
        color: $text-color;
        text-shadow: $shadow-white;

        @media (min-width: $big-tablet-screen) {
          max-width: 84px;
          font-size: 1rem;
          font-weight: 600;
        }
      }
      &__big-title {
        text-shadow: $shadow-white;
        font-size: 3rem;
        font-family: Russo One;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: $text-color;

        @media (min-width: $big-tablet-screen) {
          font-size: 5rem;
        }

        @media (min-width: $laptop-screen) {
          font-size: 6rem;
        }
      }

      &__circle {
        position: relative;
        background-color: $base-color;
        border-radius: 50%;

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
          // color: $text-color;
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
</style>
