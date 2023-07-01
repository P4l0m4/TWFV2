<template>
  <div class="loader-background">
    <svg viewBox="0 0 1320 300">
      <text x="50%" y="50%" dy=".35em" text-anchor="middle">Tekila Web Factory</text>
    </svg>
  </div>
</template>
<style scoped lang="scss">
@font-face {
  font-family: 'Russo One';
  src: url(@/assets/fonts/RussoOne-Regular.ttf) format('truetype');
  font-display: swap;
}
.loader-background {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: $base-color;
  position: fixed;
  inset: 0;
  z-index: 3;
}
svg {
  width: 100%;
  height: 100%;
  font-family: 'Russo One', sans-serif;
}
svg text {
  text-transform: uppercase;
  animation: stroke 4s infinite alternate;
  stroke-width: 2;
  stroke: $text-color;
  font-size: 100px;
}
@keyframes stroke {
  0% {
    fill: $text-color;
    stroke: $text-color;
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 2;
  }
  16% {
    fill: $text-color;
    stroke: $text-color;
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 2;
  }

  80% {
    fill: rgba(72, 138, 20, 0);
    stroke: $text-color;
  }
  90% {
    fill: rgba(72, 138, 20, 0);
    stroke: $text-color;
    stroke-width: 3;
  }
  100% {
    fill: $text-color;
    stroke: rgba(54, 95, 160, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}
</style>
