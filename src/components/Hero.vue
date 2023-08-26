<template>
  <div class="hero">
    <section>
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-lg-6 d-flex align-items-center justify-content-center">
            <div class="profile-picture"></div>
          </div>
          <div class="col-lg-6 d-flex justify-content-center flex-column">
            <h1 class="title text-white">Fabio <span style="color: #FFBD59;">Biffi</span></h1>
            <h3 class="title" style="color: #FF66C4;">Software Engineer</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
.hero {

  background-color: #0f1728;
  .profile-picture {
    width: 300px;
    height: 300px;
    border-radius: 1000px;
    overflow: hidden;
    background-image: url(@/assets/profile_picture.jpeg);
    background-position: center center;    
    background-size: cover;
    background-repeat: no-repeat;
  }

}
</style>
