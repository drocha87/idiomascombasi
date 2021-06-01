<i18n lang="yaml">
en:
  title:
  subtitle:
  content:
  button:
  inputEmail:

pt-BR:
  description: >-
    Para participar das aulas, basta você preencher os campos abaixo, e ficar atenta a
    seus emails. As aulas serão com turmas reduzidas, por isso já reserve seu lugar
    agora mesmo
  conditions: >-
    As aulas serão pela plataforma Zoom. O material será enviado na semana da aula no formato PDF.

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
        <p v-if="errorMessage !== ''" class="text-sm mt-2 text-red-500">
          {{ errorMessage }}
        </p>
        <p
          v-if="successMessage !== ''"
          class="text-sm mt-2 text-green-700 font-redhat"
        >
          {{ successMessage }}
        </p>
        <SubmitButton class="mt-8 block"> Quero Participar </SubmitButton>
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
      errorMessage: '',
      successMessage: '',
    }
  },

  methods: {
    validateEmail(email: string): null | string {
      if (emailIsValid(email)) {
        return null
      }
      return 'Email inválido'
    },

    async sendEbook() {
      try {
        if (this.name === '') {
          throw new Error(
            'Vou precisar que você preencha o campo "Como posso te chamar"'
          )
        }

        if (!emailIsValid(this.email)) {
          throw new Error('Email inválido')
        }
        this.errorMessage = ''
        await this.$axios.post('/promo/beyourself', {
          name: this.name,
          email: this.email,
        })

        this.email = ''
        this.name = ''
        this.successMessage =
          'Parabéns, você irá receber o link de acesso para as aulas no email indicado!'
      } catch (err) {
        this.errorMessage = err.message || err.data.message
      }
    },
  },
})
</script>
