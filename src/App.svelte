<script>
  import DesktopNav from "./components/DesktopNav/index.svelte";
  import About from "./components/About/index.svelte";
  import Websites from "./components/Websites/index.svelte";
  import SmallApps from "./components/SmallApps/index.svelte";
  import Contact from "./components/Contact/index.svelte";
</script>

<DesktopNav />
<main>
  <div class="outer-wrapper">
    <div class="wrapper">
      <About />
      <Websites />
      <SmallApps />
      <Contact />
    </div>
  </div>
</main>

<style>
  /*Lg*/
  @media (min-width: 1024px) {
    .outer-wrapper {
      width: 100vh;
      height: 100vw;
      min-height: 600px;
      transform: rotate(-90deg) translateX(-100vh);
      -ms-transform: rotate(-90deg) translateX(-100vh);
      -o-transform: rotate(-90deg) translateX(-100vh);
      -moz-transform: rotate(-90deg) translateX(-100vh);
      -webkit-transform: rotate(-90deg) translateX(-100vh);
      transform-origin: top left;
      -ms-transform-origin: top left;
      -moz-transform-origin: top left;
      -webkit-transform-origin: top left;
      overflow-y: scroll;
      overflow-x: hidden;
      position: absolute;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .wrapper {
      display: flex;
      transform: rotate(90deg) translateY(-100vh);
      -ms-transform: rotate(90deg) translateY(-100vh);
      -o-transform: rotate(90deg) translateY(-100vh);
      -moz-transform: rotate(90deg) translateY(-100vh);
      -webkit-transform: rotate(90deg) translateY(-100vh);
      transform-origin: top left;
      -ms-transform-origin: top left;
      -moz-transform-origin: top left;
      -webkit-transform-origin: top left;
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }

  /*2xl*/
  @media (min-width: 1536px) {
    .outer-wrapper {
      min-height: 800px;
    }
  }
  /*3xl*/
  @media (min-width: 2000px) {
    .outer-wrapper {
      min-height: 900px;
    }
  }
  /*4xl*/
  @media (min-width: 2500px) {
    .outer-wrapper {
      min-height: 1000px;
    }
  }
  /*5xl*/
  @media (min-width: 3000px) {
    .outer-wrapper {
      min-height: 1200px;
    }
  }
  /*4k*/
  @media (min-width: 3500px) {
    .outer-wrapper {
      min-height: 1400px;
    }
  }
</style>
