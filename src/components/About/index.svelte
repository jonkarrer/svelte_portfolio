<script>
  import BgImage from "./BgImage.svelte";
  import Bullets from "./Bullets.svelte";
  import Info from "./Info.svelte";
</script>

<section>
  <article>
    <Info />
    <Bullets />
  </article>
  <BgImage />
</section>

<style>
  /*Lg*/
  @media (min-width: 1024px) {
    section {
      display: flex;
      align-items: center;
    }
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
  /*4k*/
  @media (min-width: 3500px) {
    article {
      width: 50%;
      margin-left: 400px;
    }
  }
</style>
