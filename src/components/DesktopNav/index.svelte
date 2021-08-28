<script>
  import Links from "./Links.svelte";
  import Social from "./Social.svelte";
  import Hearts from "./Hearts.svelte";
  import Logo from "./Logo.svelte";
</script>

<header>
  <Logo />
  <Links />
  <Social />
  <Hearts />
</header>

<style>
  header {
    display: none;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    header {
      height: 100vh;
      min-height: 600px;
      width: 110px;

      display: grid;
      place-items: center;

      /** Frosted Glass fallback */
      background-color: rgba(255, 255, 255, 0.4);

      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
    }

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      header {
        background-color: rgba(140, 136, 136, 0.5);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
    header {
      min-height: 760px;
    }
  }
  /*4k*/
  @media (min-width: 3500px) {
    header {
      width: 200px;
    }
  }
</style>
