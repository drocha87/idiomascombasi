<i18n lang="yaml">
en:
  title: Spanish Conversation Group

  content: >-
    Be part of my newest Spanish conversation group, Español con Basi. Live
    classes, every Saturday on Zoom. ¡Sí, tú puedes hablar español!

  button: Learn More

pt-BR:
  title: Grupo de Conversação

  content: >-
    Faça parte do meu novo grupo de conversação, Español con
    Basi. São aulas ao vivo, todos os sábados comigo, pela
    plataforma ZOOM. ¡Sí, tú puedes hablar español!

  button: Saiba Mais

es:
  title: Grupo de conversación

  content: >-
    Haga parte de mi nuevo grupo de conversación, Español con Basi. Son clases
    en vivo, todos los sábados por la plataforma Zoom. ¡Sí, tú puedes hablar
    español!

  button: Sepa Más
</i18n>


<template>
  <div class="wrapper">
    <div class="flex justify-start flex-grow mx-auto align-center max-w-screen-lg">
      <div class="flex flex-col justify-center max-w-1/2">
        <p class="mb-8 text-5xl font-bold font-antonio">
        {{ $t('title') }}
        </p>
        <p class="text-base tracking-wider text-gray-800 font-redhat font-regular">
        {{ $t('content') }}
        </p>
        <div class="w-64 mx-auto">
          <Button class="block mx-auto mt-12" href="https://euyo.me/idiomascombasi/60927b525bb2cb0e4291c6a5" target="_blank">
            {{ $t('button') }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply w-full bg-contain bg-no-repeat bg-right flex;
  background-image: url("https://res.cloudinary.com/euyome/image/upload/v1620066946/idiomascombasi/spanish_with_basi_banner_big_screen_mmqgpg.jpg");
  min-height: 400px;
  max-height: 400px;
}

</style>
