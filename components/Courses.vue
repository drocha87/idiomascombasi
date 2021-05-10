<i18n lang="yaml">
en:
  titleOne: Learn with Basi
  subtitleOne: Yes, I can
  buttonOne: Study with me
  contentOne: >-
    Currently, I'm working with online private and group classes and I'm
    confident that I have the right teaching skills to help you take the next
    step in developing your English or Spanish confidence.

  titleTwo: Private or Pairs classes
  subtitleTwo: You and me
  buttonTwo: Schedule your class
  contentTwo: >-
    Private or Pairs classes in English or Spanish, with a duration of one hour
    through the Zoom platform. Flexible schedules and with the material on my
    own, you will study the desired language at your own pace and with current
    topics, schedule your free sample class.

  titleThree: Group classes
  subtitleThree: You and us
  buttonThree: Schedule your class
  contentThree: >-
    English or Spanish classes, small groups of classes through Zoom, share
    your class time with other people who have the same goal as you. Check
    available schedules and take your first class for free.

pt-BR:
  titleOne: Aprenda com Basi
  subtitleOne: Sim, eu posso!
  buttonOne: estude comigo
  contentOne: >-
    Atualmente tenho trabalhado com aulas online VIP ou em grupo, e tenho
    certeza que eu tenho as qualidades necessárias para te ajudar a dar o
    próximo passo no desenvolvimento e na confiança do seu inglês ou espanhol!!

  titleTwo: Aulas VIP ou em Dupla
  subtitleTwo: Você e eu!
  buttonTwo: agende sua aula
  contentTwo: >-
    Aulas VIP ou em Dupla, em inglês ou espanhol, com duração de uma hora pela
    plataforma ZOOM.  Horários flexíveis e com o material por minha conta, você
    vai estudar o idioma desejado no seu ritmo e com assuntos atuais, agende
    sua aula experimental gratuita.

  titleThree: Aulas em Grupo
  subtitleThree: Você e nós!
  buttonThree: agende sua aula
  contentThree: >-
    Aulas em inglês ou espanhol, em turmas reduzidas pela plataforma
    ZOOM, compartilhe sua hora de aula com outras pessoas que tem o mesmo
    objetivo que você!!! Verifique os horários de turmas disponíveis e faça sua
    primeira aula grátis!

es:
  titleOne: Aprende con Basi
  subtitleOne: ¡Sí, yo puedo!
  buttonOne: Estudia conmigo
  contentOne: >-
    Actualmente, estoy trabajando con clases en línea individuales o en grupos y
    tengo la certeza que tengo las habilidades necesarias para ayudarte a dar el
    próximo paso en el desarrollo de la confianza de tu Inglés o Español.

  titleTwo: Clases individuales o en parejas
  subtitleTwo: Tú y yo
  buttonTwo: Agenda tu clase
  contentTwo: >-
    Clases Individuales o en Parejas en inglés o español, con duración de una
    hora por la plataforma Zoom. Horarios flexibles y con el material por mi
    cuenta, vas a estudiar el idioma deseado a tu ritmo y con temas actuales,
    agenda tu clase de muestra gratuita.

  titleThree: Clases en grupo
  subtitleThree: Tú y nosotros
  buttonThree: Agenda tu clase
  contentThree: >-
    Clases en inglés o en español, en grupos de clases reducidos por la
    plataforma Zoom, comparte tu hora de clase con otras personas que tienen el
    mismo objetivo que tú. Consulte los horarios disponibles y haz tu primera
    clase gratis.
</i18n>

<template>
  <div>
    <ContentSection
      :title="$t('titleOne')"
      :subtitle="$t('subtitleOne')"
      :button-title="$t('buttonOne')"
      url="https://euyo.me/idiomascombasi"
      left
    >
      <Paragraph>{{ $t('contentOne') }}</Paragraph>
    </ContentSection>

    <ContentSection
      :title="$t('titleTwo')"
      :subtitle="$t('subtitleTwo')"
      :button-title="$t('buttonTwo')"
      url="https://euyo.me/idiomascombasi"
    >
      <Paragraph>{{ $t('contentTwo') }}</Paragraph>
    </ContentSection>

    <ContentSection
      :title="$t('titleThree')"
      :subtitle="$t('subtitleThree')"
      :button-title="$t('buttonThree')"
      url="https://euyo.me/idiomascombasi"
      left
    >
      <Paragraph>{{ $t('contentThree') }}</Paragraph>
    </ContentSection>
  </div>
</template>
