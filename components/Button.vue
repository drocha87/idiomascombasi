<template>
  <div>
    <button @click="$emit('click')">
      <div :class="{'content': true, 'small': small}" >
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    small: { type: Boolean, default: false },
  }
})
</script>

<style lang="postcss" scoped>
.content {
  position: relative;
  @apply border-b-2 border-white hover:border-secondary leading-8 text-xl mr-2 font-antonio tracking-widest;
}

.content::before {
  content: "";
  background-image: url('assets/images/chevron_right_black_24dp.svg');
  width: 16px;
  height: 18px;
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
}

.small {
  @apply text-base;
}

button {
  @apply mx-auto uppercase text-black font-bold py-2 bg-transparent tracking-wider;
  height: 50px;
}
</style>
