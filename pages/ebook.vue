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
  contentOne: >-
    Neste e-book gratuito eu conto um pouquinho sobre a minha trajetória quando me mudei
    para o Brasil, e quais as estratégias que eu usei para aprender português na marra, do zero!

  contentTwo: >-
    Eu vou te contar as 5 dicas que eu pessoalmente considero fundamental
    para o desenvolvimento da fluência com confiança.

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
    <div class="flex items-center justify-center w-full md:hidden">
      <img
        class="object-contain"
        src="https://res.cloudinary.com/euyome/image/upload/v1620670834/idiomascombasi/Basilia_Santiago_egiuzz.png"
        alt=""
      />
    </div>

    <ContentSection :title="$t('title')" :subtitle="$t('subtitle')" left>
      <Paragraph>
        {{ $t('contentOne') }} <br />
        <br />
        {{ $t('contentTwo') }} <br />
      </Paragraph>
    </ContentSection>

    <section class="w-full">
      <MainContainer class="mx-auto">
        <div class="hidden md:block">
          <img
            class="object-contain"
            src="https://res.cloudinary.com/euyome/image/upload/v1620670834/idiomascombasi/Basilia_Santiago_egiuzz.png"
            alt=""
          />
        </div>
        <EbookForm />
      </MainContainer>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
