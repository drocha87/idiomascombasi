<template>
  <div class="relative">

    <section class="main-container">
      <div class="detail-right"></div>
      <MainContainer>
      <HeroLeftPanel />
      <HeroRightPanel />
      </MainContainer>
    </section>

    <section class="relative flex justify-center mb-12">
      <div class="detail-middle"></div>
      <ContainerRow>
      <Title>
        Quem sou
      </Title>
      <p class="px-8 font-redhat tracking-wide">
      Sou <Highlight>especialista</Highlight> no ensino de línguas estrangeiras
      com mais de 10 anos de <Highlight>experiência</Highlight>, pós-graduada
      em inglês e nativa em espanhol.
      </p>

      <p class="px-8 font-redhat tracking-wide mt-4">
      Ensino <Highlight>espanhol e inglês</Highlight> a pessoas que sabem que
      falar um idioma estrangeiro nos dias de hoje traz muitas vantagens a
      nível pessoal e profissional. Ajudando meus alunos a ganharem
      <Highlight>confiança</Highlight> e a se comunicarem melhor.
      </p>


      <Title class="mt-12">
        Aprenda com Basi
      </Title>
      <p class="px-8 font-redhat tracking-wide">
      Atualmente tenho trabalhado com <Highlight>aulas online</Highlight> VIP
      ou em grupo, e tenho certeza que eu tenho as qualidades necessárias para
      te ajudar a dar o <Highlight>próximo</Highlight> <Highlight>passo</Highlight> no desenvolvimento
      e na confiança do seu inglês ou espanhol!!
      </p>

      <p class="px-8 font-redhat tracking-wide mt-4">
      Vem comigo na aventura de se <Highlight>comunicar como você quer</Highlight>!
      </p>
      <Button class="mt-8 mx-auto" @click="gotoEuyome()">estude comigo</Button>
      </ContainerRow>
    </section>

    <!-- Testemonials -->
    <section class="flex justify-center mb-24">
      <MainContainer>
      <Testemonial
        content="Com as aulas da Basilia eu melhorei meu rendimento no trabalho, conseguindo ler materiais em inglês e efetuar negociações com pessoas que falam o idioma."
        author="Diego Guimarães"
        />

      <Testemonial
        content="Tenho feito aulas com a Basi e tenho me desenvolvido em um ritmo muito acelerado, a dinâmica dela é sensacional"
        author="Diego Rocha"
        />
      </MainContainer>
    </section>

    <!-- Connect with me -->
    <!-- <section class="flex justify-center mb-24"> -->
    <!--   <ContainerRow> -->
    <!--   <Title> -->
    <!--     Redes sociais -->
    <!--   </Title> -->
    <!--   </ContainerRow> -->
    <!-- </section> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    gotoEuyome() {
      window.open('https://euyo.me/speakniceidiomas/6089dd252dd4910e72774c63', '_blank');
    }
  }
})
</script>

<style lang="postcss">
.main-container {
  @apply relative flex;

  margin: 0;
  min-width: 100%;
  min-height: 90vh;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  text-align: center;
}

.detail-right{
  @apply hidden md:block;

  position: absolute;
  background-image: url("assets/images/section-02-about-right-art-image0.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  right: 0;
  width: 162px;
  height: 196px;
}

.detail-middle{
  @apply hidden md:block;

  position: absolute;
  background-image: url("assets/images/blog_section_3_2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  top: 0;
  left: 0;
  width: 162px;
  height: 196px;
}
</style>
