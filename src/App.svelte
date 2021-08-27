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
</style>
