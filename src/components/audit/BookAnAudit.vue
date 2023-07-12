<script setup>
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
const form = ref(null)

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
    <input id="HP" v-model="state.HP" class="HP" type="checkbox" name="not_a_robot" @change="checkIfHP" />
    <label for="HP" class="HP"> Je ne suis pas un robot </label>

    <button
      class="form__button button-primary"
      type="submit"
      :disabled="state.isSubmitting"
      aria-label="envoyer le formulaire"
    >
      Envoyer
    </button>

    <p v-if="state.sent" class="form__error">Merci ! Votre demande a été envoyée</p>
  </form>
</template>

<style lang="scss" scoped>
.form {
  width: clamp(240px, 100%, 450px);
  background-color: $primary-color;
  border: rgba(255, 255, 255, 0.06) solid 1px;
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  border-radius: $radius;
  @media (min-width: $big-tablet-screen) {
    padding: 24px;
    gap: 24px;
  }

  &__group {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;

    &__input,
    &__textarea {
      border: 2px solid $text-color;
      // border-radius: $small-radius;
      height: 44px;
      width: 100%;
      caret-color: $text-color;
      padding: 12px;
      color: $text-color;
      // font-weight: $slim-weight;
      background-color: $primary-color;

      &::placeholder {
        color: $text-color;
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
      color: $text-color;
      position: absolute;
      background-color: $primary-color;
      padding: 0 6px;
      top: -12px;
      left: 8px;
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
    // background: $text-color;
    cursor: pointer;

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
  }
}
.HP {
  display: none;
}
</style>
