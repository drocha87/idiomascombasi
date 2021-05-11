<i18n lang="yaml">
en:
  title:
  subtitle:
  content:
  button:
  inputEmail:

pt-BR:
  title: Aprender Idiomas
  subtitle: 5 Dicas para
  content: >-
    Neste e-book gratuito eu conto um pouco sobre como eu aprendi português
    do zero na marra!! <br><br>
    Eu vou te contar as 5 dicas que eu pessoalmente considero fundamental
    para o desenvolvimento da fluência com confiança. <br><br>
    Para receber este e-book é muito simples, basta você colocar seu nome e um email válido nos campos
    abaixo e aí eu te envio ele por email :)

  conditions: >-
    Você irá receber meu conteúdo regularmente, sobre várias outras
    dicas. Se por acaso você não estiver interessado(a) em receber este
    tipo de conteúdo, você pode sair a qualquer momento da minha lista de envios.

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
  <div
    class="flex flex-col items-center justify-center md:max-w-screen-lg md:mx-auto"
  >
    <div class="flex items-center justify-center w-full bg-gray-900 md:hidden">
      <img
        class="object-contain"
        src="https://res.cloudinary.com/euyome/image/upload/v1620670834/idiomascombasi/Basilia_Santiago_egiuzz.png"
        alt=""
      />
    </div>

    <ContentSection :title="$t('title')" :subtitle="$t('subtitle')" left>
      <Paragraph v-html="$t('content')"></Paragraph>
    </ContentSection>

    <div class="md:px-8 md:flex md:items-center">
      <div
        class="flex items-center justify-center hidden w-full bg-gray-900 md:block"
      >
        <img
          class="object-contain"
          src="https://res.cloudinary.com/euyome/image/upload/v1620670834/idiomascombasi/Basilia_Santiago_egiuzz.png"
          alt=""
        />
      </div>

      <div class="flex flex-col w-full px-8">
        <input
          class="px-2 py-2 border border-gray-400 focus:outline-none focus-within:border-black font-montserrat"
          type="email"
          placeholder="Seu nome"
          @focus="inputFocus"
        />

        <input
          class="px-2 py-2 mt-4 border border-gray-400 focus:outline-none focus-within:border-black font-montserrat"
          type="email"
          placeholder="Seu melhor email"
          @focus="inputFocus"
        />

        <Button class="mt-8">Receber E-Book</Button>
        <p class="mt-8 text-xs text-gray-600 font-redhat">
          {{ $t('conditions') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    inputFocus(a: any) {
      console.log(a)
    },
  },
})
</script>
