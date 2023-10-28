<template>
  <div class="dev-ops">
    <section>
      <div class="container-fluid h-100">
        <div class="row">
          <div class="col">
            <h1 class="title text-center">Dev<span style="color: #00e39a;">Ops</span></h1>
          </div>
        </div>
        <div class="row" style="height: calc(100% - 151px)">
          <div class="col-lg-6 d-flex align-items-center justify-content-center flex-column">
            <img :src="linuxLogo" alt="Linux Logo" width="400" />
          </div>
          <div class="col-lg-6 d-flex align-items-center justify-content-center flex-column">
            <p>
              Deep knoewledge of Linux, all Debian and Ubuntu based distros. <br>
              Able to build CI/CD
              pipelines in yaml for automate the distribution process. <br>
              AWS, Azure DevOps and On-Prem cloud experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import linuxLogo from '@/assets/linux-logo.png'

export default {
  name: 'DevOps',
  data() {
    return {
      linuxLogo: linuxLogo
    }
  }
}
</script>

<style lang="scss" scoped>
.dev-ops {
  background-color: #050a14;
  color: #a9a9a9;
}
</style>
