<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <nav>
    <nuxt-link to="/" class="logo" aria-label="lien vers la page d'accueil"
      ><img src="@/assets/images/logo.svg" alt="logo" class="logo"
    /></nuxt-link>

    <div class="wrapper">
      <NuxtLink to="/prestations" class="link desktop-only" aria-label="lien vers les favoris"> Prestations</NuxtLink>
      <NuxtLink exact to="/ressources" class="link desktop-only" aria-label="lien vers les ressources">
        <span class="desktop-only">Ressources</span> </NuxtLink
      ><NuxtLink to="/a-propos" class="link desktop-only" aria-label="lien vers la page de contact">A propos</NuxtLink>
      <ContactCalendlyComponent class="desktop-only" />
    </div>
    <MenuOverlay :isMenuOpen="isMenuOpen" @close="isMenuOpen = false" /><button
      @click="isMenuOpen = true"
      class="link menu"
      aria-label="ouvrir le menu"
    >
      <img class="icon" src="@/assets/icons/menu.svg" alt="menu icon" />
    </button>
  </nav>
</template>

<style scoped lang="scss">
.router-link-exact-active {
  background-color: $base-color !important;
}

nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background-color: $primary-color;
  padding: 0.5rem;
  box-shadow: $shadow;
  position: relative;
  animation: slide-from-top 2s ease;

  @media (min-width: $laptop-screen) {
    padding: 1rem 2rem;
  }

  .desktop-only {
    display: none !important;

    @media (min-width: $laptop-screen) {
      display: flex !important;
    }
  }

  .wrapper {
    display: flex;
    gap: 0.5rem;
  }

  .menu {
    display: flex;

    @media (min-width: $laptop-screen) {
      display: none !important;
    }
  }

  & .logo {
    display: flex;
    width: 200px;
    border-radius: 0;
    padding: 0 0.5rem;
    background-color: $primary-color !important;
  }

  .link {
    display: flex;
    gap: 0.25rem;
    padding: 0 1rem;
    align-items: center;
    border-radius: $radius;
    transition: background-color 0.4s ease;
    white-space: nowrap;
  }
}
</style>
