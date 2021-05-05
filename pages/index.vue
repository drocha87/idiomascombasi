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

    <ContentSection title="Quem Sou" subtitle="Amo o que eu faço!">
    <Paragraph>
    Sou Colombiana, <Highlight>especialista</Highlight> no ensino de línguas estrangeiras,
    com mais de 10 anos de <Highlight>experiência</Highlight>, pós-graduada
    em inglês e nativa em espanhol.
    </Paragraph>

    <Paragraph>
    Tenho ajudado meus alunos a se desenvolverem com
    <Highlight>confiança</Highlight>, adquirindo
    <Highlight>independência</Highlight> ao se expressarem tanto em inglês
    quanto em espanhol.
    </Paragraph>
    </ContentSection>

    <SectionDivider label="Depoimentos" />
    <section class="flex justify-center py-8 mx-auto md:mb-12">
      <MainContainer>
      <Testemonials />
      </MainContainer>
    </section>

    <SectionDivider label="Español con Basi" />

    <!-- Promotions -->
    <section>
      <a class="md:hidden" href="https://euyo.me/speakniceidiomas/608702ff2dd4910e727747bb" target="_blank">
        <img src="https://res.cloudinary.com/euyome/image/upload/v1619895563/idiomascombasi/conversation-group-banner_ltmnl5.jpg" alt="">
      </a>
      <div class="hidden md:block">
        <SpanishWithBasi />
      </div>
    </section>


    <SectionDivider class="mt-12" label="Estude comigo" />
    <Courses id="courses" />

    <SectionDivider label="Traduções profisionais" />
    <ContentSection title="Traduções" subtitle="Amplie seu público-alvo" button-title="Faça seu Orçamento" url="https://euyo.me/idiomascombasi" >
    <Paragraph>
    <Highlight>Traduções profisionais em inglês e espanhol</Highlight>. Faça
    seu conteúdo chegar a mais pessoas, <Highlight>potencializando os seus
    resultados!</Highlight> Faça um orçamento sem compromisso entrando em
    contato comigo pelo botão abaixo!
    </Paragraph>
    </ContentSection>

    <SectionDivider class="mt-12" label="Grupos" />
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

 /* min-width: 100%;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  text-align: center; */
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
