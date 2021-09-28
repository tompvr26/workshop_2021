<template>
  <div>
    <svg>
      <defs>
        <filter id="gooeyness">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur"/>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                         result="gooeyness"/>
          <feComposite in="SourceGraphic" in2="gooeyness" operator="atop"/>
        </filter>
      </defs>
    </svg>
    <div class="fixed-right">
      <div class="plates" id="burgerContainer">
      <div class="plate plate2" id="plate-toggle" v-on:click="toggleMenu">
        <svg class="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
          <path class="line line1"
                d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475"/>
          <path class="line line2"
                d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034"/>
          <path class="line line3"
                d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254"/>
          <path class="line line4"
                d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525"/>
          <path class="line line5"
                d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441"/>
          <path class="line line6"
                d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695"/>
        </svg>
        <svg class="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
          <path class="line" d="M 34,32 L 66,68"/>
          <path class="line" d="M 66,32 L 34,68"/>
        </svg>
      </div>
    </div>
    </div>

    <div id="sidenavMenu" class="sidenav">
      <div class="list-menu">
        <ul>
          <li>
            <router-link to="/" class="links-animation">
              <div v-on:click="toggleMenu" class="links">
                Accueil
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/cyber-harcelement-definition" class="links-animation">
              <div v-on:click="toggleMenu" class="links">
                Qu’est ce que le Cyber Harcèlement
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/" class="links-animation">
              <div v-on:click="toggleMenu" class="links">
                Dénoncer un Cyber Harcèlement
              </div>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Navigation",
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.isActive = !this.isActive;

      const sidenav = document.getElementById("sidenavMenu");
      const plates = document.getElementById("plate-toggle");

      const links = document.getElementsByClassName('links');



      if (!this.isActive) {
        plates.classList.remove('active-burger');

        for (let i = 0; i < links.length; i++) {
          links.item(i).classList.remove("text-focus-in");
          links.item(i).classList.add("text-blur-out");
        }
        
        setTimeout(() => {
          sidenav.style.width = "0";
        }, 400);

      } else {
        plates.classList.add('active-burger');
        sidenav.style.width = "100%";
        if (sidenav.style.width === '100%'){
          for (let i = 0; i < links.length; i++) {
            links.item(i).classList.remove("text-blur-out");
            links.item(i).classList.add("text-focus-in");
          }
        }
      }
    },
  }

}

</script>
<style lang="sass">

.list-menu
  padding: 30px

  ul
    list-style: none
    li
      width: 70%
      margin: auto
      border-bottom: solid 1px #ececec
      font-family: $font-title
      font-size: 40px
      a
        color: #000000



.links-animation
  div
    padding: 50px 0
    transition: .6s
    &:hover
      padding: 65px 0
      color: $color_1_of_6



















.sidenav
  height: 100%
  width: 0
  position: fixed
  top: 0
  left: 0
  overflow-x: hidden
  transition: 0.5s
  text-align: center
  z-index: 10
  background-color: #ffffff

svg
  height: 60px
  width: 60px
  position: fixed

.fixed-right
  display: flex
  justify-content: flex-end

.plates
  right: 0
  top: 0
  position: relative
  cursor: pointer
  display: flex
  flex-wrap: wrap
  max-height: 60px
  width: fit-content

.plate
  height: 60px
  width: 60px
  z-index: 11

.burger
  filter: url(#gooeyness)
  z-index: 11

.x
  transform: scale(0)
  transition: transform 400ms

.line
  fill: none
  stroke: black
  stroke-width: 6.5px
  stroke-linecap: round
  stroke-linejoin: round
  transform-origin: 50%
  transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms, transform 500ms 200ms

.x .line
  stroke-width: 4.8px

.active-burger .x
  transform: scale(1)
  transition: transform 400ms 350ms

.plate2
  .line1
    stroke-dasharray: 21 185.62753295898438

  .line2
    stroke-dasharray: 21 178.6514129638672
    transition-delay: 30ms

  .line3
    stroke-dasharray: 21 197.92425537109375
    transition-delay: 60ms

  .line4
    stroke-dasharray: 21 190.6597137451172
    transition-delay: 90ms

  .line5
    stroke-dasharray: 21 208.52874755859375
    transition-delay: 120ms

  .line6
    stroke-dasharray: 21 186.59703063964844
    transition-delay: 150ms

.active-burger.plate2
  .line1
    stroke-dasharray: 5 185.62753295898438
    stroke-dashoffset: -141px

  .line2
    stroke-dasharray: 5 178.6514129638672
    stroke-dashoffset: -137px

  .line3
    stroke-dasharray: 5 197.92425537109375
    stroke-dashoffset: -176px

  .line4
    stroke-dasharray: 5 190.6597137451172
    stroke-dashoffset: -159px

  .line5
    stroke-dasharray: 5 208.52874755859375
    stroke-dashoffset: -139px

  .line6
    stroke-dasharray: 5 186.59703063964844
    stroke-dashoffset: -176px

  .x
    transition: transform 400ms 250ms



</style>