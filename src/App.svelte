<script>
  import DesktopNav from "./components/DesktopNav/index.svelte";
  import About from "./components/About/index.svelte";
</script>

<DesktopNav />
<main>
  <div class="outer-wrapper">
    <div class="wrapper">
      <About />

      <div class="slide two" />
      <div class="slide three" />
      <div class="slide four" />
    </div>
  </div>
</main>

<style>
  .slide {
    width: 100vw;
    height: 100vh;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    width: 400vw;
    transform: rotate(90deg) translateY(-100vh);
    transform-origin: top left;
  }
  .outer-wrapper {
    width: 100vh;
    height: 100vw;
    transform: rotate(-90deg) translateX(-100vh);
    transform-origin: top left;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  .one {
    background: #efdefe;
  }
  .two {
    background: #a3f3d3;
  }
  .three {
    background: #0bbaa0;
  }
  .four {
    background: #00dfdf;
  }
</style>
