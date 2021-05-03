<template>
  <span class="text-black">
    <slot />
  </span>
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
/*
.highlight-wrapper {
  @apply inline relative;
  z-index: 1;
}

.highlight {
  @apply relative inline;
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
*/
</style>
