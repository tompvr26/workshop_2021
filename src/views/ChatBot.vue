<template>
  <div class="container">
    <img src="../assets/icons8-bot.png" alt="">

    <div class="messagebox">
      <p>Salut 👋🏼</p>
      <p>Moi c'est Ouuka, je suis votre bot assistant. Que puis-je faire pour vous ?</p>
    </div>
    <div class="grid-container">


      <div class="grid-item">
        <p>Signaler un fait</p>
      </div>
      <div class="grid-item">
        <p>Signaler un fait</p>
      </div>
      <div class="grid-item">
        <p>Signaler un fait</p>
      </div>
      <div class="grid-item">
        <p>Je suis victime d'un fait. Que faire ?</p>
      </div>
    </div>




  </div>
</template>

<script>



export default {
}
</script>

<style lang="sass" scoped>



.grid-container
  margin: auto
  padding: 50px
  display: grid
  grid-gap: 50px
  grid-template-columns: auto


.grid-item
  text-align: center
  cursor: pointer
  border-radius: 20px
  background: linear-gradient(145deg, #dabeff, #b8a0e1)
  box-shadow:  6px 6px 15px #ad97d5, -6px -6px 15px #ebcdff
  p
    color: white
    font-family: $font-title
    font-size: 20px
    padding: 40px 10px
  &:hover
    border-radius: 20px
    background: #CCB2FA
    box-shadow: inset 6px 6px 15px #ad97d5, inset -6px -6px 15px #ebcdff



.container
  height: 100vh
  background: $color_1_of_6
  img
    padding-top: 70px



.messagebox
  position: relative
  max-width: 30em
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

</style>