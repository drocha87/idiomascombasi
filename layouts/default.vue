<i18n lang="yaml">
en:
  title: Drop me a line
  subtitle: Looking forward to hearing from you.
  terms: Terms and Conditions

pt-BR:
  title: Deixe-me uma mensagem
  subtitle: Ansiosa para saber mais sobre você
  terms: Termos e Condições

es:
  title: Escríbeme un mensaje
  subtitle: Estoy ansiosa por saber de ti
  terms: Termos e Condições
</i18n>

<template>
  <div class="overflow-x-hidden">
    <!-- <DesktopNavBar /> -->
    <MobileNav class="md:hidden" />
    <DesktopNav class="hidden md:block" />

    <!-- <a href="https://euyo.me/speakniceidiomas/608462842dd4910e7277457a" target="_blank"> -->
    <!--   <div class="info-action"> -->
    <!--     Faça parte do nosso grupo de espanhol no telegram -->
    <!--   </div> -->
    <!-- </a> -->

    <!-- Use a mt-16 to not override the navigation bar -->
    <Nuxt class="mt-16" />
    <footer
      class="
        px-8
        pt-12
        pb-32
        mt-48
        text-sm
        tracking-wide
        text-black
        bg-gray-200
        md:px-0
        font-redhat
      "
    >
      <ContainerRow class="mx-auto">
        <div>
          <p class="text-lg" style="color: #c6a869">{{ $t('title') }}</p>
          <p class="mt-4 text-2xl text-gray-900">{{ $t('subtitle') }}</p>

          <p class="mt-2 font-medium text-gray-500">
            <a href="mailto:basi@idiomascombasi.com.br">
              basi@idiomascombasi.com.br
            </a>
          </p>
        </div>
        <div class="mt-8 text-base text-gold">
          <nuxt-link to="/legal">
            {{ $t('terms') }}
          </nuxt-link>
        </div>
        <div class="mt-6 text-gray-500">
          © 2021 Basilia Santiago. All rights reserved. <br />
          Site by
          <a class="underline" href="https://euyo.me/diego" target="_blank">
            Diego Rocha.
          </a>
        </div>
      </ContainerRow>
    </footer>
  </div>
</template>

<style lang="postcss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #fafafa;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

*::selection {
  background: #ffd60a;
  color: black;
}

.info-action {
  @apply font-antonio font-medium tracking-wider bg-black md:bg-white md:text-black text-white text-center uppercase md:shadow-md;
  height: 50px;
  line-height: 50px;
  font-size: 0.9rem;
}
</style>
