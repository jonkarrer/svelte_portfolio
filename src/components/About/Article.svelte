<script>
  import Bullets from "./Bullets.svelte";
  import Info from "./Info.svelte";
</script>

<article>
  <Info />
  <Bullets />
</article>

<style>
  /*Lg*/
  @media (min-width: 1024px) {
    article {
      width: 50%;
      margin-left: 200px;
      display: grid;
      gap: 60px;
    }
  }
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
