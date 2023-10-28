<template>
    <div class="about-me" id="about-me" ref="about-me">
      <section>
        <div class="container-fluid h-100">
          <div class="row h-100">
            <div class="col d-flex align-items-center justify-content-center flex-column">
              <h1 class="title">🧑🏼‍💻 About <span style="color: #DD0D31">me</span></h1>
              <p class="text-center mt-4">Hello and welcome on my website! <br>
                My name is Fabio and I am a full stack <span style="color:#00e3a9">Software Engineer</span>. <br>
                I love sports, tennis and soccer are my favorite. <br>
                I also love cooking, I'm a good chef. <br>
                I live in <span style="color:#00e3a9">Switzerland</span>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMe'
  }
  </script>
  
  <style lang="scss" scoped>
  .about-me {
  
    background-color: #050a14;
    color: #bcbcbc;

    .title  {
      color: #00e3a9;
    }
  
  }
  </style>
  