<template>
  <Hero></Hero>
  <AboutMe></AboutMe>
  <Camarasoft></Camarasoft>
  <InspiringSoftware></InspiringSoftware>
</template>

<script lang="js">
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Hero from './components/Hero.vue';
import AboutMe from './components/AboutMe.vue';
import Camarasoft from './components/Camarasoft.vue';
import InspiringSoftware from './components/InspiringSoftware.vue';

export default {
  components: {
    Hero,
    AboutMe,
    Camarasoft,
    InspiringSoftware
  }
}
</script>
