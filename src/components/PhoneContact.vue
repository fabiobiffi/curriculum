<template>
  <div class="phone-contact">
    <section class="px-0">
      <div class="container-fluid h-100">
        <div class="row h-100">
            <div class="col-lg-6 d-flex justify-content-center align-items-center">
                <img :src="phoneLogo" width="250" />
            </div>
            <div class="col-lg-6 d-flex justify-content-center align-items-center">
                <a class="text-center text-dark" style="font-size: 32px;" href="tel:+41 76 521 9747">+41 76 521 9747</a>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import phoneLogo from '@/assets/phone.png'; 

export default {
  name: 'PhoneContact',
  data() {
    return {
        phoneLogo: phoneLogo,
    }
  }
}
</script>

<style lang="scss" scoped>

section {
  height: 50vh;
}
.phone-contact {
    background: linear-gradient(90deg, #C1FF72 50%, #00ED64 50%);
}

a {
  text-decoration: none;
}
</style>
