<script setup lang="ts">
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useVuelidate } from '@vuelidate/core'
import { required, email, url } from '@vuelidate/validators'

const state = reactive({
  email: '',
  url: '',
  isSubmitting: false,
  sent: false,
  HP: false,
})

const rules = {
  email: {
    required,
    email,
  },
  url: {
    required,
    url,
  },
}

const v$ = useVuelidate(rules, state)
const form: Ref<any> = ref()

async function submit() {
  const valid = await v$.value.$validate()

  if (valid) {
    if (state.HP === false) {
      await emailjs.sendForm('service_f0ns79q', 'template_aaumqzn', form.value, 'ZAG2PeOHvH8fTwjpW')
    }

    state.sent = true
    state.isSubmitting = false
    state.email = ''
    state.url = ''
    v$.value.$reset()
  }
}
</script>

<template>
  <form ref="form" class="form" @submit.prevent="submit">
    <!-- CHAMP EMAIL -->
    <div class="form__group" :class="{ 'form__group--error': v$.email.$dirty }">
      <label class="form__group__label">Email</label>
      <input v-model.trim="state.email" class="form__group__input" placeholder="michel.dupont@gmail.com" name="email" />

      <div v-if="v$.email.$dirty && v$.email.required.$invalid" class="form__error">Ce champ est requis</div>

      <div v-else-if="v$.email.$dirty && v$.email.email.$invalid" class="form__error">
        Veuillez renseigner un email valide
      </div>
    </div>

    <!-- CHAMP URL -->
    <div class="form__group" :class="{ 'form__group--error': v$.url.$dirty }">
      <label class="form__group__label">Url</label>
      <input v-model.trim="state.url" class="form__group__input" placeholder="url de votre site web" name="url" />

      <div v-if="v$.url.$dirty && v$.url.required.$invalid" class="form__error">Ce champ est requis</div>
      <div v-else-if="v$.url.$dirty && v$.url.url.$invalid" class="form__error">Veuillez renseigner un URL valide</div>
    </div>

    <!-- CHAMP HP -->
    <input id="HP" v-model="state.HP" class="HP" type="checkbox" name="not_a_robot" />
    <label for="HP" class="HP"> Je ne suis pas un robot </label>

    <button
      class="form__button button-primary"
      type="submit"
      :disabled="state.isSubmitting"
      aria-label="envoyer le formulaire"
    >
      Recevoir mon audit gratuit
    </button>

    <p v-if="state.sent" class="form__error">Merci ! Votre demande a été envoyée</p>
  </form>
</template>

<style lang="scss" scoped>
.form {
  pointer-events: all;
  margin-top: 2rem;
  animation: fade 0.4s ease;
  width: clamp(240px, 100%, 500px);
  background-color: $secondary-color;
  gap: 1rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  border-radius: $radius;
  @media (min-width: $big-tablet-screen) {
    gap: 1.5rem;
  }

  &__group {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;

    &__input,
    &__textarea {
      font-family: 'Custom';
      font-size: $base-text;
      border: 2px solid $primary-color;
      // border-radius: $small-radius;
      height: 44px;
      width: 100%;
      caret-color: $text-color-alt;
      padding: 12px;
      color: $text-color-alt;
      // font-weight: $slim-weight;
      background-color: $secondary-color;
      animation: slide-from-top 0.4s ease-in-out;

      &::placeholder {
        color: $primary-color;
        // font-weight: $slim-weight;
        opacity: 0.4;
      }
      &[type='checkbox'] {
        width: 60px;
        height: 40px;
        cursor: pointer;
        accent-color: $text-color;
      }
    }
    &__textarea {
      resize: none;
      height: 140px;
      border-radius: $radius;
    }

    &__label {
      // font-weight: $medium-weight;
      color: $primary-color;
      position: absolute;
      background-color: $secondary-color;
      padding: 0 6px;
      top: -12px;
      left: 8px;
      animation: slide-from-top 0.4s ease-in-out;
    }
    &__checkbox-container {
      color: $text-color;
      display: flex;
      gap: 0.5rem;
      justify-content: space-between;
      width: 100%;
      flex-direction: row;

      &__text {
        // font-weight: $slim-weight;
        font-size: 12px;
      }
    }
  }
  &__button {
    width: 100%;
    background: $primary-color;
    color: $secondary-color;
    cursor: pointer;
    animation: slide-from-top 0.4s ease-in-out;

    // &:hover {
    //   background: linear-gradient(
    //     90deg,
    //     rgba(236, 159, 5, 1) 40%,
    //     rgba(236, 86, 5, 1) 100%
    //   );
    // }
  }

  &__error {
    // font-weight: $slim-weight;
    font-size: 12px;
    color: $primary-color;
  }
}
.HP {
  display: none;
}
</style>
