<template>
  <section class="relative flex justify-center py-12 md:py-28">
    <ContainerRow>
      <div class="md:hidden">
        <Title>
          {{ title }}
        </Title>
      </div>

      <div class="flex items-center" :class="{ 'md:flex-row-reverse': left }">
        <div class="min-w-1/2">
          <slot />
          <div v-if="buttonTitle" class="w-64 mx-auto mt-16">
            <Button :href="url" target="_blank">{{ buttonTitle }}</Button>
          </div>
        </div>
        <div
          class="flex flex-col flex-grow hidden min-w-1/2 md:block space-y-8"
        >
          <div>
            <p
              class="text-5xl text-gray-300 font-antonio"
              :class="{ 'text-right': !left }"
            >
              {{ subtitle }}
            </p>
            <div
              class="w-32 h-2 mt-2 bg-gray-200 opacity-40"
              :class="{ 'ml-auto': !left }"
            ></div>
          </div>

          <div
            class="flex items-center justify-end text-5xl font-bold font-antonio"
            :class="{ 'md:flex-row-reverse': left }"
          >
            <div
              class="w-16 h-1 bg-red-500"
              :class="{ 'ml-8': left, 'mr-8': !left }"
            ></div>
            <div>
              {{ title }}
            </div>
          </div>
        </div>
      </div>
    </ContainerRow>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    url: { type: String, required: false },
    buttonTitle: { type: String, required: false },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    left: { type: Boolean, default: false },
  },
})
</script>
