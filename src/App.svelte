<script>
  import Header from "./components/Splash/Header.svelte";
  import Splash from "./components/Splash/Splash.svelte";
  import Ecommerce from "./components/Projects/Ecommerce.svelte";
  import SPA from "./components/Projects/SPA.svelte";
  import Landing from "./components/Projects/Landing.svelte";
  import Webapp from "./components/Projects/Webapp.svelte";
  import Footer from "./components/Footer/index.svelte";
</script>

<main>
  <Header />

  <Splash />

  <Ecommerce />

  <SPA />

  <Landing />

  <Webapp />

  <Footer />
</main>

<style>
  main {
    position: relative;
  }
  /*Lg*/
  @media (min-width: 1024px) {
  }

  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
