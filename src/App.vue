<template>
  <Hero></Hero>
  <AboutMe></AboutMe>
  <Camarasoft></Camarasoft>
</template>

<script lang="js">
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import Hero from './components/Hero.vue'
import AboutMe from './components/AboutMe.vue'
import Camarasoft from './components/Camarasoft.vue'

export default {
  components: {
    Hero,
    AboutMe,
    Camarasoft
  }
}
</script>
