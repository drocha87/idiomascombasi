<template>
  <div class="testemonial">
    <p>
    {{ content }}
    </p>
    <div class="author">
      - {{ author }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    content: { type: String, required: true },
    author: { type: String, required: true },
  }
})
</script>

<style lang="postcss" scoped>
.testemonial {
  @apply border-2 border-primary px-4 py-4 mx-auto m-2;
  min-width: 300px;
  max-width: 300px;
}

.testemonial p {
  @apply font-redhat text-base text-gray-900;
}

.author {
  @apply font-dancing text-xl text-black text-center mt-4;
}

</style>
