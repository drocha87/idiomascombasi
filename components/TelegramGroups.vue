<template>
  <section class="relative flex justify-center mt-12 md:mt-24">
    <ContainerRow>
    <Title>
      Grupo Telegram
    </Title>
    <p class="px-8 tracking-wide text-gray-600 font-redhat md:p-0">
    Se você quer receber conteúdo gratuito e manter contato ativo com o
    idioma <Highlight>#INGLÊS</Highlight> ou
    <Highlight>#ESPANHOL</Highlight>, te faço um convite para participar do
    meu grupo no Telegram!

    Além de receber dicas e ter contato com a língua você também pode fazer
    quizzes, escutar a áudios e muito mais!
    </p>
    <div class="flex flex-col mx-auto mt-14 md:flex-row md:justify-between max-w-3/4 min-w-3/4 ">
      <div class="w-64 mx-auto md:w-72">
        <Button href="https://euyo.me/speakniceidiomas/608462842dd4910e7277457a" target="_blank" @mouseover="spanishHover = true" @mouseleave="spanishHover = false">
          {{ spanishHover ? "hablemos español" : "grupo em espanhol"}}
        </Button>
      </div>
      <div class="hidden w-32 md:block"></div>
      <div class="w-64 mx-auto mt-8 md:w-72 md:mt-0">
        <Button href="https://euyo.me/speakniceidiomas/60005f5857eb320017134754" target="_blank" @mouseover="englishHover = true" @mouseleave="englishHover = false">
          {{ englishHover ? "let's speak english" : "grupo em inglês"}}
        </Button>
      </div>
    </div>
    </ContainerRow>
  </section>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      spanishHover: false,
      englishHover: false,
    }
  }
})
</script>
