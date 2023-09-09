<template>
  <div class="footer">
    <section>
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col h-75 d-flex justify-content-center align-items-center">
            <img :src="map" width="400" style="border-radius: 40px" />
          </div>
          <div class="col h-75 d-flex justify-content-center text-white flex-column summary">
            <p>📍 Lugano (<span style="color: #dd0d31">Switzerland</span>)</p>
            <p>💼 B permit</p>
            <p>🇮🇹 Italian (native language)</p>
            <p>🇬🇧 English (B2)</p>
            <p>🚘 Driving license</p>
          </div>
          <div class="col-12 h-25 text-white d-flex justify-content-center align-items-end text-center">
            <p class="credits">2023 Fabio Biffi | all rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import map from '@/assets/map.png'

export default {
  name: 'Footer',
  data() {
    return {
      map: map
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: #101728;
}

.summary p{
    font-size: 24px !important;
}
</style>
