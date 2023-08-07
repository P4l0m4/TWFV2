<!-- <script setup>
import { onMounted } from 'vue'
const marquees = document.querySelectorAll('.marquees__marquee')

onMounted(() => {
  window.addEventListener('scroll', () => {
    let scroll = window.scrollY
    marquees.forEach(marquee => {
      marquee.style.transform = `translateX(${-scroll * 0.5}px) translateY(-100%)`
    })
  })
})
</script> -->
<template>
  <section class="marquees">
    <div class="marquees__marquee">
      <h4>SEO</h4>
      <h4>Sites web</h4>
      <h4>Web</h4>
      <h4>E-commerce</h4>
      <h4>Référencement naturel</h4>
      <h4>Web design</h4>
      <h4>Développement web</h4>
      <h4>Shopify</h4>
      <h4>Site web</h4>
      <h4>Création de sites web</h4>
      <h4>Création de sites e-commerce</h4>
      <h4>Optimisation site web</h4>
      <h4>SEO</h4>
      <h4>Sites web</h4>
      <h4>Web</h4>
      <h4>E-commerce</h4>
      <h4>Référencement naturel</h4>
      <h4>Web design</h4>
      <h4>Développement web</h4>
      <h4>Shopify</h4>
      <h4>Site web</h4>
      <h4>Création de sites web</h4>
      <h4>Création de sites e-commerce</h4>
      <h4>Optimisation site web</h4>
      <h4>SEO</h4>
      <h4>Sites web</h4>
      <h4>Web</h4>
      <h4>E-commerce</h4>
      <h4>Référencement naturel</h4>
      <h4>Web design</h4>
      <h4>Développement web</h4>
      <h4>Shopify</h4>
      <h4>Site web</h4>
      <h4>Création de sites web</h4>
      <h4>Création de sites e-commerce</h4>
      <h4>Optimisation site web</h4>
    </div>
    <div class="marquees__marquee">
      <h4>SEO</h4>
      <h4>Sites web</h4>
      <h4>Web</h4>
      <h4>E-commerce</h4>
      <h4>Référencement naturel</h4>
      <h4>Web design</h4>
      <h4>Développement web</h4>
      <h4>Shopify</h4>
      <h4>Site web</h4>
      <h4>Création de sites web</h4>
      <h4>Création de sites e-commerce</h4>
      <h4>Optimisation site web</h4>
      <h4>SEO</h4>
      <h4>Sites web</h4>
      <h4>Web</h4>
      <h4>E-commerce</h4>
      <h4>Référencement naturel</h4>
      <h4>Web design</h4>
      <h4>Développement web</h4>
      <h4>Shopify</h4>
      <h4>Site web</h4>
      <h4>Création de sites web</h4>
      <h4>Création de sites e-commerce</h4>
      <h4>Optimisation site web</h4>
      <h4>SEO</h4>
      <h4>Sites web</h4>
      <h4>Web</h4>
      <h4>E-commerce</h4>
      <h4>Référencement naturel</h4>
      <h4>Web design</h4>
      <h4>Développement web</h4>
      <h4>Shopify</h4>
      <h4>Site web</h4>
      <h4>Création de sites web</h4>
      <h4>Création de sites e-commerce</h4>
      <h4>Optimisation site web</h4>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.marquees {
  position: relative;
  height: 400px;
  width: 100%;
  overflow: hidden;

  &__marquee {
    display: flex;
    gap: 2rem;
    position: absolute;
    transform: rotate(5deg);
    background-color: $text-color;
    padding: 0.5rem;
    align-items: center;
    left: 0;
    right: 0;
    top: 50%;
    bottom: 0;
    margin: auto;
    height: 40px;
    width: fit-content;
    animation: marquee 60s linear infinite;

    @keyframes marquee {
      from {
      }
      to {
        transform: rotate(5deg) translateX(-50%);
      }
    }
    @keyframes marquee-reversed {
      from {
      }
      to {
        transform: rotate(-5deg) translateX(-50%);
      }
    }

    &:nth-of-type(2) {
      width: fit-content;
      background-color: $primary-color;
      border: $text-color 1px solid;
      transform: rotate(-5deg);
      flex-direction: row-reverse;
      animation: marquee-reversed 60s linear infinite;
      top: -100%;

      & h4 {
        color: $text-color;
      }
    }

    & h4 {
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 400;
      color: $primary-color;
      white-space: nowrap;
    }
  }
}
</style>
