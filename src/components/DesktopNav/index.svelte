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
  /*Md*/
  @media (min-width: 768px) {
    header {
      height: 100vh;
      width: 150px;

      display: grid;
      place-items: center;

      /** Frosted Glass fallback */
      background-color: rgba(255, 255, 255, 0.4);
    }

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      header {
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
  }
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
