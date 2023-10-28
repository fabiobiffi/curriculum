<template>
  <div class="inspiring-software">
    <section>
      <div class="container-fluid h-100">
        <div class="row">
          <div class="col">
            <h1 class="title" style="color: #a22982">
              Inspiring<span style="color: #c9609f"> Software</span>
            </h1>
            <p style="color: #d9d9d9">Sep 2019 - 2022</p>
          </div>
        </div>
        <div class="row" style="height: calc(100% - 151px)">
          <div class="col-lg-6 d-flex align-items-center justify-content-center flex-column">
            <div class="container h-100 p-4">
              <div class="row">
                <div class="col">
                  <!-- Angular circle -->
                  <div class="circle" style="background: #DD0D31">Angular</div>
                </div>
              </div>
              <div class="row">
                <div class="col"></div>
                <div class="col">
                  <!-- Python circle -->
                  <div class="circle" style="background: #4584B6;">Python</div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <!-- AWS circle -->
                  <div class="circle" style="background: #FF9900">AWS</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex justify-content-center flex-column">
            <p style="font-weight: bolder; font-size: 24px">Frontend Engineer</p>
            <p>
              I've worked on the main software platform made in Angular, my role was to implement
              new applications inside the platform. <br />
              I also have coordinated a 5 people team.
            </p>
            <p class="mt-4" style="font-weight: bolder; font-size: 24px">Full Stack Engineer</p>
            <p>
              I've worked as full stack engineer (as consultant) for an important company that
              produces and sells energetic turbines. <br />
              I've developed an internal tool that collects and organise data from all the turbines
              around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Camarasoft'
}
</script>

<style lang="scss" scoped>
.inspiring-software {
  background-color: #050a14;
  color: #bcbcbc;
}

.circle {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #050a14;
}
</style>
