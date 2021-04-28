<template>
  <div class="relative self-center md:w-1/2">
    <div class="image">
      <img :src="require('assets/images/basi_hero.jpeg')" alt="Basilia Santiago">
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.image {
  @apply mt-8 mx-auto w-3/4 md:mt-0;
  vertical-align: middle;
  position: relative;
  border: 4px solid #6fd6ff;
}

.image::before {
  content: "";
  position: absolute;
  background-image: url("assets/images/section-02-about-left-art-image.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  bottom: -15%;
  left: -20px;
  width: 30%;
  height: 30%;
}

.image::after{
  content: "";
  position: absolute;
  background-image: url("assets/images/section-04-top-right-art-image.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  top: -5%;
  right: -5%;
  width: 20%;
  height: 20%;
}
</style>
