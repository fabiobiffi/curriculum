<template>
  <div class="camarasoft">
    <section>
      <div class="container-fluid h-100">
        <div class="row">
          <div class="col">
            <h1 class="title" style="color: #5e17eb">
              Camara<span style="color: #5ce1e6">soft</span>
            </h1>
            <p style="color: #d9d9d9">June 2022 - Today</p>
          </div>
        </div>
        <div class="row" style="height: calc(100% - 151px)">
          <div class="col-lg-6 d-flex align-items-center justify-content-center flex-column">
            <p>
              My role was to implement new features on the main product of the company, an high
              traffic website (over 1 million visitors per day).
            </p>

            <p>
              I worked on invoicing and payments module of the website, I' ve implemented new
              payment methods and helped our finance team with a new tool for managing invoices.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="container h-100">
              <div class="row" >
                  <div class="col">
                    <div class="circle" style="background: #44B78B">
                        Django
                    </div>
                </div>
                  <div class="col">
                    <div class="circle" style="background: #42D392">
                        Vue3
                    </div>
                  </div>
                  <div class="col"></div>
              </div>
              <div class="row">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col">
                    <div class="circle" style="background: #00ED64">
                        MongoDB
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col"></div>
                <div class="col">
                    <div class="circle text-white" style="background: #384d54">
                        Docker
                    </div>
                </div>
                <div class="col"></div>
              </div>
            </div>
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
.camarasoft {
  background-color: #0d94ba;
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
}
</style>
