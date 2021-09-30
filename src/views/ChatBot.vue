<template>
  <div>
    <div class="container">
      <img src="../assets/icons8-bot.png" alt="">
      <div class="messagebox">
        <p>Salut 👋🏼</p>
        <p>Moi c'est Ouuka, je suis votre bot assistant. Que puis-je faire pour vous ?</p>
      </div>
      <div class="grid-container">
        <div class="grid-item" v-on:click="toggleForm">
          <p>Signaler un fait</p>
        </div>
        <div class="grid-item">
          <p>Je suis victime d'un fait. Que faire ?</p>
        </div>
      </div>
    </div>



    <div id="form" class="formulaire">
      <div class="previous" v-on:click="toggleForm">&#8249;</div>
      <formstepper></formstepper>
    </div>
  </div>
</template>

<script>
import Formstepper from "../components/ViewResponceBot/Formstepper";

export default {
  name: "ChatBot",
  components: {Formstepper},
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleForm: function () {
      this.isActive = !this.isActive;

      const form = document.getElementById("form");

      if (!this.isActive) {
        console.log('if click');
        form.classList.remove('scale-in-hor-center')

        form.style.width = "0";

      } else {
        console.log('else click');
        form.classList.add('scale-in-hor-center')
        form.style.width = "100%";
      }
    },
  }
}
</script>

<style lang="sass" scoped>









.previous
  font-size: 33px
  padding: 30px
  position: absolute
  cursor: pointer
  top: 0
  left: 0
  color: black



.formulaire
  height: 100%
  width: 0
  position: fixed
  top: 0
  left: 0
  overflow-x: hidden
  text-align: center
  z-index: 8
  background-color: #ffffff



.grid-container
  margin: auto
  padding: 50px
  display: grid
  grid-gap: 50px
  grid-template-columns: auto


.grid-item
  text-align: center
  cursor: pointer
  width: 50vw
  margin: auto
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
  min-height: 100vh
  height: 100%
  background: $color_1_of_6
  img
    padding-top: 70px




</style>