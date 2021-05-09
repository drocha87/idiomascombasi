<i18n lang="yaml">
en:
  labelOne: Testemonials
  labelTwo: Español con Basi
  labelThree: Learn with me
  labelFour: Professional translations
  labelFive: Groups

pt-BR:
  labelOne: Depoimentos
  labelTwo: Español con Basi
  labelThree: Estude comigo
  labelFour: Traduções profisionais
  labelFive: Grupos

es:
  labelOne: Testimonios
  labelTwo: Español con Basi
  labelThree: Estudia Conmigo
  labelFour: Traducciones profesionales
  labelFive: Grupos
</i18n>

<template>
  <div class="relative">
    <section class="main-container">
      <div class="detail-left">
        basilia santiago ©
        <div class="w-24 h-1 mr-12 bg-white "></div>
      </div>
      <MainContainer>
      <HeroRightPanel class="md:ml-auto md:self-center"/>
      </MainContainer>
    </section>

    <Whoiam />

    <SectionDivider :label="$t('labelOne')" />
    <section class="flex justify-center py-8 mx-auto md:mb-12">
      <MainContainer>
      <Testemonials />
      </MainContainer>
    </section>

    <SectionDivider :label="$t('labelTwo')" />

    <!-- Promotions -->
    <section>
      <a class="md:hidden" href="https://euyo.me/speakniceidiomas/608702ff2dd4910e727747bb" target="_blank">
        <img src="https://res.cloudinary.com/euyome/image/upload/v1619895563/idiomascombasi/conversation-group-banner_ltmnl5.jpg" alt="">
      </a>
      <div class="hidden md:block">
        <SpanishWithBasi />
      </div>
    </section>

    <SectionDivider class="mt-12" :label="$t('labelThree')" />
    <Courses id="courses" />

    <SectionDivider :label="$t('labelFour')" />
    <Translations />

    <SectionDivider class="mt-12" :label="$t('labelFive')" />
    <TelegramGroups id="telegram" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    goto(url: string) {
      window.open(url, '_blank');
    },

    gotoEuyome() {
      window.open('https://euyo.me/speakniceidiomas/6089dd252dd4910e72774c63', '_blank');
    }
  },

  head() {
    const title = 'Idiomas com Basi';
    const description = 'Olá, eu sou a Basilia especialista em Inglês e Espanhol';

    return {
      title,

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://idiomascombasi.com.br',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://res.cloudinary.com/euyome/image/upload/v1620069177/idiomascombasi/og_image_waqy0a.jpg',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Basilia Santiago',
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '500',
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '500',
        },
      ],
    };
  },
})
</script>

<style lang="postcss">
.main-container {
  @apply m-0 relative flex min-w-full justify-center text-center  md:bg-hero-image md:bg-contain md:bg-no-repeat md:bg-left;
  min-height: 80vh;
}

.detail-right{
  @apply fixed hidden md:block bg-white px-12 font-antonio tracking-widest
  leading-10 transform -rotate-90 top-1/2 -right-16 border border-black;
}

.detail-left{
  @apply absolute hidden md:block bg-transparent font-antonio tracking-widest text-xs uppercase
  leading-10 transform -rotate-90 top-3/4 -left-12;
}
</style>
