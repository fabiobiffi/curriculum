<template>
  <section>
  <div class="github">
      <img :src="moon" alt="Moon Logo" width="600" class="moon" />
      <img :src="saturn" alt="Saturn Logo" width="600" class="saturn" />
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col d-flex align-items-center justify-content-center flex-column">
            <img :src="githubLogo" alt="Github Logo" width="200" class="github-logo" />
            <a
              class="mt-4 text-white"
              href="https://github.com/fabiobiffi"
              style="font-size: 20px"
              target="_blank"
              >github.com/fabiobiffi</a
            >
          </div>
        </div>
      </div>
    </div>
    </section>
</template>

<script>
import githubLogo from '@/assets/github-logo.png'
import moon from '@/assets/moon.png'
import saturn from '@/assets/saturn.png'

export default {
  name: 'github',
  data() {
    return {
      githubLogo: githubLogo,
      moon: moon,
      saturn: saturn
    }
  }
}
</script>

<style lang="scss" scoped>
.github {
  background-color: #101728;
  position: relative;
  height: 100vh;
  overflow: hidden;
}

section {
  padding: 0 !important;
}

.github-logo, a {
  z-index: 999;
}

.moon,
.saturn {
  position: absolute;
}

.saturn {
  top: -76px;
  left: -211px;
}

.moon {
  bottom: -308px;
  right: -188px;
}
</style>
