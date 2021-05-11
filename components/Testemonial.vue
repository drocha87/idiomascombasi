<i18n lang="yaml">
en:

pt-BR:

es:
</i18n>

<template>
  <div class="relative flex flex-col testemonial">
    <div class="quote">"</div>
    <p class="flex-grow px-8 py-8 text-sm text-gray-900 font-redhat">
      {{ content }}
    </p>
    <div class="w-full bg-gray-300" style="height: 1px"></div>
    <div class="py-4 text-lg text-center text-black text-gray-700 font-antonio">
      <p>
        {{ author }}
      </p>
      <p class="text-xs text-center text-gray-600 font-redhat">{{ bio }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    content: { type: String, required: true },
    author: { type: String, required: true },
    bio: { type: String, required: true },
  },
})
</script>

<style lang="postcss" scoped>
.testemonial {
  @apply mx-auto m-2 bg-gray-50 rounded-lg;
  min-width: 300px;
  max-width: 300px;
}

.quote {
  @apply absolute font-antonio text-9xl text-yellow-500 opacity-20 inset-3;
}
</style>
