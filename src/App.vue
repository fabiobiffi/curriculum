<template>
  <!-- <Hero></Hero>
  <Navbar></Navbar> -->
  <RouterView />
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import Hero from './components/Hero.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Hero,
    Navbar
  }
}
</script>

<style>
html, body {
  background: #f6f6f6 !important;
}
</style>
