<template>
  <div class="my-12 md:w-1/2 self-center">
    <div class="text-center">
      <div class="gretting">
        olá, eu sou a
      </div>
      <div class="text-center font-dancing text-7xl md:text-8xl ml-12 rotate">
        Basilia!
      </div>
    </div>

    <div class="flex justify-center">
      <div class="description">
        <p class="pr-4 max-w-1/2">
        <Highlight>Especialista</Highlight> no ensino de INGLÊS e ESPANHOL
        </p>
      </div>
    </div>

    <Button class="mt-8" @click="gotoEuyome()">fale comigo</Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    gotoEuyome() {
      window.open('https://euyo.me/speakniceidiomas', '_blank');
    }
  }
})
</script>

<style lang="postcss" scoped>
.gretting {
  @apply text-center text-primary text-2xl font-semibold font-antonio mb-4;
  transform: translateX(-65px);
}

.description {
  position: relative;
  @apply text-right font-antonio font-medium text-3xl
  mt-4 mr-4 ml-4 md:ml-auto mx-auto leading-relaxed tracking-wide;
  padding: 30px 0;
}

.description::after {
  position: absolute;
  content: "";
  height: 100%;
  width: 6px;
  right: 0;
  top: 0;
  @apply bg-primary;
}

.rotate {
  margin-top: -20px;
}
</style>
