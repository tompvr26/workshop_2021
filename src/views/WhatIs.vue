<template>
  <body>
    <div class="container">

      <div class="card">
        <h1>Qu'est-ce que le Cyber-Harcèlement ?</h1>

        <details class="collapse1">
          <summary>Internet dans nos vies</summary>
          <p>Internet est sans nul doute le phénomène ayant le plus changé le monde de nos jours. Entre l’acquisition de connaissance et d’informations et la communication virtuel, l’explosion d’internet a radicalement changé nos vies. Ce phénomène s’est accentué ces dix dernières années avec l’arrivé des smartphones et tablettes, technologies mobiles, permettant d’être connecté partout, et tout le temps.</p>
          <p>Les réseaux sociaux ont aujourd’hui une place importante dans nos vies, certains ont retrouvé des amis enfances, d’autres ont trouvé l’amour et d’autres ont trouvé leur travail grâce aux réseaux sociaux. Que ce soit d'un point de vue personnel ou professionnel, certains ont vu leur vie boulversé suite à l'arrivé des réseaux sociaux, que ce soit positif ou négatif.</p>
          <p>Effectivement, aujourd'hui sur les réseaux sociaux l'anonymat est la raison de bien des conflits, voire même de harcèlement en ligne. Un simple post pour donner son avis peut être la source de critiques et d'acharnements, car l'anonymat protège toutes personnes de repressailles. Il devient alors facile d'insulter ou de harceler derrière un écran d'ordinateur ou sur un smartphone, et se sentir tout-puissant.</p>
          <p>Outre harcèlement sur les réseaux sociaux une nouvelle menace est apparue suite à l'arrivé d'internet, les hackers. Une nouvelle génération de pirates à vu le jours grâce à internet, leur passe-temps, voler les informations personnelles des utilisateurs afin de les revendre ou de les faire chanter. Il est facile aujourd'hui de divulguer des informations personnelles ou bien de laisser des traces sur les réseaux sociaux, comme nos goûts musicaux, nos avis sur la politique ou encore notre géolocalisation. Toutes ces informations sont succeptibles d'être récupérées dans le but d'être retournées contre vous.</p>
          <p>Il devient aujourd'hui primordial de s'en protéger ...</p>
        </details>

        <details class="collapse2">
          <summary>Le Cyber-Harcèlement c'est quoi ?</summary>
          <p>Le harcèlement est le fait de tenir des propos ou d'avoir des comportements répétés ayant pour but ou effet une dégradation des conditions de vie de la victime. Cela se traduit par une dégradation de la santé physique ou mentale de la personne harcelée (anxiété, maux de ventre, ...). C'est la fréquence des propos et leur teneur insultante, obscène ou menaçante qui constitue le harcèlement.</p>
          <p>Le harcèlement en ligne est un harcèlement s'effectuant via internet (sur un réseau social, un forum, un jeu vidéo multijoueurs, un blog...). On parle aussi de cyber-harcèlement. Les propos en cause peuvent être des commentaires d'internautes, des vidéos, des montages d'images, des messages sur des forums...</p>
          <p>Le harcèlement en ligne est puni que les échanges soient publics (sur un forum par exemple) ou privés (entre amis sur un réseau social).</p>
          <div>
            <p>Il peut prendre plusieurs formes telles que :</p>
            <ul>
              <li>les intimidations, insultes, moqueries ou menaces en ligne</li>
              <li>la propagation de rumeurs</li>
              <li>le piratage de comptes et l’usurpation d’identité digitale</li>
              <li>la création d’un sujet de discussion, d’un groupe ou d’une page sur un réseau social à l’encontre d’un camarade de classe</li>
              <li>la publication d’une photo ou d’une vidéo de la victime en mauvaise posture</li>
              <li>le sexting (c’est la contraction de « sex » et « texting ». On peut le définir comme « Des images produites par les jeunes (17 ans et moins) qui représentent d’autres jeunes et qui pourraient être utilisées dans le cadre de la pornographie infantile »</li>
            </ul>
          </div>
          <p>Plusieurs conséquences graves peuvent-être engendrées suites à du cyber-harcèlement, comme de l'isolement, de la perte de confiance en soi, l'échec scolaire, la dépression voire même le suicide. Il devient donc nécessaire pour tout adulte d'agir pour prévenir et combattre le cyber-harcèlement. Etant le risque le plus important auquel un enfant est exposé sur Internet, il est le devoir de tous de prévenir et combattre l’intimidation en ligne.</p>
        </details>

        <details class="collapse3">
          <summary>Comment s'en protéger ?</summary>
          <span>1. Réfléchir avant d’envoyer un message ou de publier une photo de soi ou de ses amis.</span>
          <p>Que ressentira mon ami(e) en voyant cette photo de lui/elle ? Le message que je poste ne me portera pas préjudice ? Sur Internet, le retour en arrière est difficile. Un contenu publié, même supprimé, laisse toujours une trace.</p>
          <br>
          <span>2. Garder sa vie privée, privée. Internet est un espace public auquel tout le monde a accès.</span>
          <p>Que ressentira mon ami(e) en voyant cette photo de lui/elle ? Le message que je poste ne me portera pas préjudice ? Sur Internet, le retour en arrière est difficile. Un contenu publié, même supprimé, laisse toujours une trace.</p>
          <br>
          <span>3. Choisir ses amis sur les réseaux sociaux.</span>
          <p>Il est important de distinguer les amis proches des simples connaissances et ce que l’on partage avec chacun.</p>
          <br>
          <span>4. Ne jamais partager ses mots de passe.</span>
          <p>Même avec son meilleur ami. Un mot de passe doit rester personnel et confidentiel.</p>
          <br>
          <span>5. Parler de harcèlement, c’est commencer à agir.</span>
          <p>Pour y mettre fin, que l’enfant soit harcelé, témoin ou acteur, il doit savoir qu’il ne doit pas rester silencieux face à des situations de violence, et qu’il peut en parler à ses amis et à des adultes (famille, équipe éducative).</p>
        </details>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "WhatIs"
}
</script>

