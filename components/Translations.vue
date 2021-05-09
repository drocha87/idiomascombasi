<i18n lang="yaml">
en:
  title: Translations
  subtitle: Expand your target audience
  button: Make a free quote

  content: >-
    Professional translations in English and Spanish. Make your content reach
    more people, boosting your results. Make a free quote, contact me by
    clicking on the button below! 

pt-BR:
  title: Traduções
  subtitle: Amplie seu público-alvo
  button: Faça seu Orçamento

  content: >-
    Traduções profisionais em inglês e espanhol. Faça seu conteúdo chegar a
    mais pessoas, potencializando os seus resultados! Faça um orçamento sem
    compromisso entrando em contato comigo pelo botão abaixo!

es:
  title: Traducciones
  subtitle: Amplíe su público alvo
  button: cotiza aquí

  content: >-
    Traducciones profesionales en Inglés y Español. Haz que tu contenido llegue a
    más personas, potencializando tus resultados. ¡Haz una cotización sin
    compromiso, entra en contacto conmigo clicando en el botón de abajo! 
</i18n>

<template>
  <ContentSection :title="$t('title')" :subtitle="$t('subtitle')" :button-title="$t('button')" url="https://euyo.me/idiomascombasi" >
  <Paragraph>
  {{ $t('content') }}
  </Paragraph>
  </ContentSection>
</template>
