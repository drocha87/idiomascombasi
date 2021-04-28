<template>
  <span class="highlight">
    <slot />
  </span>
</template>

<style lang="postcss" scoped>
/* TODO: line break inside the element, invalidate the psedou class ::after */
.highlight {
  position: relative;
}

.highlight::after{
  @apply bg-yellow-400 opacity-50;

  content: "";
  position: absolute;
  height: 60%;
  width: 90%;
  left: -2%;
  top: 15%;
  z-index: -1;
}
</style>
