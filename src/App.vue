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
// importation du fichier de variable SaSS
@import "styles/variables.sass"


// initialisation des font dans notre SaSS
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
  padding-top: 20px
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
  padding: 0 60px

.center
  text-align: center















.color-1
  color: $color_1_of_6

/*  IPAD - 1024x768  */
/*  IPAD PRO - 1366x1024  */
/*  IPHONE X - 375x812  */
/*  Galaxy S5 - 360x640  */
/*  Pixel XL 2 - 411x823  */

/*

  @media screen and (max-width: 1020px)
  @media screen and (max-width: 820px)
  @media screen and (max-width: 670px)
  @media screen and (max-width: 570px)
  @media screen and (max-width: 420px)
  @media screen and (max-width: 375px)

  */






</style>
