<template>
  <div class="backend">
    <section>
      <div class="container-fluid h-100">
        <div class="row">
            <div class="col">
                <h1 class="title text-center">
                    <span>Back</span>
                    <span class="text-white">end</span>
                </h1>
            </div>
        </div>
        <div class="row" style="height: calc(100% - 151px)">
            <div class="col d-flex justify-content-center align-items-center">
                <img :src="DrfLogo" width="300" />
            </div>
            <div class="col d-flex justify-content-center align-items-center">
                <img :src="DjangoLogo" width="300" />
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DrfLogo from '@/assets/drf-logo.png'; 
import DjangoLogo from '@/assets/django-logo.png'; 

export default {
  name: 'Backend',
  data() {
    return {
        DrfLogo: DrfLogo,
        DjangoLogo: DjangoLogo,
    }
  }
}
</script>

<style lang="scss" scoped>
.backend {
    background: linear-gradient(90deg, #00e39a 50%, #050a14 50%);
}
</style>
