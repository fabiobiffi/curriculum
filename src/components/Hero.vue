<template>
  <div class="hero container-fluid">
    <div class="row h-100 profile-picture">
      <div class="col-lg-6 d-flex justify-content-center align-items-start flex-column first-col">
        <div class="p-5">
            <div class="title">Fabio Biffi</div>
            <div class="subtitle">Software Engineer</div>
            <div class="social-icons mt-5" style="font-size: 34px;">
                <i class="bi bi-linkedin me-3" style="color: #0a77b5;"></i>
                <i class="bi bi-github me-3" style="color: #6cc644;"></i>
                <i class="bi bi-instagram me-3" style="color: #E1306C"></i>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
.hero {
  height: 700px;

  .profile-picture {
    background-image: url(@/assets/profile_picture.jpeg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    .first-col {
      background-color: rgb(81 154 145 / 90%);
    }

  };

  .title {
    color: white;
    font-size: 50px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  .subtitle {
    color: white;
    font-size: 30px;
    font-weight: 100;
  }
}
</style>
