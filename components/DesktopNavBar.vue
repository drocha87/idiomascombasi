
<template>
  <div class="relative w-full h-16 bg-white">
    <div class="flex items-center justify-center h-16 mx-auto max-w-screen-lg">
      <!-- <div class="flex-grow text-2xl font-bold text-left font-antonio">B.</div> -->
      <a class="h-12 px-4 text-center text-gray-700 w-36 transition duration-700 ease-in-out" href="/#courses">
        <div class="text-base tracking-widest uppercase font-antonio" style="line-height: 3rem;">{{ $t('course') }}</div>
      </a>

      <!-- <a class="h-12 px-4 text-center text-gray-700 w-36 hover:text-black hover:border-b transition duration-700 ease-in-out" href="#"> -->
      <!--   <div class="text-base tracking-widest uppercase font-antonio" style="line-height: 3rem;">Preços</div> -->
      <!-- </a> -->

      <a class="h-12 px-4 text-center text-gray-700 w-36 hover:text-black transition duration-700 ease-in-out" href="/#telegram">
        <div class="text-base tracking-widest uppercase font-antonio" style="line-height: 3rem;">{{ $t('groups') }}</div>
      </a>

    </div>
  </div>
</template>

<style lang="postcss" scoped>
a:hover {
  @apply border-b text-black border-black;
}
</style>

<i18n lang="yaml">
en:
  course: "Course"
  groups: "Groups"

pt-BR:
  course: "Curso"
  groups: "Grupos"

es:
  course: "Curso"
  groups: "Grupos"
</i18n>
