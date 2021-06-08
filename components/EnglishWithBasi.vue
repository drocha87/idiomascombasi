<i18n lang="yaml">
en:
  title: English Conversation Group

  content: >-
    Be part of my newest English conversation group, English with Basi. Live
    classes, every Saturday on Zoom. ¡Sí, tú puedes hablar español!

  button: Learn More

pt-BR:
  title: Turma de Inglês

  content: >-
    Faça parte da minha nova turma de Inglês para iniciantes, English with Basi.
    São aulas ao vivo, todos as terças comigo, pela
    plataforma ZOOM. Yes, you can speak English!

  button: Saiba Mais

es:
  title: Grupo de conversación

  content: >-
    Haz parte de mi nuevo grupo de conversación, English with Basi. Son clases
    en vivo, todos los sábados por la plataforma Zoom. ¡Sí, tú puedes hablar
    español!

  button: Conoce Más
</i18n>

<template>
  <div class="wrapper">
    <div
      class="flex justify-start flex-grow mx-auto align-center max-w-screen-lg"
    >
      <div class="flex flex-col justify-center max-w-1/2">
        <p class="mb-8 text-5xl font-bold font-antonio">
          {{ $t('title') }}
        </p>
        <p
          class="
            text-base
            tracking-wider
            text-gray-800
            font-redhat font-regular
          "
        >
          {{ $t('content') }}
        </p>
        <div class="w-64 mx-auto">
          <Button
            class="block mx-auto mt-12"
            href="https://euyo.me/idiomascombasi/60bf43095e9be00e4783a4ef"
            target="_blank"
          >
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
  background-image: url('https://res.cloudinary.com/euyome/image/upload/v1620066946/idiomascombasi/spanish_with_basi_banner_big_screen_mmqgpg.jpg');
  min-height: 400px;
  max-height: 400px;
}
</style>
