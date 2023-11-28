<script setup lang="ts">
//JSONLD
const breadcrumbs = [
  {
    name: 'Accueil',
    url: window.location.origin,
  },
  {
    name: 'A propos',
    url: window.location.href,
  },
]
</script>

<template>
  <section class="contact">
    <JsonldBreadcrumb :links="breadcrumbs" />
    <div class="contact__wrapper">
      <ContactFormComponent />
      <iframe
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.595292715556!2d6.043295085975591!3d45.47795589649109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478bb28a6d393433%3A0x9ae564f9711ac99!2s508%20Rue%20pichat%2C%2073800%20Sainte-H%C3%A9l%C3%A8ne-du-Lac!5e0!3m2!1sfr!2sfr!4v1689004905526!5m2!1sfr!2sfr"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  align-items: center;
  padding: 1rem;
  flex-direction: column;

  &__wrapper {
    gap: 2rem;
    padding: 1rem 0;
    display: flex;
    width: clamp(300px, 100%, 1000px);
    align-items: flex-end;
    flex-direction: column;
    align-items: center;
    @media (min-width: $laptop-screen) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .map {
    width: clamp(300px, 100%, 500px);
    height: 300px;
    border: 0;
    border-radius: $radius;

    @media (min-width: $laptop-screen) {
      height: 540px;
    }
  }
}
</style>
