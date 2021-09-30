<template>
  <body class="admin">
  <navigation></navigation>
  <div class="container">

    <div class="card">
      <h1>Administration des dossiers signalés</h1>

      <details class="collapse1">
        <summary>À traîter</summary>
        <p></p>
      </details>

      <details class="collapse2">
        <summary>En cours de traîtement</summary>
        <p></p>
      </details>

      <details class="collapse3">
        <summary>Archive</summary>
      </details>
    </div>
  </div>
  </body>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  name: "Admin",
  components: {Navigation}
}
</script>

<style lang="sass">

.admin
  background: $color_1_of_6

h1
  font-family: $font-title

.card
  background: white
  padding: 78px 76px
  border-radius: 4px
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1)
  max-width: 70%
  width: 100%
  margin: auto




  details
    display: flex
    border-radius: 5px
    overflow: hidden
    background: rgba(0, 0, 0, 0.05)
    border-left: 15px solid gray
    padding: 15px
    margin-top: 15px


    &.collapse1
      background: rgba($color_1_of_6, 0.2)
      border-left-color: $color_1_of_6

    &.collapse2
      background: rgba($color_2_of_6, 0.2)
      border-left-color: $color_2_of_6

    &.collapse3
      background: rgba($color_6_of_6, 0.2)
      border-left-color: $color_6_of_6


    summary

      position: relative
      display: flex
      flex-direction: row
      align-content: center
      justify-content: flex-start
      font-family: $font-title
      font-style: normal
      font-weight: normal
      font-size: 140%
      padding: 20px
      cursor: pointer

    summary::-webkit-details-marker, p::-webkit-details-marker
      display: none


    p
      text-align: justify
      cursor: default
      margin-left: 3rem
      font-family: $font_paragraphe
      font-style: normal
      font-weight: normal
      font-size: 95%
      padding: 6px

    ul
      margin-top: 0
      li
        text-align: justify
        cursor: default
        margin-left: 3rem
        font-family: $font_paragraphe
        font-style: normal
        font-weight: normal
        font-size: 95%

    span
      cursor: default
      margin-left: 3.5rem
      font-family: $font_paragraphe
      font-style: normal
      font-size: 95%
      font-weight: bold

    summary::before
      cursor: pointer
      position: absolute
      display: inline-flex
      width: 1rem
      height: 1rem
      left: 0rem
      margin-right: 0.5rem

    &.open summary
      font-weight: 700

      &::before
        transform: rotate(45deg)
</style>