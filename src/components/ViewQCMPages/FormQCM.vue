<template>
  <div>

    <!-- Page 1 -->
    <template id="step1" v-if="currentStep === 0">

      <div class="container">
        <h1>Question 1:</h1>

        <img id="ouuka" src="../../assets/icons8-bot.png" alt="">
        <div class="messagebox">
          <p>J'arrive, je vais fumer une clope</p>
        </div>
      </div>

      <div class="grid-container">
        <div class="grid-item" onclick="afficherchamp()"> <!-- v-on:click="" -->
          <p>Réponse 1</p>
        </div>
        <div class="grid-item">
          <p>Réponse 2</p>
        </div>
        <div class="grid-item">
          <p>Réponse 3</p>
        </div>
        <div class="grid-item">
          <p>Réponse 4</p>
        </div>
      </div>

      <button class="continue" type="button" @click.prevent="goToStep(1)">Continue</button>

    </template>

    <!-- Page 2 -->
    <template id="step2" v-if="currentStep === 1">
      <div class="container">
        <h1>Question 2:</h1>

      </div>

      <button class="return" type="button" @click.prevent="goToStep(0)">Retour</button>
      <button class="continue" type="button" @click.prevent="goToStep(2)">Continue</button>
    </template>

    <!-- Page 3 -->
    <template id="step3" v-if="currentStep === 2">
      <div class="container">
        <h1>Question 3:</h1>

      </div>

      <button class="return" type="button" @click.prevent="goToStep(1)">Retour</button>
      <button class="continue" type="button" @click.prevent="goToStep(3)">Continue</button>
    </template>

    <!-- Page 4 -->
    <template id="step4" v-if="currentStep === 3">
      <div class="container">
        <h1>Question 4:</h1>

      </div>

      <button class="return" type="button" @click.prevent="goToStep(2)">Retour</button>
      <button class="continue" type="button" @click.prevent="goToStep(4)">Continue</button>
    </template>

    <!-- Page 5 -->
    <template id="step5" v-if="currentStep === 4">
      <div class="container">
        <h1>Question 5:</h1>

      </div>

      <button class="return" type="button" @click.prevent="goToStep(3)">Retour</button>
      <button class="continue" type="button" @click.prevent="goToStep(5)">Continue</button>
    </template>

    <!-- Page 6 -->
    <template id="step6" v-if="currentStep === 5">
      <div class="container">
        <h1>Question 6:</h1>

      </div>

      <button class="return" type="button" @click.prevent="goToStep(4)">Retour</button>
      <button class="continue" type="button" @click.prevent="goToStep(6)">Continue</button>
    </template>

    <!-- Page 7 -->
    <template id="step7" v-if="currentStep === 6">
      <div class="container">
        <h1>Question 7:</h1>

      </div>

      <button class="return" type="button" @click.prevent="goToStep(5)">Retour</button>
      <button class="continue" type="button" @click.prevent="goToStep(7)">Continue</button>
    </template>

    <!-- Page 8 -->
    <template id="step8" v-if="currentStep === 7">
      <div class="container">
        <h1>Question 8:</h1>

      </div>

      <button class="return" type="button" @click.prevent="goToStep(6)">Retour</button>
      <button class="continue" type="button" @click.prevent="goToStep(8)">Continue</button>
    </template>

    <!-- Page 9 -->
    <template id="step9" v-if="currentStep === 8">
      <div class="container">
        <h1>Question 9:</h1>

      </div>

      <button class="return" type="button" @click.prevent="goToStep(7)">Retour</button>
      <button class="continue" type="button" @click.prevent="goToStep(9)">Continue</button>
    </template>

    <!-- Page 10 -->
    <template id="step10" v-if="currentStep === 9">
      <div class="container">
        <h1>Question 10:</h1>

      </div>

      <button class="return" type="button" @click.prevent="goToStep(8)">Retour</button>
      <button class="continue" type="button" @click.prevent="goToStep(10)">Terminer</button>
    </template>

    <!-- Page 11 - Page de fin -->
    <template id="step10" v-if="currentStep === 10">
      <div class="container">
        <h1>Bien joué :)</h1>

      </div>

    </template>


  </div>



</template>

<script>


export default {
  name: "FormQCM",
  data() {
    return {
      currentStep: 0,
      colors: ['#FDCCF3', '#F2C5FC', '#EABDFE', '#E3B5FF', '#DFB1FF', '#DBACFF', '#D6BDFF', '#D0D2FF', '#CAE8FF', '#C3FDFF'],

      //prépare les variables pour enregistrer les réponses
      step1: {
        response: 0
      },
      step2: {
        response: 0
      },
      step3: {
        response: 0
      },
      step4: {
        response: 0
      },
      step5: {
        response: 0
      },
      step6: {
        response: 0
      },
      step7: {
        response: 0
      },
      step8: {
        response: 0
      },
      step9: {
        response: 0
      },
      step10: {
        response: 0
      }
    }
  },
  mounted() {
    document.getElementById("form").style.background = this.colors[0];
  },


  methods: {
    goToStep: function(step) {
      this.currentStep = step;
      document.getElementById("form").style.background = this.colors[step];
    }/*,
    afficherchamp: function() {
      document.getElementById("continue").style.visibility="visible";
    }*/
  }
}
</script>

<style lang="sass" scoped>

h1
  font-family: $font-title

.container
  padding-top: 40px

  img
    float: left

  .messagebox
    margin-top: 125px

.grid-container
  margin: auto
  padding: 20px
  display: grid
  grid-gap: 20px
  grid-template-columns: auto


.grid-item
  text-align: center
  cursor: pointer
  border-radius: 20px
  background: #FDCCF3 //linear-gradient(145deg, #dabeff, #b8a0e1)
  box-shadow:  6px 6px 15px #ad97d5, -6px -6px 15px #ebcdff
  p
    color: white
    font-family: $font-title
    font-size: 20px
    padding: 20px 10px
  &:hover
    border-radius: 20px
    background: #CCB2FA
    box-shadow: inset 6px 6px 15px #ad97d5, inset -6px -6px 15px #ebcdff

/*.continue
  visibility: hidden*/


</style>