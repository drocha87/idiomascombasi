<template>
  <div class="wrapper">
    <div class="flex justify-start flex-grow mx-auto align-center max-w-screen-lg">
      <div class="flex flex-col justify-center max-w-1/2">
        <p class="mb-8 text-5xl font-bold font-antonio">
        Grupo de Conversação
        </p>
        <p class="text-base tracking-wider text-gray-900 font-redhat font-regular">
        Faça parte do meu nove grupo de conversação, Español con
        Basi. São aulas ao vivo, todos os sábados comigo, pela
        plataforma ZOOM. ¡Sí, tú puedes hablar español!
        </p>
        <div class="w-64 mx-auto">
          <Button class="block mx-auto mt-12">Saiba Mais</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply w-full bg-contain bg-no-repeat bg-right flex;
  background-image: url("assets/images/spanish_with_basi_banner_big_screen.jpg");
  min-height: 400px;
  max-height: 400px;
}

</style>
