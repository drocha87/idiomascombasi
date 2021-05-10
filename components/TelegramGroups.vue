<i18n lang="yaml">
en:
  title: Telegram Group
  content: >-
    If you want to receive content and keep an active contact with the language
    #ENGLISH or #SPANISH, I invite you to participate in my telegram group.  In
    addition to receiving tips and having contact with the language, you can
    also take quizzes, listen to audios and much more.

  buttonSpanish: Spanish Group
  buttonEnglish: English Group

pt-BR:
  title: Grupo Telegram
  content: >-
    Se você quer receber conteúdo gratuito e manter contato ativo com o idioma
    #INGLÊS ou #ESPANHOL, te faço um convite para participar do meu grupo no
    Telegram!  Além de receber dicas e ter contato com a língua você também
    pode fazer quizzes, escutar áudios e muito mais!

  buttonSpanish: grupo em espanhol
  buttonEnglish: grupo em inglês

es:
  title: Grupo de Telegram
  content: >-
    Si quieres recibir contenido y mantener contacto activo con el idioma
    #INGLÉS o #ESPAÑOL, te invito a que participes de mi grupo de Telegram.
    Además de recibir consejos o tips y de tener contacto con el idioma, tú
    también puedes hacer quizzes, escuchar audios y mucho más.

  buttonSpanish: Grupo en español
  buttonEnglish: Grupo en Inglés
</i18n>

<template>
  <section class="relative flex justify-center mt-12 md:mt-12">
    <ContainerRow>
    <Title>{{ $t('title') }}</Title>
    <p class="px-8 tracking-wide text-gray-600 font-redhat md:p-0">
    {{ $t('content') }}
    </p>
    <div class="flex flex-col mx-auto mt-14 md:flex-row md:justify-between max-w-3/4 min-w-3/4 ">
      <div class="w-64 mx-auto md:w-72">
        <Button href="https://euyo.me/speakniceidiomas/608462842dd4910e7277457a" target="_blank" @mouseover="spanishHover = true" @mouseleave="spanishHover = false">
          {{ spanishHover ? "hablemos español" : $t('buttonSpanish')}}
        </Button>
      </div>
      <div class="hidden w-32 md:block"></div>
      <div class="w-64 mx-auto mt-8 md:w-72 md:mt-0">
        <Button href="https://euyo.me/speakniceidiomas/60005f5857eb320017134754" target="_blank" @mouseover="englishHover = true" @mouseleave="englishHover = false">
          {{ englishHover ? "let's speak english" :  $t('buttonEnglish')}}
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
