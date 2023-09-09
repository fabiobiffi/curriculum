<template>
  <div class="frontend">
    <section>
      <div class="container-fluid h-100">
        <div class="row">
            <div class="col">
                <h1 class="title text-center">
                    <span class="text-white">Fron</span>
                    <span>tend</span>
                </h1>
            </div>
        </div>
        <div class="row" style="height: calc(100% - 151px)">
            <div class="col d-flex justify-content-center align-items-center">
                <img :src="VueLogo" width="300" />
            </div>
            <div class="col d-flex justify-content-center align-items-center">
                <img :src="AngularLogo" width="300" />
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueLogo from '@/assets/vue-logo.png'; 
import AngularLogo from '@/assets/angular-logo.png'; 

export default {
  name: 'Frontend',
  data() {
    return {
        VueLogo: VueLogo,
        AngularLogo: AngularLogo,
    }
  }
}
</script>

<style lang="scss" scoped>
.frontend {
    background: linear-gradient(90deg, rgba(221,13,49,1) 50%, rgba(255,255,255,1) 50%);
}
</style>
