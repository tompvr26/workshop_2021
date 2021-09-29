<template>
  <div>

    <template id="step1" v-if="currentStep === 0">




        <button type="button" @click.prevent="goToStep(1)">Continue</button>
    </template>
    <template id="step2" v-if="currentStep === 1">
      <h1>Step 2</h1>

      <div>
        <input type="text" name="city" v-model="step2.city" placeholder="city">
      </div>
      <div>
        <input type="text" name="state" v-model="step2.state" placeholder="state">
      </div>

      <button type="button" @click.prevent="goToStep(0)">back</button>
      <button type="button" @click.prevent="goToStep(2)">Finish</button>
    </template>
    <template id="step3" v-if="currentStep === 2">
      <strong>Name:</strong> {{ step1.name }}<br />
      <strong>Email:</strong> {{ step1.email }}<br />
      <strong>City:</strong> {{ step2.city }}<br />
      <strong>State:</strong> {{ step2.state }}
    </template>
  </div>

</template>

<script>


export default {
  name: "Formstepper",
  data() {
    return {
      currentStep: 0,
      colors: ['#ccb2fa', '#ecc6f7', '#ddb6f9', '#d3bdfa', '#d0d1fb', '#cee6fd'],


      step1: {
        name: '',
        email: ''
      },
      step2: {
        city: '',
        state: ''
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
    }
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