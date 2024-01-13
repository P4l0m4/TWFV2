<script setup lang="ts">
import { ref } from 'vue'
let isBookAnAuditOpen: Ref<boolean> = ref(false)
</script>
<template>
  <div class="pop-up">
    <h1 class="subtitles">Faites auditer gratuitement votre site web</h1>
    <span>Découvrez comment il peut attirer plus de clients pour votre entreprise</span>
    <div class="pop-up__buttons">
      <a
        class="button-primary"
        href="https://calendly.com/tekilawebfactory/30min"
        target="_blank"
        aria-label="Prendre RDV"
        >Prendre RDV</a
      >
      <button class="button-secondary" @click="isBookAnAuditOpen = !isBookAnAuditOpen">Commander un audit</button>
    </div>

    <AuditBookAnAudit v-if="isBookAnAuditOpen" />
  </div>
</template>
<style lang="scss" scoped>
.subtitles {
  text-wrap: balance;
}
.pop-up {
  display: flex;
  // width: clamp(300px, 100%, 820px);
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  background-color: $secondary-color;
  padding: 2rem;
  height: fit-content;
  & span {
    color: $primary-color;
  }
  & h1 {
    // font-size: 1.25rem;
    // font-weight: $thick;
    color: $primary-color;

    // @media (min-width: $big-tablet-screen) {
    //   font-size: 1.5rem;
    // }
  }

  &__buttons {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    flex-direction: column;

    @media (min-width: $tablet-screen) {
      flex-direction: row;
      max-width: 500px;
    }

    & a,
    button {
      width: 100%;

      @media (min-width: $tablet-screen) {
        width: 100%;
        min-width: 180px;
      }
    }

    & .button-primary {
      color: $secondary-color;
      font-weight: $skinny;
      background-color: $primary-color;
    }
    & .button-secondary {
      color: $primary-color;
      font-weight: $skinny;
      border: $primary-color solid 2px;
    }
  }
}
</style>
