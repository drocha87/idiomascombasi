<template>
  <div>
    <section class="main-container">
      <div class="detail-right"></div>
      <MainContainer>
      <HeroLeftPanel />
      <HeroRightPanel />
      </MainContainer>
    </section>
    <section class="flex justify-center mb-24">
      <ContainerRow>
      <p class="px-8 font-redhat tracking-wide">
      Sou uma <Highlight>especialista</Highlight> no ensino de línguas estrangeiras com mais de 10 anos de
      <Highlight>experiência</Highlight>. Ensino espanhol e inglês a pessoas que sabem que falar um idioma
      estrangeiro nos dias de hoje traz muitas vantagens a nível pessoal e
      profissional. Ajudo as pessoas a ganharem <Highlight>confiança</Highlight> e a se comunicarem melhor.
      Espero que aqui você possa encontrar o que você precisa para desenvolver suas
      <Highlight>habilidades comunicativas</Highlight> e ser quem quer ser!
      </p>

      <p class="px-8 font-redhat tracking-wide mt-4">
      Vem comigo na aventura de se <Highlight>comunicar como você quer</Highlight>!
      </p>
      </ContainerRow>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss">
.main-container {
  @apply relative flex;

  margin: 0;
  min-width: 100%;
  min-height: 100vh;
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
</style>
