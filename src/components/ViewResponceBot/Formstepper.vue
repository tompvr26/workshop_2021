<template>
  <div>

    <template id="step1" v-if="currentStep === 0">
      <div>
        <img src="../../assets/icons8-bot.png" alt="logo">
        <h1>Allons-y ! J'aimerais que tu me renseigne ton prénom ainsi que ton âge</h1>

        <div class="form-group">
          <label>Prénom</label>
          <input class="form-field" type="text" placeholder="Prénom" v-model="step1.name">
        </div>

        <div class="form-group">
          <label>Âge</label>
          <input class="form-field" type="number" min="9" max="105" placeholder="Âge" v-model="step1.age">
        </div>

      </div>


      <button type="button" @click.prevent="goToStep(1)">Continue</button>
    </template>

    <template id="step2" v-if="currentStep === 1">
      <img src="../../assets/icons8-bot.png" alt="logo">
      <h1>Pour t'aider au mieux et resté en contacte, indique ton numéro de téléphone ou ton email</h1>

      <div class="form-group">
        <label>Téléphone</label>
        <input class="form-field" type="tel" placeholder="N° Téléphone" v-model="step2.phone">
      </div>

      <h1>Ou</h1>

      <div class="form-group">
        <label>Email</label>
        <input class="form-field" type="email" min="9" max="105" placeholder="Em@il" v-model="step2.email">
      </div>

      <button type="button" @click.prevent="goToStep(0)">Retour</button>
      <button type="button" @click.prevent="goToStep(2)">Suivant</button>
    </template>

    <template id="step3" v-if="currentStep === 2">
      <img src="../../assets/icons8-bot.png" alt="logo">
      <h1>C'est parfait, pourrais-tu me dire dans laquelle de ces situations tu as été confronté</h1>

      <div class="grid-container">
        <div v-for="s in situations" v-bind:key="s.id">{{s.id}}</div>
      </div>


      <button type="button" @click.prevent="goToStep(1)">Retour</button>
      <button type="button" @click.prevent="goToStep(3)">Suivant</button>
    </template>

    <template id="step4" v-if="currentStep === 3">
      <img src="../../assets/icons8-bot.png" alt="logo">
      <h1>Décris-moi la situation avec quelques phrases, afin que nous puissions d'analysées la situation et de mieux t'aider</h1>

      <div class="form-group">
        <label>Téléphone</label>
        <textarea class="form-field" placeholder="Description des faits" v-model="step4.description"></textarea>
      </div>

      <button type="button" @click.prevent="goToStep(2)">Retour</button>
      <button type="button" @click.prevent="goToStep(4)">Suivant</button>
    </template>

    <template id="step5" v-if="currentStep === 4">
      <img src="../../assets/icons8-bot.png" alt="logo">
      <h1>Quand cela à-t-il commencé ?</h1>

      <div class="form-group">
        <label>Date </label>
        <input class="form-field" type="date" placeholder="Description des faits" v-model="step5.debut">
      </div>

      <button type="button" @click.prevent="goToStep(3)">Retour</button>
      <button type="button" @click.prevent="goToStep(5)">Suivant</button>
    </template>

    <template id="step6" v-if="currentStep === 5">
      <img src="../../assets/icons8-bot.png" alt="logo">
      <h1>Voulez-vous être anonyme</h1>

      <div class="form-group">
        <label>Anonyma</label>
        <input class="form-field" type="checkbox" placeholder="Description des faits" v-model="step6.anonyme">
      </div>


      <button type="button" @click.prevent="goToStep(4)">Retour</button>
      <button type="button" @click.prevent="goToStep(6)">Finir</button>
    </template>



    <template id="step7" v-if="currentStep === 6">
      <strong>Prénom:</strong> {{ step1.name }}<br/>
      <strong>Âge:</strong> {{ step1.age }}<br/>
      <strong>Email:</strong> {{ step2.email }}<br/>
      <strong>Téléphone:</strong> {{ step2.phone }}<br/>
      <strong>Situation:</strong> {{ step3.situation }}<br/>
      <strong>Description:</strong> {{ step4.description }}<br/>
      <strong>Date commencement:</strong> {{ step5.debut }}<br/>
      <strong>Anonyma:</strong> {{ step6.anonyme }}<br/>


      <input type="submit" v-on:click="submit" value="Envoyer">
    </template>
  </div>

</template>

<script>

//const baseURL = "172.20.10.7";

import axios from "axios";

export default {
  name: "Formstepper",
  data() {
    return {
      currentStep: 0,
      colors: ['#ccb2fa', '#ecc6f7', '#ddb6f9', '#d3bdfa', '#d0d1fb', '#cee6fd'],
      messages: [],
      situations: [],

      step1: {
        name: '',
        age: ''
      },
      step2: {
        phone: '',
        email: ''
      },
      step3: {
        situation: ''
      },
      step4: {
        description: '',
      },
      step5: {
        debut: Date.now(),
      },
      step6: {
        itsYou: false,
        anonyme: false

      },

    }
  },
  mounted() {
    document.getElementById("form").style.background = this.colors[0];
    this.getSituation();
  },


  methods: {
    goToStep: function (step) {
      this.currentStep = step;
      document.getElementById("form").style.background = this.colors[step];
    },
    submit(){
      axios.post('http://localhost:8000/usersMessages/',
          {
            firstName: this.step1.name,
            age: this.step1.age,
            phone: this.step2.phone,
            email: this.step2.email,
            description: this.step4.description,
            bullyDate: this.step5.debut,
            anonym: this.step6.anonyme,
            isYou: this.step6.itsYou,
            situation: this.step3.situation,
            status: null,
          }, {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'http://localhost:8000/usersMessages/',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers ': 'Origin, Content-Type, Accept'
          }
      );
    },
    getUsersMessages(){
      axios.get("http://localhost:8000/usersMessages/",{
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'http://localhost:8000'
      }).then(response => this.messages = response.data);
    },
    getSituation(){
      axios.get("http://localhost:8000/situations/",{
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'http://localhost:8000'
      }).then(response => this.situations = response.data);
    },
  }
}
</script>

<style lang="sass" scoped>

.fields
  width: 100%
  padding: 75px 5px 5px 5px

  input
    border: none
    outline: none
    background: none
    font-size: 18px
    color: #555
    padding: 20px 10px 20px 5px

.firstname, .password
  margin-bottom: 30px
  border-radius: 25px
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff






</style>