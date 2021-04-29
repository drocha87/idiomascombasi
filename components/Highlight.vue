<template>
  <div class="container inline p-0 m-0">
    <span class="highlight">
      <slot />
    </span>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  position: relative;
  z-index: 1;
}

/* TODO: line break inside the element, invalidate the psedou class ::after */
.highlight {
  position: relative;
}

.highlight::before{
  @apply bg-white opacity-90;

  content: "";
  position: absolute;
  height: 60%;
  width: 90%;
  left: -2%;
  top: 15%;
  z-index: -1;
}
</style>
