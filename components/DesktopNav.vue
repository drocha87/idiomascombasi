<i18n lang="yaml">
en:
  language: Language
  back: Back
  home: Home
  courses: Courses
  groups: Groups
  close: Close
  ebook: Ebook

pt-BR:
  language: Idioma
  back: Voltar
  home: Home
  courses: Cursos
  groups: Grupos
  close: Fechar
  ebook: Ebook

es:
  language: Idioma
  back: Regresar
  home: Home
  courses: Cursos
  groups: Grupos
  close: Cerrar
  ebook: Ebook
</i18n>


<template>
  <nav class="fixed z-50 w-screen h-16 bg-white font-antonio">
    <!-- overlay -->
    <div class="fixed left-0 w-screen h-screen bg-gold top-16 opacity-20" :class="{'hidden': !langActive}" @click="langActive = false">
    </div>

    <div class="flex items-center justify-between h-16 px-24">
      <div class="text-4xl font-bold tracking-widest uppercase select-none font-montserrat">
        <h4>B.</h4>
      </div>

      <ul class="flex items-center justify-around tracking-wider select-none min-w-1/2">
        <li v-for="link in links" :key="link.label" class="text-black">
          <nuxt-link :to="localePath(link.to)" @click.native="langActive = false">
            {{ $t(link.label) }}
          </nuxt-link>
        </li>

        <li class="cursor-pointer" @click="langActive = !langActive">
          <div class="text-sm">
            {{ $t('language') }}
          </div>
          <div class="text-xs font-medium tracking-wide text-gray-600 font-montserrat">
            {{ localeName }}
          </div>
        </li>
      </ul>
    </div>

    <ul class="fixed right-0 z-50 flex flex-col w-1/4 h-screen pt-8 bg-white select-none top-16 transform transition duration-200 ease-in-out"
        :class="{'translate-x-0 h-screen flex': langActive, 'translate-x-full': !langActive}">

      <li v-for="locale in $i18n.locales" :key="locale.code" class="opacity-0" :class="{'anime': langActive}">
        <div class="px-12 py-2 text-xl cursor-pointer"
             :class="{'text-black': locale.name === localeName, 'text-gray-600': locale.name !== localeName}"
             @click="() => { $i18n.setLocale(locale.code); langActive = false; }">
            {{ locale.name }}
          </div>
      </li>

      <li class="mt-8 opacity-0" :class="{'anime': langActive}">
        <div class="px-12 py-2 text-xl cursor-pointer" @click="langActive = !langActive">
          {{ $t('close') }}
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      langActive: false,
    }
  },

  computed: {
    links(): any[] {
      return this.$store.state.links;
    },

    localeName(): string {
      const l = (this.$i18n.locales as any).find((el: any) => el.code == this.$i18n.locale);
      return l.name;
    },
  },
})
</script>

<style lang="postcss" scoped>
.anime {
  animation: navLinkFade 0.3s ease forwards 0.2s;
}

@keyframes navLinkFade {
  0% {
    @apply opacity-0;
    transform: translateX(50px);
  }

  100% {
    @apply opacity-100;
    transform: translateX(0px);
  }
}
</style>
