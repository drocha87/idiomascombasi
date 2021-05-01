<template>
  <div>
    <a href="https://euyo.me/speakniceidiomas/608462842dd4910e7277457a" target="_blank">
      <div class="info-action">
        Faça parte do nosso grupo de espanhol no telegram
      </div>
    </a>

    <Nuxt />
    <footer class="py-4 mt-12 text-sm tracking-wider text-center text-white bg-black font-antonio">
      © 2021 Basilia Santiago. All rights reserved. <br>
      Site by <a href="https://euyo.me/diego" target="_blank"> Diego Rocha.  </a>
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
