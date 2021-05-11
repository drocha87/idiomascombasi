<i18n lang="yaml">
en:
  gretting: Hey, I'm
  message: I help you speak ENGLISH and SPANISH confidently
  button: Call me

pt-BR:
  gretting: Olá, eu sou a
  message: Te ajudo a falar INGLÊS e ESPANHOL com confiança
  button: fale comigo

es:
  gretting: Hola, yo soy
  message: Te ayudo a hablar INGLÉS y ESPAÑOL con confianza
  button: Contáctame
</i18n>

<template>
  <div class="mt-12 md:w-1/2">
    <div class="text-center">
      <div class="gretting">
        {{ $t('gretting') }}
      </div>
      <div
        class="
          ml-12
          -mt-4
          text-center
          md:mt-0
          font-dancing
          text-8xl
          md:text-9xl
          rotate
        "
      >
        Basi
      </div>
    </div>

    <div class="relative mx-auto mt-8 md:hidden">
      <img
        src="https://res.cloudinary.com/euyome/image/upload/v1619895616/idiomascombasi/basi_hero_mobile_hef21a.jpg"
        alt="Basilia Santiago"
      />
    </div>

    <div class="description">
      <p class="ml-auto mr-4 max-w-3/4">
        {{ $t('message') }}
      </p>
    </div>

    <div class="w-64 mx-auto my-12">
      <Button href="https://euyo.me/idiomascombasi" target="_blank">{{
        $t('button')
      }}</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    gotoEuyome() {
      window.open('', '_blank')
    },
  },
})
</script>

<style lang="postcss" scoped>
.gretting {
  @apply text-center text-black text-3xl font-antonio mb-5 -ml-24;
}

.description {
  @apply relative text-right font-antonio font-medium text-3xl mt-12
  md:ml-auto leading-relaxed tracking-wide mr-12 md:mr-0;
}

.description::after {
  @apply absolute bg-gold h-full;
  content: '';
  width: 6px;
  right: 0;
  top: 0;
}
</style>
