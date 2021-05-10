<i18n lang="yaml">
en:
    title:
    subtitle:
    content:
    button:
    inputEmail:

pt-BR:
    title: Ebook
    subtitle: Grauito
    content: >-
      Clases en inglés o en español, en grupos de clases reducidos por la
      plataforma Zoom, comparte tu hora de clase con otras personas que tienen el
      mismo objetivo que tú. Consulte los horarios disponibles y haz tu primera
      clase gratis.

    button:
    inputEmail:

es:
    title:
    subtitle:
    content:
    button:
    inputEmail:
</i18n>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex items-center justify-center w-full bg-gray-900">
      <img class="object-contain" src="https://res.cloudinary.com/euyome/image/upload/v1620670834/idiomascombasi/Basilia_Santiago_egiuzz.png" alt="">
    </div>

    <div class="px-8 mt-8 text-2xl tracking-wider text-center font-antonio" >
      5 dicas para aprender um Idioma estrangeiro
    </div>
      <p class="px-8 mt-8 font-redhat">
      Neste e-book gratuito eu conto um pouco sobre como eu aprendi português
      do zero na marra!!
      </p>

      <p class="px-8 mt-8 font-redhat">
      Eu vou te contar as 5 dicas que eu pessoalmente considero fundamental
      para o desenvolvimento da fluência com confiança.
      </p>

      <p class="px-8 mt-8 font-redhat">
      Para receber este e-book é muito simples, basta você colocar seu nome e um email válido nos campos
      abaixo e aí eu te envio ele por email :)!
      </p>

      <div class="flex flex-col w-full px-8">
        <input class="flex-grow px-2 py-2 mt-8 border border-black focus:outline-none focus-within:border-8 font-montserrat"
               type="email"
               placeholder="Seu nome"
               @focus="inputFocus"
               />

        <input class="flex-grow px-2 py-2 mt-4 border border-black focus:outline-none focus-within:border-8 font-montserrat"
               type="email"
               placeholder="Seu melhor email"
               @focus="inputFocus"
               />

        <Button class="mt-8">Receber E-Book</Button>
      </div>
      <p class="px-8 mt-8 text-xs text-gray-600 font-redhat">
      Você irá receber meu conteúdo regularmente, sobre várias outras
      dicas. Se por acaso você não estiver interessado(a) em receber este
      tipo de conteúdo, você pode sair a qualquer momento da minha lista de envios.
      </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    inputFocus(a: any) {
      console.log(a);
    },
  },
})
</script>
