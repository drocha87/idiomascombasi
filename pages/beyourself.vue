<i18n lang="yaml">
en:
  title:
  subtitle:
  content:
  button:
  inputEmail:

pt-BR:
  title: Be Yourself
  subtitle: Aulas Gratuitas
  contentOne: >-
    Segundo semestre do ano começando, e pra te ajudar a tirar do papel sua meta
    de falar Inglês com confiança ainda em 2021, estou liberando duas aulas grátis
    que será um preview da minha próxima turma de <strong>Inglês com Confiança para iniciantes</strong>.

  contentTwo: >-
    As aulas serão nos dias <strong>22 e 29 de junho às 19:30 horário de Brasília</strong>.
    Reserve sua vaga preenchendo o formulário abaixo. See you!

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
        src="https://res.cloudinary.com/euyome/image/upload/v1622502694/idiomascombasi/English_with_Basi_gkbhet.jpg"
        alt=""
      />
    </div>

    <ContentSection :title="$t('title')" :subtitle="$t('subtitle')" left>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <Paragraph v-html="$t('contentOne')"> </Paragraph>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <Paragraph v-html="$t('contentTwo')"> </Paragraph>
    </ContentSection>

    <section class="w-full">
      <MainContainer class="mx-auto">
        <div class="hidden md:block">
          <img
            class="object-contain"
            src="https://res.cloudinary.com/euyome/image/upload/v1622502694/idiomascombasi/English_with_Basi_gkbhet.jpg"
            alt=""
          />
        </div>
        <BeyourselfForm class="md:min-w-1/2 md:max-w-1/2" />
      </MainContainer>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
