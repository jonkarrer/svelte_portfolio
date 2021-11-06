<script>
  import Header from "./components/Header.svelte";
  import Splash from "./components/Splash/index.svelte";
  import Ecommerce from "./components/Project/Ecommerce.svelte";
  import SPA from "./components/Project/SPA.svelte";
  import Landing from "./components/Project/Landing.svelte";
  import Webapp from "./components/Project/Webapp.svelte";
</script>

<main>
  <Header />
  <Splash />
  <Ecommerce />
  <SPA />
  <Landing />
  <Webapp />
</main>

<style>
  /*Lg*/
  @media (min-width: 1024px) {
  }

  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
