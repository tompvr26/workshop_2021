<template>
  <div class="container">
    <img src="../assets/icons8-bot.png" alt="">

    <div class="messagebox">
      <p>Salut 👋🏼</p>
      <p>Moi c'est Ouuka, je suis votre bot assistant.</p>
      <p>Vous êtes ici pour jouer à un mini jeu qui permettra de tester vos connaissances sur le cyber-harcèlement.</p>
      <p>S'informer est la première étape contre le cyber-harcèlement, c'est pour ça qu'il est important de se renseigner.</p>
    </div>

    <div class="messagebox" style="margin-top: 25px">
      <p>Êtes-vous prêt à commencer ?</p>

      <div class="btn_rotate">
        <span>
          <a href="#"></a>
        </span>
      </div>
    </div>



  </div>
</template>

<script>



export default {
  name: "QCM"
}
</script>

<style lang="sass" scoped>



.grid-container
  margin: auto
  padding: 50px
  display: grid
  grid-gap: 50px
  grid-template-columns: auto





.container
  height: 100vh
  background: $color_1_of_6
  img
    padding-top: 70px



.messagebox
  position: relative
  max-width: 45em
  background-color: #fff
  padding: 1em 1.5em
  font-size: 1.25em
  border-radius: 1rem
  box-shadow:	0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2)

.messagebox::before
  content: ''
  position: absolute
  width: 0
  height: 0
  bottom: 100%
  left: 1.9em
  border: .75rem solid transparent
  border-top: none
  border-bottom-color: #fff
  filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1))



@import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap')

.btn_rotate
  //display: flex
  //height: 100vh
  align-items: center
  justify-content: center
  background: #fff
  margin-top: 20px

span
  position: relative
  display: inline-flex
  width: 180px
  height: 55px
  margin: 0 15px
  perspective: 1000px

  a
    font-size: 19px
    letter-spacing: 1px
    transform-style: preserve-3d
    transform: translateZ(-25px)
    transition: transform .25s
    font-family: 'Montserrat', sans-serif

    &:before, &:after
      position: absolute
      content: "C'est parti !"
      height: 55px
      width: 180px
      display: flex
      align-items: center
      justify-content: center
      border: 5px solid black
      box-sizing: border-box
      border-radius: 5px

    &:before
      color: #fff
      background: #000
      transform: rotateY(0deg) translateZ(25px)

    &:after
      color: #000
      transform: rotateX(90deg) translateZ(25px)

    &:hover
      transform: translateZ(-25px) rotateX(-90deg)


</style>