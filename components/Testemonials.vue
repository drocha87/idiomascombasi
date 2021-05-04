<template>
  <div class="mx-auto md:max-w-3/4">
    <Title>O que falam de mim</Title>
    <ul ref="accordionContainer" class="px-8 md:p-0 md:mt-12">
      <li v-for="t in testemonials" :key="t.id" class="my-4">
        <a v-if="!t.visible" class="cursor-pointer focus:outline-none" @click="toggleVisibility(t)">
          <div class="font-medium text-left text-gray-500 font-redhat">
            <span class="mr-2 text-gray-400 md:hidden">+</span>
            <span id="author-name">{{ t.name }}</span> - <span class="text-xs font-normal">{{ t.title }}</span>
          </div>
        </a>
        <div v-else class="font-medium text-left text-gray-500 font-redhat">
          <span class="text-black">{{ t.name }}</span> - <span class="text-xs font-normal">{{ t.title }}</span>
        </div>

        <div :ref="'accordion-item-'+t.id" class="flex flex-wrap ml-2 overflow-hidden md:ml-4 transition-all duration-300 ease-in-out transform md:flex-nowrap"
                                           :class="{ 'my-4': t.visible }"
                                           :style="t.visible ? 'height: '+height+'px' : 'height: 0'">
          <div class="p-4 font-normal tracking-wide text-gray-500 border-l md:border-b border-gold md:pr-24 md:w-3/4 font-redhat" v-html="t.content"> </div>
          <div class="w-full mt-4 mb-4 text-center md:mt-0 md:max-h-full md:w-1/4 md:mb-0">
            <img  class="object-contain w-full md:object-center md:h-72 md:object-cover"
                  :src="t.image"
                  alt="" >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      height: 300,
      testemonials: [
        {
          id: 1,
          name: 'Diego Rocha',
          title: 'Web Designer',
          content: 'Tenho feito aulas com a Basi e tenho me desenvolvido em um ritmo muito acelerado, as aulas são dinâmicas e a <spam class="text-black">metodologia que ela aplica é sensacional</spam>.',
          image: 'https://res.cloudinary.com/euyome/image/upload/v1620066135/idiomascombasi/diego_rocha_k6ezqf.jpg',
          visible: true,
        },
        {
          id: 2,
          name: 'Diego Guimarães',
          title: 'CEO, Nines Tecnologia',
          content: 'Com as aulas da Basilia eu <spam class="text-black">melhorei meu rendimento no trabalho</spam>, conseguindo ler materiais em inglês e efetuar negociações com pessoas que falam o idioma.',
          image: 'https://res.cloudinary.com/euyome/image/upload/v1620066135/idiomascombasi/diego_guimaraes_zijpqp.jpg',
          visible: false,
        },
        {
          id: 3,
          name: 'Richard Dundovic',
          title: 'RIDU PORTUGAL Founder',
          content: 'I have known Basi for over 4 years and as a former colleague <spam class="text-black">I can guarantee she has the greatest methodology to make you learn English or Spanish</spam>, her classes are dynamic and fun, I recommend taking her courses 100%',
          image: 'https://res.cloudinary.com/euyome/image/upload/v1620066135/idiomascombasi/richard_dundovic_lvxoom.jpg',
          visible: false,
        },
        {
          id: 4,
          name: 'Laryssa Batista Cordeiro',
          title: 'Eng. Química - Cargil',
          content: 'Com as aulas de inglês rapidamente observei evolução no meu vocabulário, pronuncia e desenvoltura na conversação. A Basi sempre se mostrou atenciosa as minhas necessidades, com aulas interativas e diversificadas. Além do aprendizado durante as aulas, elas se tornam também um momento de descontração!',
          image: 'https://res.cloudinary.com/euyome/image/upload/v1620139898/idiomascombasi/laryssa_cordeiro_xppwyx.jpg',
          visible: false,
        },
      ],
    }
  },

  methods: {
    toggleVisibility(t: any) {
      let item: any = this.$refs[`accordion-item-${t.id}`];
      this.height = item[0].scrollHeight;

      this.testemonials.forEach((item: any) => {
        if (item.id != t.id) {
          item.visible = false;
        }
      });
      t.visible = !t.visible;
    }
  },
})
</script>

<style lang="postcss" scoped>
a:hover #author-name {
  @apply text-black transition duration-700 ease-in-out;
}
</style>
