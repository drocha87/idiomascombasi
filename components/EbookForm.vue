<i18n lang="yaml">
en:
  title:
  subtitle:
  content:
  button:
  inputEmail:

pt-BR:
  conditions: >-
    Você irá receber meu conteúdo regularmente, sobre várias outras
    dicas. Se por acaso você não estiver interessado(a) em receber este
    tipo de conteúdo, você pode sair a qualquer momento da minha lista de envios.

  description: >-
    Para receber este e-book é muito simples, basta você colocar seu nome e um email válido nos campos
    abaixo e aí eu te envio ele por email tá

  button:
  inputEmail:

es:
  title:
  subtitle:
  content:
  button:
  inputEmail:
</i18n>

<template>
  <div class="md:border border-gold border-opacity-40">
    <div class="md:pt-8 md:px-4">
      <Paragraph class="md:px-8">
        {{ $t('description') }}
      </Paragraph>
      <form class="px-8 py-4" novalidate @submit.prevent="sendEbook">
        <BaseInput
          v-model="name"
          class="block"
          label="Como posso te chamar?"
          type="text"
          required
        />
        <!-- <span class="h-2 text-xs font-redhat text-red-500">{{ errorName }}</span> -->
        <BaseInput
          v-model="email"
          class="mt-2"
          label="Seu melhor email"
          type="email"
          required
          error-message="O formato do seu email é inválido."
        />
        <SubmitButton class="mt-8 block"> Receber E-Book </SubmitButton>
        <p class="mt-8 text-xs text-gray-600 font-redhat">
          {{ $t('conditions') }}
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { emailIsValid } from '@/validators'

export default Vue.extend({
  data() {
    return {
      name: '',
      email: '',
    }
  },

  methods: {
    validateEmail(email: string): null | string {
      if (emailIsValid(email)) {
        return null
      }
      return 'Email inválido'
    },

    sendEbook() {
      try {
        // console.log(this.name, this.email)
        // await this.$axios.post('/ebook', { name: this.name, email: this.email })
      } catch (err) {
        console.log(err)
      }
    },
  },
})
</script>
