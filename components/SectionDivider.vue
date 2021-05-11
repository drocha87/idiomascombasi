<template>
  <div class="hidden md:block">
    <div class="flex items-center">
      <div
        v-if="label"
        class="ml-12 mr-32 text-lg tracking-widest text-gold font-antonio"
      >
        {{ label }}
      </div>
      <div class="flex-grow bg-gray-200" style="height: 1px"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: { type: String, required: false },
  },
})
</script>
