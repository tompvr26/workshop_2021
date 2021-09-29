<template>
  <div id="app">
      <Navigation></Navigation>
      <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation,
  }
}
</script>



<style lang="sass">
@import "styles/variables.sass"


@font-face
  font-family: "BebasNeue"
  src: url("styles/fonts/BebasNeue-Regular.ttf") format("truetype")

@font-face
  font-family: "Pr"
  src: url("styles/fonts/Pr.ttf") format("truetype")

@font-face
  font-family: "eurostyleB"
  src: url("styles/fonts/EurostyleB.ttf") format("truetype")

@font-face
  font-family: "Europa"
  src: url("styles/fonts/mk2.ttf") format("truetype")


.title
  font-family: $font-title
  margin: 0
  padding-top: 50px
  font-size: $size-title
  -webkit-animation: title 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both
  animation: title 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both

.subtitle
  font-family: $font-subtitle
  letter-spacing: 0.5px
  font-size: $size-subtitle

.paragraphe
  font-family: $font-paragraphe
  font-size: $size-paragraphe
  font-style: normal
  line-height: 28px
  font-weight: 300
  max-width: 850px
  margin: auto





p
  margin: 0
  font-family: $font-paragraphe
  font-style: normal
  font-weight: 300
  font-size: $size-paragraphe

a
  text-decoration: none




body
  margin: 0
  padding: 0
  min-height: 100vh

.transition-fade
  transition: 0.4s
  opacity: 1

html.is-animating .transition-fade
  opacity: 0



.container
  padding: 0 50px

.center
  text-align: center


.color-1
  color: $color_1_of_6

</style>
