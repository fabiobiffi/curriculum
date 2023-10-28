<template>
  <div class="hero">
    <section>
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-lg-6 d-flex justify-content-center flex-column">
            <span style="color: #00e3a9">Hello, my name is</span>
            <h1 class="title text-white">Fabio <span style="color: #00e3a9">Biffi</span></h1>
            <h3 class="title" style="color: #00e3a9">Software Engineer</h3>
          </div>
          <div class="col-lg-6 d-flex align-items-center">
            <div class="menu">
              <ol>
                <li><span @click="scrollMeTo('about-me')">About Me</span></li>
                <li><div><router-link to="/blog">Blog <span style="color: #00e3a9; margin:0">(Coming soon)</span></router-link></div></li>
                <li><span @click="scrollMeTo('contact')">Contact Me</span></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    scrollMeTo(refName) {
      var element = document.getElementById(refName);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-color: #050a14;

  h3 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }

  ol {
    line-height: 100px;
    font-size: 32px;
    color: #00e3a9;

    span, a {
      margin-left: 100px;
      color: #bcbcbc;
      font-size: 24px;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #00e3a9;
        text-decoration: underline;
      }
    }

    
  }
}
</style>
