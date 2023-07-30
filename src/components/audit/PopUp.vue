<script setup>
import { ref } from 'vue'
let isBookAnAuditOpen = ref(false)
</script>
<template>
  <div class="pop-up">
    <span>Nous vous proposons</span>
    <h1>Un audit gratuit de votre site web</h1>
    <div class="pop-up__buttons">
      <a
        class="button-primary"
        href="https://calendly.com/tekilawebfactory/30min"
        target="_blank"
        aria-label="Prenez rendez-vous avec nous"
        >Prendre RDV</a
      >
      <button class="button-secondary" @click="isBookAnAuditOpen = !isBookAnAuditOpen">Commander un audit</button>
    </div>

    <AuditBookAnAudit v-if="isBookAnAuditOpen" />
  </div>
</template>
<style lang="scss" scoped>
.pop-up {
  display: flex;
  width: clamp(300px, 100%, 820px);
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  background-color: $text-color;
  padding: 2rem;
  border-radius: $radius;
  height: fit-content;
  & span {
    color: $primary-color;
  }
  & h1 {
    font-size: 1.25rem;
    font-weight: 800;
    color: $primary-color;

    @media (min-width: $big-tablet-screen) {
      font-size: 1.5rem;
    }
  }

  &__buttons {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    justify-content: center;

    & a,
    button {
      width: 100%;
      background-color: $primary-color;
      font-family: 'Custom';

      @media (min-width: $tablet-screen) {
        width: fit-content;
        min-width: 180px;
      }
    }

    & .button-primary {
      color: $text-color;
      font-weight: 400 !important;
    }
    & .button-secondary {
      color: $text-color;
      font-weight: 400 !important;
    }
  }
}
</style>
