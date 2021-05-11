<template>
  <div>
    <BaseInput type="email" v-bind="$attrs" v-on="inputListeners" />
    <span>{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  inheritAttrs: false,

  props: {
    value: { type: String, required: true },
    // type: { type: String, required: true },
  },

  data() {
    return {
      errorMessage: '',
      isValid: true,
    }
  },

  computed: {
    inputListeners(): any {
      const vm = this
      return Object.assign({}, this.$listeners, {
        input(event: any) {
          vm.$emit('input', event.target.value)
          vm.isValid = event.target.validity.valid
        },
      })
    },
  },
})
</script>
