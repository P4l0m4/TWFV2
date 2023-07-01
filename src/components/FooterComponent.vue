<script setup>
let year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <img src="@/assets/images/logo-light.svg" alt="logo tekila web factory" />
    <div class="footer__site-links">
      <nuxt-link to="/" class="footer__document">Accueil</nuxt-link>
      <nuxt-link to="/boutique" class="footer__document">Boutique</nuxt-link>
      <nuxt-link to="/favoris" class="footer__document">Favoris</nuxt-link>
      <nuxt-link to="/contact" class="footer__document">Contact</nuxt-link>
    </div>

    <div class="footer__others">
      <span>©Tekila Web Factory {{ year }}</span>
    </div>

    <div class="footer__icons">
      <a class="footer__icons__link" href="#" aria-label="lien vers la page facebook"
        ><img class="footer__icons__link__icon scale-on-hover" src="@/assets/icons/facebook.svg" alt="icon" /></a
      ><a class="footer__icons__link" href="#" aria-label="lien vers la page linkedin"
        ><img class="footer__icons__link__icon scale-on-hover" src="@/assets/icons/linkedin.svg" alt="icon" /></a
      ><a class="footer__icons__link" href="#" aria-label="lien vers la page instagram"
        ><img class="footer__icons__link__icon scale-on-hover" src="@/assets/icons/instagram.svg" alt="icon"
      /></a>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  color: $primary-color;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 2rem 1rem 4rem 1rem;
  font-size: 0.75rem;
  flex-wrap: wrap;
  background-color: $text-color;

  &__site-links {
    display: flex;
    gap: 1rem;
    text-decoration: underline;

    & a {
      color: $primary-color;
    }
  }

  &__others {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: $primary-color;
  }

  &__icons {
    display: flex;
    gap: 0.5rem;

    &__link {
      color: $primary-color;

      &__icon {
        width: 26px;
        height: 26px;
      }
    }
  }
}
</style>
