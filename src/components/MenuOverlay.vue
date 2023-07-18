<script setup>
defineProps({ isMenuOpen: Boolean })
const emit = defineEmits(['close'])
</script>
<template>
  <div v-show="isMenuOpen" class="menu" @click="emit('close')">
    <div class="menu__grid">
      <NuxtLink class="menu__grid__link" to="/" exact
        ><img src="@/assets/icons/home.svg" alt="icone" /><span>Accueil</span></NuxtLink
      ><NuxtLink class="menu__grid__link" to="/prestations" exact
        ><img src="@/assets/icons/heart.svg" alt="icone" /><span>Prestations</span></NuxtLink
      >
      <NuxtLink class="menu__grid__link" to="/ressources" exact
        ><img src="@/assets/icons/shop.svg" alt="icone" /><span>Ressources</span></NuxtLink
      ><NuxtLink class="menu__grid__link" to="/a-propos" exact
        ><img src="@/assets/icons/mail.svg" alt="icone" /><span>A propos</span></NuxtLink
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
.router-link-exact-active {
  background-color: $secondary-color;
}
.menu {
  position: fixed;
  backdrop-filter: blur(16px);
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fade 0.6s ease;

  &__grid {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;

    &__link {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding: 1rem;
      background-color: $primary-color;
      border-radius: $radius;
      width: 110px;
      height: 90px;
      animation: slide-from-top 0.6s;
    }
  }
}
</style>
