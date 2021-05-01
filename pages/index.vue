<template>
  <div class="relative">

    <section class="main-container">
      <a href="https://euyo.me/speakniceidiomas" target="_blank">
        <div class="detail-right">redes sociais</div>
      </a>
      <div class="detail-left">
        basilia santiago ©
        <div class="w-24 h-1 mr-12 bg-white "></div>
      </div>
      <MainContainer>
      <HeroLeftPanel class="hidden md:block"/>
      <HeroRightPanel class="md:self-center"/>
      </MainContainer>
    </section>

    <!-- Testemonials -->
    <section class="flex justify-center py-8 bg-gray-900 md:py-24">
      <MainContainer>
      <Testemonial
        content="Com as aulas da Basilia eu melhorei meu rendimento no trabalho, conseguindo ler materiais em inglês e efetuar negociações com pessoas que falam o idioma."
        author="Diego Guimarães"
        bio="CEO Nines Tecnologia"
        />

      <Testemonial
        content="Tenho feito aulas com a Basi e tenho me desenvolvido em um ritmo muito acelerado, a dinâmica dela é sensacional"
        author="Diego Rocha"
        bio="Euyo.me Founder"
        />
      </MainContainer>
    </section>

    <!-- Promotions -->
    <section>
      <a class="md:hidden" href="https://euyo.me/speakniceidiomas/608702ff2dd4910e727747bb" target="_blank">
        <img src="https://res.cloudinary.com/euyome/image/upload/v1619895563/idiomascombasi/conversation-group-banner_ltmnl5.jpg" alt="">
      </a>
      <div class="hidden md:block">
        <SpanishWithBasi />
      </div>
    </section>

    <section class="relative flex justify-center mt-8">
      <ContainerRow>
      <Title>
        Quem sou
      </Title>
      <p class="px-8 tracking-wide font-redhat md:p-0">
      Sou <Highlight>especialista</Highlight> no ensino de línguas estrangeiras
      com mais de 10 anos de <Highlight>experiência</Highlight>, pós-graduada
      em inglês e nativa em espanhol.
      </p>

      <p class="px-8 mt-4 tracking-wide font-redhat md:p-0">
      Ensino <Highlight>espanhol e inglês</Highlight> a pessoas que sabem que
      falar um idioma estrangeiro nos dias de hoje traz muitas vantagens a
      nível pessoal e profissional. Ajudando meus alunos a ganharem
      <Highlight>confiança</Highlight> e a se comunicarem melhor.
      </p>
      </ContainerRow>
    </section>

    <section class="relative flex justify-center mt-12">
      <ContainerRow>
      <Title>
        Aprenda com Basi
      </Title>
      <p class="px-8 tracking-wide font-redhat md:p-0">
      Atualmente tenho trabalhado com <Highlight>aulas online</Highlight> VIP
      ou em grupo, e tenho certeza que eu tenho as qualidades necessárias para
      te ajudar a dar o <Highlight>próximo</Highlight> <Highlight>passo</Highlight> no desenvolvimento
      e na confiança do seu inglês ou espanhol!!
      </p>

      <p class="px-8 mt-4 tracking-wide font-redhat md:p-0">
      Vem comigo na aventura de se <Highlight>comunicar como você quer</Highlight>!
      </p>
      <div class="w-64 mx-auto">
        <Button class="mt-14 justify-self-center" @click="gotoEuyome()">estude comigo</Button>
      </div>
      </ContainerRow>
    </section>

    <section class="relative flex justify-center mt-12">
      <ContainerRow>
      <Title>
        Grupo Telegram
      </Title>
      <p class="px-8 tracking-wide font-redhat md:p-0">
      Se você quer receber conteúdo gratuito e manter contato ativo com o
      idioma <Highlight>#INGLÊS</Highlight> ou
      <Highlight>#ESPANHOL</Highlight>, te faço um convite para participar do
      meu grupo no Telegram!

      Além de receber dicas e ter contato com a língua você também pode fazer
      quizzes, escutar a áudios e muito mais!
      </p>
      <div class="flex flex-col mx-auto mt-14 md:flex-row md:justify-between max-w-3/4 min-w-3/4 ">
        <div class="flex-grow">
          <Button @click="goto('https://euyo.me/speakniceidiomas/608462842dd4910e7277457a')">grupo em espanhol</Button>
        </div>
        <div class="hidden w-32 md:block"></div>
        <div class="flex-grow mt-8 md:mt-0">
          <Button class="block" @click="goto('https://euyo.me/speakniceidiomas/60005f5857eb320017134754')">grupo em inglês</Button>
        </div>
      </div>
      </ContainerRow>
    </section>
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
            'https://res.cloudinary.com/euyome/image/upload/v1619704120/idiomascombasi/basi_avatar_hfx2df.png',
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
  leading-10 transform -rotate-90 top-1/2 -right-16 border-2 border-black;
}

.detail-left{
  @apply absolute hidden md:block bg-transparent font-antonio tracking-widest text-xs uppercase
  leading-10 transform -rotate-90 top-3/4 -left-12;
}
</style>
