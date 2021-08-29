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
    article {
      margin-left: 200px;
    }
  }
  /*3xl*/
  @media (min-width: 2000px) {
  }
  /*4xl*/
  @media (min-width: 2500px) {
    article {
      margin-left: 400px;
    }
  }
  /*5xl*/
  @media (min-width: 3000px) {
  }
  /*4k*/
  @media (min-width: 3500px) {
  }
</style>
