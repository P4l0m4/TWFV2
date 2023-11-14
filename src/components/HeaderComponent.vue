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
  max-width: 2400px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
</style>
