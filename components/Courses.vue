<template>
  <section class="relative flex justify-center">
    <ContainerRow>
    <div class="md:hidden">
      <Title>
        Aulas VIP ou em Dupla
      </Title>
    </div>
    <div class="flex items-center">
      <div class="min-w-1/2">
        <p class="px-8 tracking-wide font-redhat md:p-0">
        Aulas VIP ou em Dupla, em inglês ou espanhol, com duração de uma hora pela plataforma ZOOM.
        Horários flexivéis e com o material por minha conta, você vai estudar o idioma desejado no
        seu ritmo e com assuntos atuais, agende sua aula experimental gratuita.

        <!-- Atualmente tenho trabalhado com <Highlight>aulas online</Highlight> VIP -->
        <!-- ou em grupo, e tenho certeza que eu tenho as qualidades necessárias para -->
        <!-- te ajudar a dar o <Highlight>próximo</Highlight> <Highlight>passo</Highlight> no desenvolvimento -->
        <!-- e na confiança do seu inglês ou espanhol!! -->
        </p>
        <div class="w-64 mx-auto mt-14">
          <Button href="https://euyo.me/idiomascombasi" target="_blank">Agende sua Aula</Button>
        </div>
      </div>

      <div class="flex flex-col flex-grow hidden min-w-1/2 md:block space-y-12">
        <div>
          <p class="text-5xl text-right text-gray-300 font-antonio">Você e eu!</p>
          <div class="w-32 h-2 mt-2 ml-auto bg-gray-200 opacity-40"></div>
        </div>

        <div class="flex items-center justify-end text-5xl font-bold font-antonio">
          <div class="w-16 h-1 mr-8 bg-red-500"></div>
          <div>
            Aulas VIP ou Dupla
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 md:mt-32">
      <div class="md:hidden">
        <Title>
          Aulas em Grupo
        </Title>
      </div>
      <div class="flex items-center">
        <div class="flex flex-col flex-grow hidden min-w-1/2 md:block space-y-12">
          <div>
            <p class="text-5xl text-left text-gray-300 font-antonio">Você e nós!</p>
            <div class="w-32 h-2 mt-2 bg-gray-200 opacity-40"></div>
          </div>

          <div class="flex items-center justify-start text-5xl font-bold font-antonio">
            <div>
              Aulas em Grupo
            </div>
            <div class="w-16 h-1 ml-8 bg-red-500"></div>
          </div>
        </div>

        <div class="min-w-1/2">
          <p class="px-8 tracking-wide font-redhat md:p-0">
          Aulas em inglês ou espanhol, em turmas reduzidas pela plataforma
          ZOOM, compartilhe sua hora de aula com outras pessoas que tem o mesmo
          objetivo que você!!! Verifique os horários de turmas disponíveis e faça sua
          primeira aula grátis!
          </p>
          <div class="w-64 mx-auto mt-14">
            <Button href="https://euyo.me/idiomascombasi" target="_blank">Agende sua Aula</Button>
          </div>
        </div>
      </div>
    </div>
    </ContainerRow>
  </section>
</template>
