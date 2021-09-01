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
    .wrapper {
      display: flex;
      flex-direction: row;
      transform: rotate(90deg) translateY(-100vh);
      transform-origin: top left;
    }
    .outer-wrapper {
      width: 100vh;
      height: 100vw;
      min-height: 600px;
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
  }

  /*2xl*/
  @media (min-width: 1536px) {
    .outer-wrapper {
      min-height: 850px;
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
      min-height: 1300px;
    }
  }
  /*4k*/
  @media (min-width: 3500px) {
    .outer-wrapper {
      min-height: 1400px;
    }
  }
</style>
