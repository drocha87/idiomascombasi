<template>
  <div class="mt-12 md:w-1/2">
    <div class="text-center">
      <div class="gretting">
        <Highlight color="#A7DADC">
        olá, eu sou a
        </Highlight>
      </div>
      <div class="ml-12 text-center font-dancing text-8xl md:text-9xl rotate">
        Basi
      </div>
    </div>

    <div class="mt-12 image">
      <img :src="require('assets/images/Ibasi_black_transparent.png')" alt="Basilia Santiago">
    </div>

    <div class="flex justify-center">
      <div class="description">
        <p class="pr-4 max-w-1/2">
        <Highlight color="#A7DADC">Especialista</Highlight> no ensino de INGLÊS e ESPANHOL
        </p>
      </div>
    </div>


    <Button class="mt-8 mb-12" border-color="border-primary" @click="gotoEuyome()">fale comigo</Button>
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
  @apply text-center text-black text-2xl font-antonio mb-4;
  transform: translateX(-65px);
}

.description {
  position: relative;
  @apply text-right font-antonio font-medium text-3xl mt-8
  mr-4 ml-4 md:ml-auto mx-auto leading-relaxed tracking-wide;
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
  transform: rotate(-2.5deg);
}

.image {
  @apply mx-auto md:hidden;
  position: relative;
}

</style>
