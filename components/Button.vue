<template>
    <button @click="$emit('click')">
      <div :class="[{'content': true, 'small': small}, borderColor]" >
        <slot></slot>
      </div>
    </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    small: { type: Boolean, default: false },
    borderColor: { type: String, default: 'border-primary' },
  }
})
</script>

<style lang="postcss" scoped>
.content {
  @apply relative leading-8 text-base font-redhat tracking-widest;
}

.content::before {
  @apply absolute bg-contain bg-no-repeat bg-center;
  background-image: url('assets/images/chevron_right_black_24dp.svg');

  content: "";
  width: 16px;
  height: 2rem;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
}

.small {
  @apply text-base;
}

button {
  @apply mx-auto uppercase border-2 border-primary text-center text-black font-bold py-2 px-12;
  min-height: 2rem;
}
</style>
