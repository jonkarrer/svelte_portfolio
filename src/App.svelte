<script>
  import Header from "./components/Splash/Header.svelte";
  import Splash from "./components/Splash/index.svelte";
  import Ecommerce from "./components/Projects/Ecommerce.svelte";
  import SPA from "./components/Projects/SPA.svelte";
  import Landing from "./components/Projects/Landing.svelte";
  import Webapp from "./components/Projects/Webapp.svelte";
  import Tiles from "./components/Footer/Tiles.svelte";
  import Clients from "./components/Footer/Clients.svelte";
  import Contact from "./components/Footer/Contact.svelte";
</script>

<main>
  <Header />

  <Splash />

  <Ecommerce />

  <SPA />

  <Landing />

  <Webapp />

  <footer>
    <Tiles />
    <Clients />
    <Contact />
  </footer>
</main>

<style>
  /*Lg*/
  @media (min-width: 1024px) {
  }

  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
