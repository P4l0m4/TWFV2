<script setup>
defineProps(['error'])
</script>

<template>
  <div class="error">
    <NavigationComponent />
    <div class="error__message">
      <h1>Oooops... erreur {{ error.statusCode }}</h1>
      <h2>Nous n'avons pas trouvé la page que vous cherchez.</h2>
      <NuxtLink to="/" class="button-primary" aria-label="retour à la page d'accueil"
        >Retour à la page d'accueil</NuxtLink
      >
    </div>
    <div class="error__animation"></div>
  </div>
</template>
<style lang="scss" scoped>
.error {
  &__message {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    height: 100vh;
    text-align: center;

    & h2 {
      font-weight: 200;
      font-size: 1rem;
    }

    & button {
      padding: 1rem 1.75rem;
    }
  }
}
</style>
