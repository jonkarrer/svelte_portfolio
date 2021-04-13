<script>
  import Projects from './Projects.svelte'
  import About from './About.svelte'
  import {spring} from 'svelte/motion'
  let slideProjectsOut = false;
  let slideAboutOut = false;
  let coords = spring({x: 0, y: 0}, {
    stiffness: 0.2,
    damping: 0.25
  });
  let size = spring(10);
</script>

<div class="homepage">
  <div class="project-title">
    <p style="transform: rotate(90deg)" on:click="{() => slideProjectsOut=true}">Projects</p>
  </div>
  <div class="contact-wrapper">
    <a href="mailto: karrerjon@gmail.com" class="email">karrerjon@gmail.com</a>
    <div class="social-media-container">
      <div class="icon-container"><a href="https://chewedup.blog"><img src="assets/white-icons/3.svg" alt="blog icon"></a></div>
      <div class="icon-container"><a href="https://github.com/jonkarrer"><img src="assets/white-icons/1.svg" alt="github icon"></a></div>  
      <div class="icon-container"><a href="https://www.linkedin.com/in/jon-karrer-6b8a18186/"><img src="assets/white-icons/2.svg" alt="linkedin"></a></div>
    </div>
  </div>
  <div class="about-title">
    <p style="transform: rotate(-90deg)" on:click="{() => slideAboutOut=true}">About</p>
  </div>
  <svg
    on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY }, {

    })}"
    on:mousedown="{(e) => coords.set({x: e.clientX, y: e.clientY + 200 })}"
    on:mouseup="{(e) => coords.set({ x: e.clientX, y: e.clientY})}"
  >
    <circle cx={$coords.x} cy={$coords.y} r={$size}/>
  </svg>
  <div class="slide-left" class:slideProjectsOut>
    <div class="close-project-slide" on:click="{() => slideProjectsOut=false}">
      Back
    </div>
    <Projects />
  </div>
  <div class="slide-right" class:slideAboutOut>
    <div class="close-about-slide" on:click="{() => slideAboutOut=false}">
      Back
    </div>
    <About />
  </div>
</div>


<style>
.close-about-slide {
  color:white;
  position: absolute;
  font-size: clamp(1em, 3vw, 3em);
  margin: 10px 30px;
}
.close-project-slide {
  color:white;
  position: absolute;
  font-size: clamp(1em, 3vw, 3em);
  margin: 10px 30px;
  right: 0;
}
.close-about-slide, .close-project-slide:hover {
  cursor: pointer;
}
.homepage {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 150px auto 150px;
  position: relative;
  transition: all 0.5s;
  background-color: var(--theme-dark-grey);
}
.contact-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a.email {
  font-size: clamp(1em, 5vw, 8em);
  color: white;
  z-index: 4;
}
.social-media-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 25px;
  z-index: 4;
}
.icon-container a img {
  object-fit: fill;
  width: 5vw;
  min-width: 30px;
  max-width: 100px;
}
.project-title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  font-size: clamp(2em, 5vw, 6em);
  color: var(--theme-cyan);
}
.about-title {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
  font-size: clamp(2em, 5vw, 6em);
  color: var(--theme-cyan);
}
.project-title p, .about-title p {
  z-index: 4;
}
.project-title p, .about-title p:hover {
  cursor: pointer;
}
svg { width: 100vw; height: 100vh; position: absolute; }
circle { fill: var(--theme-cyan) }

/**Handle Slide animations*/
.slide-left {
    position: absolute;
    top:0;
    width: 100vw;
    transform: translateX(-100vw);
    transition: all 1s ease;
    z-index: 20;
    overflow-y: scroll;
  }
  .slide-left.slideProjectsOut {
    transform: translateX(0);
  }
  .slide-right {
    position: absolute;
    top:0;
    width: 100vw;
    transform: translateX(100vw);
    transition: all 1s ease;
    z-index: 20;
    overflow-y: scroll;
  }
  .slide-right.slideAboutOut {
    transform: translateX(0);
  }
</style>