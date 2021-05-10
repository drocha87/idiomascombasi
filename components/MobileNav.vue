<i18n lang="yaml">
en:
  language: Language
  back: Back
  home: Home
  courses: Courses
  groups: Groups

pt-BR:
  language: Idioma
  back: Voltar
  home: Home
  courses: Cursos
  groups: Grupos

es:
  language: Idioma
  back: Regresar
  home: Home
  courses: Cursos
  groups: Grupos
</i18n>


<template>
  <nav class="fixed z-40 flex items-center justify-between w-screen h-16 px-8 mx-auto bg-white min-w-screen max-w-screen font-antonio">
    <div class="text-4xl font-bold tracking-widest uppercase font-montserrat">
      <h4>B.</h4>
    </div>

    <!-- overlay -->
    <div class="fixed right-0 w-screen h-screen bg-black top-16 transform transition-all duration-200 ease-in-out opacity-20"
      :class="{'translate-x-0 h-screen flex': active, 'translate-x-full': !active}"
      @click="toggleNav()">
    </div>

    <ul class="fixed right-0 z-50 flex flex-col w-3/4 h-screen pt-8 bg-white top-16 transform transition-all duration-200 ease-in-out"
        :class="{'translate-x-0 h-screen flex': active, 'translate-x-full': !active}">

      <li v-for="link in links" :key="link.label" class="text-black opacity-0" :class="{'anime': active}">
        <nuxt-link :to="localePath(link.to)" @click.native="toggleNav()">
          <div class="px-12 py-2">
            {{ link.label }}
          </div>
        </nuxt-link>
      </li>

      <li class="flex flex-col justify-end flex-grow mb-24 opacity-0" :class="{'anime': active}" @click="langActive = !langActive">
        <div class="px-12 py-2">
          <div>
            {{ $t('language') }}
          </div>
          <div class="text-xs font-medium tracking-wide text-gray-600 font-montserrat">
            {{ localeName }}
          </div>
        </div>
      </li>
    </ul>

    <ul class="fixed right-0 z-50 flex flex-col w-3/4 h-screen pt-8 bg-white top-16 transform transition-all duration-200 ease-in-out"
        :class="{'translate-x-0 h-screen flex': langActive, 'translate-x-full': !langActive}">

      <li v-for="locale in $i18n.locales" :key="locale.code" class="text-black opacity-0" :class="{'anime': active}">
        <div class="px-12 py-2"
             :class="{'text-black': locale.name === localeName, 'text-gray-600': locale.name !== localeName}"
             @click="$i18n.setLocale(locale.code)">
            {{ locale.name }}
          </div>
      </li>

      <li class="flex flex-col justify-end flex-grow mb-24">
        <div class="px-12 py-2" @click="langActive = !langActive">
          <div>
            {{ $t('back') }}
          </div>
        </div>
      </li>
    </ul>

    <!-- burguer menu -->
    <div class="relative flex flex-col justify-around w-6 h-6 cursor-pointer md:hidden" @click="toggleNav()">
      <div class="absolute top-0 w-full h-1 bg-gold transition-all duration-500 ease-in-out"
           :class="{'transform top-1/2 -translate-y-1/2 -rotate-45': active}"></div>
      <div class="w-full h-1 bg-gold transition-all duration-500 delay-300 ease-out"
           :class="{'opacity-0': active}"></div>
      <div class="absolute bottom-0 w-full h-1 bg-gold transition-all duration-500 ease-in-out"
           :class="{'transform bottom-1/2 translate-y-1/2 rotate-45': active}"></div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      active: false,
      langActive: false,
    }
  },

  computed: {
    links(): any[] {
      return [
        {
          label: this.$t('home'),
          to: '/',
        },
        {
          label: this.$t('courses'),
          to: '/#courses',
        },
        {
          label: this.$t('groups'),
          to: '/#telegram',
        },
      ]
    },

    localeName(): string {
      const l = (this.$i18n.locales as any).find((el: any) => el.code == this.$i18n.locale);
      return l.name;
    },
  },

  methods: {
    toggleNav() {
      this.active = !this.active;
      this.langActive = false;
    },

    animation(index: number): string {
      const test = `animation: navLinkFade 2.5s ease forwards ${index / 7 + 2}s`
      console.log(test);
      return test;
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
