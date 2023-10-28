<template>
  <div class="linkedin">
    <section>
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col d-flex align-items-center justify-content-center flex-column">
            <img :src="linkedinLogo" alt="LinkedIn Logo" width="200" />
            <a
              class="mt-4 text-white"
              href="https://linkedin.com/in/fabio-biffi/"
              style="font-size: 20px"
              target="_blank"
              >linkedin.com/in/fabio-biffi/</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import linkedinLogo from '@/assets/linkedin-logo.png'

export default {
  name: 'Linkedin',
  data() {
    return {
      linkedinLogo: linkedinLogo,
    }
  }
}
</script>

<style lang="scss" scoped>
.linkedin {
  background-color: #050a14;
}
</style>
