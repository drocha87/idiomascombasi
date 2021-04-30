<template>
  <div class="highlight-wrapper">
    <span class="highlight" :style="{ '--bgcolor': color }">
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    color: { type: String, default: '#A7DADC' },
  }
})
</script>

<style lang="postcss" scoped>
.highlight-wrapper {
  @apply inline relative;
  z-index: 1;
}

/* TODO: line break inside the element, invalidate the psedou class ::after */
.highlight {
  @apply relative;
  --bgcolor: #A7DADC;
}

.highlight::after{
  @apply opacity-50;
  background-color: var(--bgcolor);

  content: "";
  position: absolute;
  height: 65%;
  width: 90%;
  left: -2%;
  top: 12%;
  z-index: -1;
}
</style>
