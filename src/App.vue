<template>
  <Hero></Hero>
  <AboutMe></AboutMe>
  <Camarasoft></Camarasoft>
  <InspiringSoftware></InspiringSoftware>
  <HardSkills></HardSkills>
  <Frontend></Frontend>
  <Backend></Backend>
  <DevOps></DevOps>
</template>

<script lang="js">
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Hero from './components/Hero.vue';
import AboutMe from './components/AboutMe.vue';
import Camarasoft from './components/Camarasoft.vue';
import InspiringSoftware from './components/InspiringSoftware.vue';
import HardSkills from './components/HardSkills.vue';
import Frontend from './components/Frontend.vue';
import Backend from './components/Backend.vue';
import DevOps from './components/DevOps.vue';

export default {
  components: {
    Hero,
    AboutMe,
    Camarasoft,
    InspiringSoftware,
    HardSkills,
    Frontend,
    Backend,
    DevOps
  }
}
</script>
