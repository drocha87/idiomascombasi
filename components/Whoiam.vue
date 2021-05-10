<i18n lang="yaml">
en:
  title: Who I am
  subtitle: I love what I do

  pOne: >-
    I’m Colombian, a Spanish teacher and a specialist in teaching English as a
    foreign language with more than 10 years of experience.

  pTwo: >-
    I’ve helped my students to build confidence and acquire independence to
    communicate fluently in English and Spanish.

pt-BR:
  title: Quem sou
  subtitle: Amo o que eu faço!

  pOne: >-
    Sou Colombiana, especialista no ensino de línguas estrangeiras, com mais de
    10 anos de experiência, pós-graduada em inglês e nativa em espanhol.

  pTwo: >-
    Tenho ajudado meus alunos a se desenvolverem com confiança, adquirindo
    independência ao se expressarem tanto em inglês quanto em espanhol.

es:
  title: Quién soy
  subtitle: Amo lo que hago

  pOne: >-
    Soy Colombiana, licenciada en idiomas extranjeros con más de 10 años de
    experiencia, especialista en la enseñanza del inglés.

  pTwo: >-
    He ayudado a mis alumnos a adquirir confianza, desarrollando independencia
    al expresarse tanto en Inglés como en Español.
</i18n>

<template>
    <ContentSection :title="$t('title')" :subtitle="$t('subtitle')">
    <Paragraph>
    {{ $t('pOne') }}
    </Paragraph>
    <Paragraph>
    {{ $t('pTwo') }}
    </Paragraph>
    </ContentSection>
</template>

