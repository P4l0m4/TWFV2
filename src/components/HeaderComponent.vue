<script setup></script>

<template>
  <header>
    <NavigationComponent />
  </header>
</template>
<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  box-shadow: $shadow;
  background-color: $primary-color;
}
</style>