<style lang="sass">

body
  background: $color_1_of_6

h1
  font-family: $font-title

.card
  background: white
  padding: 78px 76px
  border-radius: 4px
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1)
  max-width: 70%
  width: 100%
  margin: auto
  

    

  details
    display: flex
    border-radius: 5px
    overflow: hidden
    background: rgba(0, 0, 0, 0.05)
    border-left: 15px solid gray
    padding: 15px
    margin-top: 15px


    &.collapse1
      background: rgba($color_1_of_6, 0.2)
      border-left-color: $color_1_of_6

    &.collapse2
      background: rgba($color_2_of_6, 0.2)
      border-left-color: $color_2_of_6

    &.collapse3
      background: rgba($color_6_of_6, 0.2)
      border-left-color: $color_6_of_6


    summary
      position: relative
      display: flex
      flex-direction: row
      align-content: center
      justify-content: flex-start
      font-family: $font-title
      font-style: normal
      font-weight: normal
      font-size: 140%
      padding: 20px
      cursor: pointer

    summary::-webkit-details-marker, p::-webkit-details-marker
      display: none


    p
      text-align: justify
      cursor: default
      margin-left: 3rem
      font-family: $font_paragraphe
      font-style: normal
      font-weight: normal
      font-size: 95%
      padding: 6px

    ul
      margin-top: 0px
      li
        text-align: justify
        cursor: default
        margin-left: 3rem
        font-family: $font_paragraphe
        font-style: normal
        font-weight: normal
        font-size: 95%

    span
      cursor: default
      margin-left: 3.5rem
      font-family: $font_paragraphe
      font-style: normal
      font-size: 95%
      font-weight: bold

    summary::before
      cursor: pointer
      position: absolute
      display: inline-flex
      width: 1rem
      height: 1rem
      left: 0rem
      margin-right: 0.5rem

    &.open summary
      font-weight: 700

      &::before
        transform: rotate(45deg)

</style>