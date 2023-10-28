<template>
  <div class="phone-contact">
    <section class="px-0">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col d-flex justify-content-center align-items-center">
            <a
              class="text-center text-dark"
              style="font-size: 32px"
              href="mailto:fabiobiffi2000@gmail.com"
              >fabiobiffi2000@gmail.com</a
            >
          </div>
          <div class="col d-flex justify-content-center align-items-center">
            <img :src="emailLogo" width="250" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import emailLogo from '@/assets/email.png'

export default {
  name: 'EmailContact',
  data() {
    return {
      emailLogo: emailLogo
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  height: 50vh;
}
.phone-contact {
  background: linear-gradient(90deg, #00e39a 50%, #050a14 50%);
}

a {
  text-decoration: none;
}
</style>
