<template>
  <Hero></Hero>
  <AboutMe></AboutMe>
  <Camarasoft></Camarasoft>
  <InspiringSoftware></InspiringSoftware>
  <HardSkills></HardSkills>
  <Frontend></Frontend>
  <Backend></Backend>
  <DevOps></DevOps>
  <GitHub></GitHub>
  <LinkedIn></LinkedIn>
  <PhoneContact></PhoneContact>
  <EmailContact></EmailContact>
  <Footer></Footer>
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
import GitHub from './components/GitHub.vue';
import LinkedIn from './components/LinkedIn.vue';
import PhoneContact from './components/PhoneContact.vue';
import EmailContact from './components/EmailContact.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Hero,
    AboutMe,
    Camarasoft,
    InspiringSoftware,
    HardSkills,
    Frontend,
    Backend,
    DevOps,
    GitHub,
    LinkedIn,
    PhoneContact,
    EmailContact,
    Footer
  }
}
</script>
