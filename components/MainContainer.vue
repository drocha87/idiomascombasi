<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.container {
  @apply flex flex-wrap md:flex-nowrap;
  width: 100%;
  max-width: 960px;
}
</style>
