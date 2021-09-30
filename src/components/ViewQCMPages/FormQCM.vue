<template>
  <div>

    <!-- Page 1 -->
    <template id="step1" v-if="currentStep === 0">

      <div class="container">
        <h1>Question 1:</h1>

        <img class="ouuka" src="../../assets/icons8-bot.png" alt="">
        <div class="messagebox">
          <p>{{textBot}}</p>
        </div>
      </div>

      <div class="grid-container">
        <div id="grid1" class="grid-item" @click.prevent="checkResponse(0, 1, 1)"> <!-- v-on:click="" -->
          <p>Réponse 1</p>
        </div>
        <div id="grid2" class="grid-item" @click.prevent="checkResponse(0, 2, 2)">
          <p>Réponse 2</p>
        </div>
        <div id="grid3" class="grid-item" @click.prevent="checkResponse(0, 3, 3)">
          <p>Réponse 3</p>
        </div>
        <div id="grid4" class="grid-item" @click.prevent="checkResponse(0, 4, 4)">
          <p>Réponse 4</p>
        </div>
      </div>

      <button class="continue" type="button" @click.prevent="goToStep(1), changeText(1)">Continue</button>

    </template>

    <!-- Page 2 -->
    <template id="step2" v-if="currentStep === 1">
      <div class="container">
        <h1>Question 2:</h1>

        <img class="ouuka" src="../../assets/icons8-bot.png" alt="">
        <div class="messagebox">
          <p>{{textBot}}</p>
        </div>

      </div>

      <div class="grid-container">
        <div id="grid5" class="grid-item" @click.prevent="checkResponse(1, 1, 5)"> <!-- v-on:click="" -->
          <p>Réponse 1</p>
        </div>
        <div id="grid6" class="grid-item" @click.prevent="checkResponse(1, 2, 6)">
          <p>Réponse 2</p>
        </div>
        <div id="grid7" class="grid-item" @click.prevent="checkResponse(1, 3, 7)">
          <p>Réponse 3</p>
        </div>
        <div id="grid8" class="grid-item" @click.prevent="checkResponse(1, 4, 8)">
          <p>Réponse 4</p>
        </div>
      </div>

      <button class="continue" type="button" @click.prevent="goToStep(2), changeText(2)">Continue</button>
    </template>

    <!-- Page 3 -->
    <template id="step3" v-if="currentStep === 2">
      <div class="container">
        <h1>Question 3:</h1>

        <img class="ouuka" src="../../assets/icons8-bot.png" alt="">
        <div class="messagebox">
          <p>{{textBot}}</p>
        </div>

      </div>

      <div class="grid-container">
        <div id="grid9" class="grid-item" @click.prevent="checkResponse(2, 1, 9)"> <!-- v-on:click="" -->
          <p>Réponse 1</p>
        </div>
        <div id="grid10" class="grid-item" @click.prevent="checkResponse(2, 2, 10)">
          <p>Réponse 2</p>
        </div>
        <div id="grid11" class="grid-item" @click.prevent="checkResponse(2, 3, 11)">
          <p>Réponse 3</p>
        </div>
        <div id="grid12" class="grid-item" @click.prevent="checkResponse(2, 4, 12)">
          <p>Réponse 4</p>
        </div>
      </div>

      <button class="continue" type="button" @click.prevent="goToStep(3), changeText(3)">Continue</button>
    </template>

    <!-- Page 4 -->
    <template id="step4" v-if="currentStep === 3">
      <div class="container">
        <h1>Question 4:</h1>

        <img class="ouuka" src="../../assets/icons8-bot.png" alt="">
        <div class="messagebox">
          <p>{{textBot}}</p>
        </div>

      </div>

      <div class="grid-container">
        <div id="grid13" class="grid-item" @click.prevent="checkResponse(3, 1, 13)"> <!-- v-on:click="" -->
          <p>Réponse 1</p>
        </div>
        <div id="grid14" class="grid-item" @click.prevent="checkResponse(3, 2, 14)">
          <p>Réponse 2</p>
        </div>
        <div id="grid15" class="grid-item" @click.prevent="checkResponse(3, 3, 15)">
          <p>Réponse 3</p>
        </div>
        <div id="grid16" class="grid-item" @click.prevent="checkResponse(3, 4, 16)">
          <p>Réponse 4</p>
        </div>
      </div>

      <button class="continue" type="button" @click.prevent="goToStep(4), changeText(4)">Continue</button>
    </template>

    <!-- Page 5 -->
    <template id="step5" v-if="currentStep === 4">
      <div class="container">
        <h1>Question 5:</h1>

        <img class="ouuka" src="../../assets/icons8-bot.png" alt="">
        <div class="messagebox">
          <p>{{textBot}}</p>
        </div>

      </div>

      <div class="grid-container">
        <div id="grid17" class="grid-item" @click.prevent="checkResponse(4, 1, 17)"> <!-- v-on:click="" -->
          <p>Réponse 1</p>
        </div>
        <div id="grid18" class="grid-item" @click.prevent="checkResponse(4, 2, 18)">
          <p>Réponse 2</p>
        </div>
        <div id="grid19" class="grid-item" @click.prevent="checkResponse(4, 3, 19)">
          <p>Réponse 3</p>
        </div>
        <div id="grid20" class="grid-item" @click.prevent="checkResponse(4, 4, 20)">
          <p>Réponse 4</p>
        </div>
      </div>

      <button class="continue" type="button" @click.prevent="goToStep(5), changeText(5)">Continue</button>
    </template>

    <!-- Page 6 -->
    <template id="step6" v-if="currentStep === 5">
      <div class="container">
        <h1>Question 6:</h1>

        <img class="ouuka" src="../../assets/icons8-bot.png" alt="">
        <div class="messagebox">
          <p>{{textBot}}</p>
        </div>

      </div>

      <div class="grid-container">
        <div id="grid21" class="grid-item" @click.prevent="checkResponse(5, 1, 21)"> <!-- v-on:click="" -->
          <p>Réponse 1</p>
        </div>
        <div id="grid22" class="grid-item" @click.prevent="checkResponse(5, 2, 22)">
          <p>Réponse 2</p>
        </div>
        <div id="grid23" class="grid-item" @click.prevent="checkResponse(5, 3, 23)">
          <p>Réponse 3</p>
        </div>
        <div id="grid24" class="grid-item" @click.prevent="checkResponse(5, 4, 24)">
          <p>Réponse 4</p>
        </div>
      </div>

      <button class="continue" type="button" @click.prevent="goToStep(6), changeText(6)">Continue</button>
    </template>

    <!-- Page 7 -->
    <template id="step7" v-if="currentStep === 6">
      <div class="container">
        <h1>Question 7:</h1>

        <img class="ouuka" src="../../assets/icons8-bot.png" alt="">
        <div class="messagebox">
          <p>{{textBot}}</p>
        </div>

      </div>

      <div class="grid-container">
        <div id="grid25" class="grid-item" @click.prevent="checkResponse(6, 1, 25)"> <!-- v-on:click="" -->
          <p>Réponse 1</p>
        </div>
        <div id="grid26" class="grid-item" @click.prevent="checkResponse(6, 2, 26)">
          <p>Réponse 2</p>
        </div>
        <div id="grid27" class="grid-item" @click.prevent="checkResponse(6, 3, 27)">
          <p>Réponse 3</p>
        </div>
        <div id="grid28" class="grid-item" @click.prevent="checkResponse(6, 4, 28)">
          <p>Réponse 4</p>
        </div>
      </div>

      <button class="continue" type="button" @click.prevent="goToStep(7), changeText(7)">Continue</button>
    </template>

    <!-- Page 8 -->
    <template id="step8" v-if="currentStep === 7">
      <div class="container">
        <h1>Question 8:</h1>

        <img class="ouuka" src="../../assets/icons8-bot.png" alt="">
        <div class="messagebox">
          <p>{{textBot}}</p>
        </div>

      </div>

      <div class="grid-container">
        <div id="grid29" class="grid-item" @click.prevent="checkResponse(7, 1, 29)"> <!-- v-on:click="" -->
          <p>Réponse 1</p>
        </div>
        <div id="grid30" class="grid-item" @click.prevent="checkResponse(7, 2, 30)">
          <p>Réponse 2</p>
        </div>
        <div id="grid31" class="grid-item" @click.prevent="checkResponse(7, 3, 31)">
          <p>Réponse 3</p>
        </div>
        <div id="grid32" class="grid-item" @click.prevent="checkResponse(7, 4, 32)">
          <p>Réponse 4</p>
        </div>
      </div>

      <button class="continue" type="button" @click.prevent="goToStep(8), changeText(8)">Continue</button>
    </template>

    <!-- Page 9 -->
    <template id="step9" v-if="currentStep === 8">
      <div class="container">
        <h1>Question 9:</h1>

        <img class="ouuka" src="../../assets/icons8-bot.png" alt="">
        <div class="messagebox">
          <p>{{textBot}}</p>
        </div>

      </div>

      <div class="grid-container">
        <div id="grid33" class="grid-item" @click.prevent="checkResponse(8, 1, 33)"> <!-- v-on:click="" -->
          <p>Réponse 1</p>
        </div>
        <div id="grid34" class="grid-item" @click.prevent="checkResponse(8, 2, 34)">
          <p>Réponse 2</p>
        </div>
        <div id="grid35" class="grid-item" @click.prevent="checkResponse(8, 3, 35)">
          <p>Réponse 3</p>
        </div>
        <div id="grid36" class="grid-item" @click.prevent="checkResponse(8, 4, 36)">
          <p>Réponse 4</p>
        </div>
      </div>

      <button class="continue" type="button" @click.prevent="goToStep(9), changeText(9)">Continue</button>
    </template>

    <!-- Page 10 -->
    <template id="step10" v-if="currentStep === 9">
      <div class="container">
        <h1>Question 10:</h1>

        <img class="ouuka" src="../../assets/icons8-bot.png" alt="">
        <div class="messagebox">
          <p>{{textBot}}</p>
        </div>

      </div>

      <div class="grid-container">
        <div id="grid37" class="grid-item" @click.prevent="checkResponse(9, 1, 37)"> <!-- v-on:click="" -->
          <p>Réponse 1</p>
        </div>
        <div id="grid38" class="grid-item" @click.prevent="checkResponse(9, 2, 38)">
          <p>Réponse 2</p>
        </div>
        <div id="grid39" class="grid-item" @click.prevent="checkResponse(9, 3, 39)">
          <p>Réponse 3</p>
        </div>
        <div id="grid40" class="grid-item" @click.prevent="checkResponse(9, 4, 40)">
          <p>Réponse 4</p>
        </div>
      </div>

      <button class="continue" type="button" @click.prevent="goToStep(10), changeText(10)">Terminer</button>
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
      redColor: '#FF6961',
      greenColor: '#84FF8C',
      basicColor: '#FDCCF3',

      textBot: 'Question 1',

      //prépare les variables pour enregistrer les réponses
      step1: {
        response: 1,
        userResponse: 0
      },
      step2: {
        response: 2,
        userResponse: 0
      },
      step3: {
        response: 3,
        userResponse: 0
      },
      step4: {
        response: 4,
        userResponse: 0
      },
      step5: {
        response: 1,
        userResponse: 0
      },
      step6: {
        response: 2,
        userResponse: 0
      },
      step7: {
        response: 3,
        userResponse: 0
      },
      step8: {
        response: 4,
        userResponse: 0
      },
      step9: {
        response: 1,
        userResponse: 0
      },
      step10: {
        response: 2,
        userResponse: 0
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

      this.changeText(step)
    },

    checkResponse: function(step, userResponse, num) {

      switch (step) {
        case 0:
          if (userResponse === this.step1.response) {
            for (var i = 1; i <= 4; i++) {
              document.getElementById("grid" + i).style.background = this.basicColor;
            }
            this.goToStep(step+1);
          } else {
            document.getElementById("grid" + num).style.background = this.redColor;
          }
          break;

        case 1:
          if (userResponse === this.step2.response) {
            for (i = 5; i <= 8; i++) {
              document.getElementById("grid" + i).style.background = this.basicColor;
            }
            this.goToStep(step+1);
          } else {
            document.getElementById("grid" + num).style.background = this.redColor;
          }
          break;

        case 2:
          if (userResponse === this.step3.response) {
            for (i = 9; i <= 12; i++) {
              document.getElementById("grid" + i).style.background = this.basicColor;
            }
            this.goToStep(step+1);
          } else {
            document.getElementById("grid" + num).style.background = this.redColor;
          }
          break;

        case 3:
          if (userResponse === this.step4.response) {
            for (i = 13; i <= 16; i++) {
              document.getElementById("grid" + i).style.background = this.colors[step];
            }
            this.goToStep(step+1);
          } else {
            document.getElementById("grid" + num).style.background = this.redColor;
          }
          break;

        case 4:
          if (userResponse === this.step5.response) {
            for (i = 17; i <= 20; i++) {
              document.getElementById("grid" + i).style.background = this.colors[step];
            }
            this.goToStep(step+1);
          } else {
            document.getElementById("grid" + num).style.background = this.redColor;
          }
          break;

        case 5:
          if (userResponse === this.step6.response) {
            for (i = 21; i <= 24; i++){
              document.getElementById("grid" + i).style.background = this.colors[step];
            }
            this.goToStep(step+1);
          } else {
            document.getElementById("grid" + num).style.background = this.redColor;
          }
          break;

        case 6:
          if (userResponse === this.step7.response) {
            for (i = 25; i <= 28; i++) {
              document.getElementById("grid" + i).style.background = this.colors[step];
            }
            this.goToStep(step+1);
          } else {
            document.getElementById("grid" + num).style.background = this.redColor;
          }
          break;

        case 7:
          if (userResponse === this.step8.response) {
            for (i = 29; i <= 32; i++) {
              document.getElementById("grid" + i).style.background = this.colors[step];
            }
            this.goToStep(step+1);
          } else {
            document.getElementById("grid" + num).style.background = this.redColor;
          }
          break;

        case 8:
          if (userResponse === this.step9.response) {
            for (i = 33; i <= 36; i++) {
              document.getElementById("grid" + i).style.background = this.colors[step];
            }
            this.goToStep(step+1);
          } else {
            document.getElementById("grid" + num).style.background = this.redColor;
          }
          break;

        case 9:
          if (userResponse === this.step10.response) {
            for (i = 37; i <= 40; i++) {
              document.getElementById("grid" + i).style.background = this.colors[step];
            }
            this.goToStep(step+1);
          } else {
            document.getElementById("grid" + num).style.background = this.redColor;
          }
          break;

        default:

      }
    },

    changeText: function(step) {
      switch (step) {
        case 0:
          this.textBot = 'Question 1';
          break;

        case 1:
          this.textBot = 'Question 2';
          break;

        case 2:
          this.textBot = 'Question 3';
          break;

        case 3:
          this.textBot = 'Question 4';
          break;

        case 4:
          this.textBot = 'Question 5';
          break;

        case 5:
          this.textBot = 'Question 6';
          break;

        case 6:
          this.textBot = 'Question 7';
          break;

        case 7:
          this.textBot = 'Question 8';
          break;

        case 8:
          this.textBot = 'Question 9';
          break;

        case 9:
          this.textBot = 'Question 10';
          break;

        default:
          this.textBot = ''
      }
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
  grid-template-columns: auto auto


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