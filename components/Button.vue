<template>
  <a v-bind="$attrs" v-on="$listeners">
    <div
      class="min-w-full px-12 py-2 mx-auto text-center text-black uppercase border border-black cursor-pointer hover:border-gray-200 transition-all duration-700 ease-in-out"
      style="min-height: 2rem">
      <div :class="[{'content': true, 'small': small}, borderColor]" >
        <slot></slot>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  inheritAttrs: false,

  props: {
    small: { type: Boolean, default: false },
    borderColor: { type: String, default: 'border-primary' },
  }
})
</script>

<style lang="postcss" scoped>
.content {
  @apply relative leading-8 font-antonio tracking-widest;
}


.content::after {
  @apply text-xl text-black absolute;
  content: ">";
  height: 2rem;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
}

.small {
  @apply text-base;
}
</style>
